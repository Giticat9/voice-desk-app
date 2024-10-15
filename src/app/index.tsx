import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './domain/store';
import { antdConfigProvider, defaultDarkTheme, GlobalStyles } from './domain/styles';
import { UserContextProvider } from './domain/contexts';
import { AppRouterComponent } from './domain/router/routerComponent';
import { RootLayout } from './domain/layouts';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';

const element = document.getElementById('renderer');
if (!element) {
	throw new Error('Could not render app');
}

const root = ReactDOM.createRoot(element);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={defaultDarkTheme}>
					<ConfigProvider theme={antdConfigProvider}>
						<UserContextProvider>
							<RootLayout>
								<AppRouterComponent />
								<GlobalStyles />
							</RootLayout>
						</UserContextProvider>
					</ConfigProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

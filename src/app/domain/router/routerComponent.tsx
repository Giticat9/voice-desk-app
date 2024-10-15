import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from '../../pages/authorization';

export const AppRouterComponent: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<AuthorizationPage />} />
			</Routes>
		</BrowserRouter>
	);
};
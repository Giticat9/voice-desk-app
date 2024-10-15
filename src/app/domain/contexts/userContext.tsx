import React, { useMemo } from 'react';

export interface UserContextProps {
}

const initialContextValues: UserContextProps = {};

export const UserContext = React.createContext<UserContextProps>(initialContextValues);

export const UserContextProvider: React.FC<React.PropsWithChildren> = props => {
	const { children } = props;

	const contextValues = useMemo<UserContextProps>(() => ({}), []);

	return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};
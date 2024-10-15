import React from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps): React.ReactElement => {
	const { ...rest } = props;

	return <Route {...rest} />
}
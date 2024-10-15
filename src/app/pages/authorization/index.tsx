import React from 'react';
import { useNavigate } from 'react-router';
import { AuthorizationCard } from './components/card';
import { AuthProps, RegistrationProps } from '@app-types/auth';

interface AuthorizationPageProps {
}

export const AuthorizationPage: React.FC<AuthorizationPageProps> = props => {
	const navigate = useNavigate();

	const handleAuthClick = (values: AuthProps): void => {
		navigate('/main');
	};

	const handleRegistrationClick = (values: RegistrationProps): void => {
		navigate('/main');
	};

	return (
		<AuthorizationCard onAuthClick={handleAuthClick} onRegistrationClick={handleRegistrationClick} />
	);
};
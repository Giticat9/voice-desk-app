declare module '@app-types/auth' {
	export interface AuthProps {
		email: string;
		password: string;
	}

	export interface RegistrationProps {
		nickname: string;
		email: string;
		password: string;
	}
}
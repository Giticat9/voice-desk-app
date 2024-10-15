import React from 'react';
import { Button, Flex } from 'antd';
import { DefaultFormInput } from '../../../components';
import { Formik } from 'formik';
import { AuthProps } from '@app-types/auth';

interface AuthorizationFormProps {
	onAuthClick: (values: AuthProps) => void;
}

type FormFields = AuthProps;

export const AuthorizationForm: React.FC<AuthorizationFormProps> = props => {
	const { onAuthClick } = props;

	const formInitialValues: FormFields = {
		email: null!,
		password: null!,
	};

	const handleSubmit = (values: FormFields) => {
		onAuthClick && onAuthClick(values);
	};

	return (
		<Formik initialValues={formInitialValues} onSubmit={handleSubmit}>
			{props => (
				<form onSubmit={props.handleSubmit} style={{ width: '100%' }}>
					<Flex vertical gap={12}>
						<DefaultFormInput name="email" placeholder="Введите email пользователя"
										  prefix="alternate_email" />
						<DefaultFormInput name="password" placeholder="Введите пароль"
										  prefix="lock" />
						<Button name="login" type="primary" htmlType="submit"
								style={{ width: 200, marginTop: '1rem' }}>
							Войти
						</Button>
					</Flex>
				</form>
			)}
		</Formik>
	);
};
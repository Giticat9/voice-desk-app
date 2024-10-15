import React from 'react';
import { RegistrationProps } from '@app-types/auth';
import { Formik } from 'formik';
import { Button, Flex } from 'antd';
import { DefaultFormInput } from '../../../components';

interface RegistrationFormProps {
	onRegistrationClick: (values: RegistrationProps) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = props => {
	const { onRegistrationClick } = props;

	const formValues: RegistrationProps = {
		nickname: null!,
		email: null!,
		password: null!,
	};

	const handleSubmit = (values: RegistrationProps) => {
		onRegistrationClick && onRegistrationClick(values);
	};

	return (
		<Formik initialValues={formValues} onSubmit={handleSubmit}>
			{props => (
				<form onSubmit={props.handleSubmit} style={{ width: '100%' }}>
					<Flex vertical gap={12}>
						<DefaultFormInput name="nickname" placeholder="Имя пользователя" prefix="person" />
						<DefaultFormInput name="email" placeholder="Эл-почта пользователя"
										  prefix="alternate_email" />
						<DefaultFormInput name="password" placeholder="Пароль пользователя" prefix="lock" />
						<Button name="login" type="primary" htmlType="submit"
								style={{ width: 200, marginTop: '1rem' }}>
							Регистрация
						</Button>
					</Flex>
				</form>
			)}
		</Formik>
	);
};
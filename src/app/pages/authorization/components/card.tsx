import React, { useState } from 'react';
import styled from 'styled-components';
import { DefaultTabs } from '../../../components';
import { Col, Row } from 'antd';
import { AuthorizationForm } from './auth-form';
import { RegistrationForm } from './reg-form';
import { AuthProps, RegistrationProps } from '@app-types/auth';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 8% 6% 6rem 6%;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    border-radius: 7px;
    padding: 2rem 3rem;

    background: ${props => props.theme.appBackgroundSecondaryColor};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
`;

interface AuthorizationFormComponentProps {
	onAuthClick: (values: AuthProps) => void;
	onRegistrationClick: (values: RegistrationProps) => void;
}

enum TabKeys {
	AUTH = 'auth',
	REG = 'registration'
}

export const AuthorizationCard: React.FC<AuthorizationFormComponentProps> = props => {
	const { onAuthClick, onRegistrationClick } = props;
	const [activeTabKey, setActiveTabKey] = useState<TabKeys>(TabKeys.AUTH);

	const handleTabChange = (key: string): void => {
		setActiveTabKey(key as TabKeys);
	};

	return (
		<Wrapper>
			<Row style={{ width: '100%' }}>
				<Col xxl={12} xl={14} lg={18} md={24} sm={24} xs={24}>
					<Card>
						<Row style={{ width: '100%' }}>
							<Col span={12}>
								<DefaultTabs
									defaultActiveKey={activeTabKey}
									items={[
										{
											key: TabKeys.AUTH,
											label: 'Вход в аккаунт',
										},
										{
											key: TabKeys.REG,
											label: 'Создание аккаунта',
										},
									]}
									onTabChange={handleTabChange}
								/>
							</Col>
						</Row>
						<Row style={{ width: '100%' }}>
							{activeTabKey === TabKeys.AUTH ? (
								<AuthorizationForm onAuthClick={onAuthClick} />
							) : (
								<RegistrationForm onRegistrationClick={onRegistrationClick} />
							)}
						</Row>
					</Card>
				</Col>
			</Row>
		</Wrapper>
	);
};
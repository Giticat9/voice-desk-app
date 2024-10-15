import styled from 'styled-components';
import React from 'react';

export interface RootLayoutProps {
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.appBackgroundColor};
`;

export const RootLayout: React.FC<React.PropsWithChildren<RootLayoutProps>> = props => {
	const { children } = props;

	return (
		<Wrapper>{children}</Wrapper>
	);
};
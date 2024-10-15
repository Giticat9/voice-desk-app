import React from 'react';
import styled from 'styled-components';
import { Field, FieldProps } from 'formik';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px;
	width: 100%;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1) inset;
	padding: 4px 7px;
	width: 100%;
	
	& > input {
		outline: none;
		background: transparent;
		border: none;
		padding: 0.5rem 1rem;
		width: 100%;
		color: ${props => props.theme.appDefaultTextColor};
	}
`;

const Prefix = styled.span`
	font-size: 22px !important;
	color: #4283bb
`;

const ErrorText = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    white-space: break-spaces;
    color: #FF0000;
`;

interface DefaultFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefix?: string;
	error?: string;
	style?: React.CSSProperties;
	full?: boolean;
}

export const DefaultFormInput: React.FC<DefaultFormInputProps> = props => {
	const { name, prefix, error, style, ...rest } = props;

	return (
		<Field name={name}>
			{({ field, meta }: FieldProps) => (
				<Wrapper style={style}>
					<InputWrapper>
						{prefix && <Prefix className="material-symbols-outlined">{prefix}</Prefix>}
						<input {...rest} name={name} />
					</InputWrapper>
				</Wrapper>
			)}
		</Field>
	);
};


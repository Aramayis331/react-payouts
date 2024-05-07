import styled from 'styled-components';

export const SearchWrapper = styled.div`
	position: relative;
	width: 380px;
	margin-left: auto;
`;

export const IconWrapper = styled.div`
	position: absolute;
	right: -15px;
	top: 8px;
`;

export const Input = styled.input`
	width: 100%;
	height: 32px;
	padding: 5px 14px;
	margin-bottom: 16px;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.0015em;
	color: #1a1d1f;
	border-width: 1px;
	border-style: solid;
	background: #6f767e80;
	outline: none;
	border-radius: 6px;

	&::placeholder {
		color: #6f767e;
	}

	&:hover {
		border-color: rgba(39, 40, 44, 0.7);
	}
`;

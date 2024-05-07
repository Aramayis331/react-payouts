import styled from 'styled-components';

export const TableContainer = styled.div`
	overflow-x: auto;
`;
export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const Tr = styled.tr`
	&:nth-child(even) {
		background-color: #f4f4f480;
	}
`;

export const Th = styled.th`
	text-align: left;
	color: #6f767e;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	padding: 16px 24px;
`;

export const Td = styled.td`
	color: #6f767e;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	padding: 16px 24px;
`;

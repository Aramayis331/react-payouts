import styled from 'styled-components';
import { PayoutStatusType } from 'types/payouts';

export const PAYOUT_STATUS_BACKGROUND: { [key: string]: string } = {
	[PayoutStatusType.pending]: '#6F767E66',
	[PayoutStatusType.completed]: '#60CA57',
};
export const PayoutStatusContainer = styled.div<{ status: PayoutStatusType }>`
	width: fit-content;
	display: flex;
	justify-content: center;
	align-content: center;
	background-color: ${props => PAYOUT_STATUS_BACKGROUND[props?.status?.toLowerCase()]};
	color: #1a1d1f;
	border-radius: 6px;
	padding: 2px 8px;
`;

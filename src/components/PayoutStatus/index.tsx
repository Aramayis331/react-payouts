import { FC } from 'react';
import { PayoutStatusType } from 'types/payouts';
import { PayoutStatusContainer } from './styles';

type Props = {
	status: PayoutStatusType;
};
const PayoutStatus: FC<Props> = ({ status }) => <PayoutStatusContainer status={status}>{status}</PayoutStatusContainer>;

export default PayoutStatus;

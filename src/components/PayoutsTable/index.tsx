import { useEffect } from 'react';
import Error from 'components/Error';
import Loading from 'components/Loading';
import PayoutStatus from 'components/PayoutStatus';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { formatDate } from 'utils/formatDate';
import { PAYOUTS_TABLE_HEADERS } from 'constants/payouts';
import { payoutsSelector } from 'store/selectors/payouts';
import { fetchPayoutsThunk } from 'store/slices/payouts/thunk';
import type { Payout } from 'types/payouts';
import { Table, TableContainer, Td, Th, Tr } from './styles';

import Empty from '../Empty';

const PayoutsTable = () => {
	const dispatch = useAppDispatch();
	const { payouts, isLoading, error } = useAppSelector(payoutsSelector);

	useEffect(() => {
		dispatch(fetchPayoutsThunk());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<TableContainer>
			<Table>
				<Tr>{PAYOUTS_TABLE_HEADERS?.map((label, index) => <Th key={index}>{label}</Th>)}</Tr>
				{!!payouts?.data?.length &&
					!isLoading &&
					!error &&
					payouts?.data?.map((payout: Payout) => (
						<Tr key={payout?.username}>
							<Td>{payout?.username}</Td>
							<Td>{formatDate(payout?.dateAndTime)}</Td>
							<Td>
								<PayoutStatus status={payout?.status} />
							</Td>
							<Td>{payout?.value}</Td>
						</Tr>
					))}
				{!payouts?.data?.length && !isLoading && !error && (
					<Tr>
						<Td colSpan={PAYOUTS_TABLE_HEADERS?.length}>
							<Empty />
						</Td>
					</Tr>
				)}
				{isLoading && (
					<Tr>
						<Td colSpan={PAYOUTS_TABLE_HEADERS?.length}>
							<Loading />
						</Td>
					</Tr>
				)}
				{!isLoading && error && (
					<Tr>
						<Td colSpan={PAYOUTS_TABLE_HEADERS?.length}>
							<Error message={error} />
						</Td>
					</Tr>
				)}
			</Table>
		</TableContainer>
	);
};

export default PayoutsTable;

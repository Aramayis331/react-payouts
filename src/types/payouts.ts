export enum PayoutStatusType {
	'pending' = 'pending',
	'completed' = 'completed',
}

export type Payout = {
	dateAndTime: string;
	status: PayoutStatusType;
	username: string;
	value: string;
};

export type Metadata = {
	limit: number;
	page: number;
	totalCount: number;
};

export type Payouts = {
	data: Payout[];
	metadata: Metadata;
};

export type InitialStatePayouts = {
	payouts: Payouts | null;
	isLoading: boolean;
	error: string | undefined;
};

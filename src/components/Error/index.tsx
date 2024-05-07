import { FC } from 'react';
import { ErrorContainer } from './styles';

type Props = {
	message: string;
};
const Error: FC<Props> = ({ message }) => <ErrorContainer>{message}</ErrorContainer>;

export default Error;

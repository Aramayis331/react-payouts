import { Container, HeadingTitle, Mark, Title, TitleContainer } from 'styles/common';
import PayoutsTable from 'components/PayoutsTable';
import Search from 'components/Search';

const Home = () => (
	<Container>
		<HeadingTitle>Payouts</HeadingTitle>
		<TitleContainer>
			<Mark />
			<Title>Payout History</Title>
		</TitleContainer>
		<Search />
		<PayoutsTable />
	</Container>
);

export default Home;

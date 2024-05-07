import styled from 'styled-components';
import { media } from './media';
import { justifyCenter } from './mixins';

export const Container = styled.main`
	max-width: 1240px;
	min-height: 523px;
	margin: 0 auto;

	${media.notebook`max-width: 1024px;`};

	${media.tablet`max-width: 768px;`};

	${media.mobile`max-width: 410px;`};
`;

export const HeadingTitle = styled.h1`
	font-size: 40px;
	font-weight: 600;
	line-height: 48px;
	margin-bottom: 60px;

	${media.notebook`font-size: 36px;`};

	${media.tablet`font-size: 32px;`};

	${media.mobile`font-size: 28px;`};
`;

export const Title = styled.h2`
	font-size: 20px;
	font-weight: 600;
	line-height: 32px;
	margin-bottom: 18px;

	${media.tablet`font-size: 26px;`};
	${media.mobile`font-size: 24px;`};
`;

export const TitleContainer = styled.div`
	${justifyCenter()};
	width: fit-content;
	gap: 16px;
`;

export const Mark = styled.div`
	width: 16px;
	height: 32px;
	border-radius: 4px;
	background: #999dff;
`;

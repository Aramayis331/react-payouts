import { css } from 'styled-components';
import { device } from './breakpoints';

export const media = {
	pc: (...args: any) => css`
		@media${device.pc} {
			${args},
		}
	`,
	notebook: (...args: any) => css`
		@media${device.notebook} {
			${args},
		}
	`,
	tablet: (...args: any) => css`
		@media${device.tablet} {
			${args},
		}
	`,
	mobile: (...args: any) => css`
		@media${device.mobile} {
			${args},
		}
	`,
};

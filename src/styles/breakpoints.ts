const size = {
	sm: '856px', // for mobile screen
	md: '1080px', // for tablets
	lg: '1280px', // for laptops
	xl: '1440px', // for desktop / monitors
};

export const device = {
	mobile: `(max-width: ${size.sm})`,
	tablet: `(max-width: ${size.md})`,
	notebook: `(max-width: ${size.lg})`,
	pc: `(max-width: ${size.xl})`,
};

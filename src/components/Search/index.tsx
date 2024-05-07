import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import useDebounce from 'hooks/useDebounce';
import { fetchPayoutsThunk, searchPayoutsThunk } from 'store/slices/payouts/thunk';
import { ReactComponent as ClearIcon } from 'assets/icons/close.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { IconWrapper, Input, SearchWrapper } from './styles';

const Search = () => {
	const [value, setValue] = useState<string>('');
	const dispatch = useAppDispatch();
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setValue(event?.target?.value);
		if (!event?.target?.value) dispatch(fetchPayoutsThunk());
	};

	const handleClear = (): void => {
		setValue('');
		dispatch(fetchPayoutsThunk());
	};

	const debouncedValue = useDebounce(value);

	useEffect(() => {
		if (debouncedValue) {
			dispatch(searchPayoutsThunk(value));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	return (
		<SearchWrapper>
			<IconWrapper>
				{!value && <SearchIcon />}
				{!!value && <ClearIcon onClick={handleClear} />}
			</IconWrapper>
			<Input placeholder='Search' value={value} onChange={handleChange} />
		</SearchWrapper>
	);
};

export default Search;

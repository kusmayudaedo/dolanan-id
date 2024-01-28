import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

const SearchInput = () => {
	const searchRef = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

	const navigate = useNavigate();

	const onClickCloseSearch = () => {
		if (searchRef.current) {
			searchRef.current.value = '';
			resetGameQuery();
		}
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (searchRef.current) {
					setSearchText(searchRef.current.value);
					navigate('/');
				}
			}}
		>
			<InputGroup size='lg'>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={searchRef}
					borderRadius={20}
					placeholder='Search games...'
					variant='filled'
				/>
				{searchRef.current?.value ? (
					<InputRightElement
						children={
							<Button
								variant='ghost'
								fontSize='xl'
								borderRadius={20}
								onClick={() => {
									onClickCloseSearch();
								}}
							>
								<IoCloseSharp />
							</Button>
						}
					/>
				) : null}
			</InputGroup>
		</form>
	);
};

export default SearchInput;

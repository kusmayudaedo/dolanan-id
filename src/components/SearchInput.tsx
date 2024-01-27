import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const searchRef = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const navigate = useNavigate();
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (searchRef.current) {
					setSearchText(searchRef.current.value);
					navigate('/');
					searchRef.current.value = '';
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
			</InputGroup>
		</form>
	);
};

export default SearchInput;

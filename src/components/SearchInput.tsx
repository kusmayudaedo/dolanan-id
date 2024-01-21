import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const searchRef = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (searchRef.current) onSearch(searchRef.current.value);
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

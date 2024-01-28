import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';

const NavBar = () => {
	const navigate = useNavigate();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

	const onClickAllGames = () => {
		navigate('/');
		resetGameQuery();
	};
	return (
		<>
			<HStack justifyContent='space-between' spacing={4} marginY={4}>
				<Image
					src={logo}
					boxSize='48px'
					cursor='pointer'
					onClick={onClickAllGames}
				/>
				<SearchInput />
				<ColorModeSwitch />
			</HStack>
		</>
	);
};

export default NavBar;

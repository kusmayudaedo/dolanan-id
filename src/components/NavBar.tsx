import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding={5} spacing={4}>
			<Image src={logo} boxSize='48px' />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

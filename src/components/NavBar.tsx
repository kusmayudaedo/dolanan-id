import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding={5}>
			<Image src={logo} boxSize='48px' />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

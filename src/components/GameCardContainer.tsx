import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box width={{ lg: '300px', xl: '400px' }} rounded={10} overflow='hidden'>
			{children}
		</Box>
	);
};

export default GameCardContainer;

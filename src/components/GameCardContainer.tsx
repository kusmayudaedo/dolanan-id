import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			cursor='pointer'
			rounded={10}
			overflow='hidden'
			_hover={{
				transform: 'scale(1.1)',
				borderRadius: '40',
				transition: 'transform .15s ease-in-out;',
				padding: '10px',
				overflow: 'hidden',
			}}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;

import { Box, Icon } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTop = () => {
	return (
		<Box
			position='fixed'
			bottom='0px'
			right='0px'
			opacity='0.1'
			cursor='pointer'
			onClick={() => {
				window.scroll(0, 0);
			}}
			_hover={{
				opacity: 1,
				transform: 'translateY(-20px)',
				transition: 'transform .2s ease-in-out',
			}}
		>
			<Icon boxSize={20}>
				<FaArrowCircleUp />
			</Icon>
		</Box>
	);
};

export default BackToTop;

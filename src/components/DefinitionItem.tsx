import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<Box marginTop={4}>
			<Heading as='dt' fontSize='xl' color='gray.600' marginBottom={2}>
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
};

export default DefinitionItem;

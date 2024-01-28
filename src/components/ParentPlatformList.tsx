import {
	Button,
	Flex,
	Heading,
	Icon,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';

import useParentPlatforms from '../hooks/useParentPlatforms';
import platformIconMap from '../data/parentPlatformsIcon';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const ParentPlatformList = () => {
	const { data: platforms, isLoading, error } = useParentPlatforms();
	const setSelectedParentPlatformId = useGameQueryStore(
		(s) => s.setParentPlatformId
	);
	const navigate = useNavigate();

	const topFivePlatforms = platforms?.results.slice(0, 8);

	if (isLoading) return null;
	if (error) return null;

	return (
		<>
			<Heading>Platforms</Heading>
			<List>
				{topFivePlatforms?.map((platform, idx) => (
					<ListItem key={idx}>
						<Flex
							alignItems='start'
							cursor='pointer'
							marginY={4}
							gap='8px'
							alignContent='center'
						>
							<Icon boxSize='28px' as={platformIconMap[platform.slug]} />
							<Button
								variant='link'
								textAlign='left'
								onClick={() => {
									setSelectedParentPlatformId(platform.id);
									navigate('/');
								}}
							>
								<Text fontSize='2xl'> {platform.name}</Text>
							</Button>
						</Flex>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default ParentPlatformList;

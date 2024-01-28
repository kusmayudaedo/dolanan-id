import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import PlatformCard from '../components/PlatformCard';
import { useEffect } from 'react';
import useGameQueryStore from '../store';

const PlatformsPage = () => {
	const { data, isLoading, error } = usePlatforms();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	useEffect(resetGameQuery, []);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<Stack spacing={4}>
			<Heading fontSize='7xl'>Platforms</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
				{data?.results.map((platform) => (
					<PlatformCard platform={platform} key={platform.id} />
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default PlatformsPage;

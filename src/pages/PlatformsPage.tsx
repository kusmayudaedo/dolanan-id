import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import PlatformCard from '../components/PlatformCard';

const PlatformsPage = () => {
	const { data, isLoading, error } = usePlatforms();

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

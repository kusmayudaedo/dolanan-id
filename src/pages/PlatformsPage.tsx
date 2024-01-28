import { Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import PlatformCard from '../components/PlatformCard';

const PlatformsPage = () => {
	const { data, isLoading, error } = usePlatforms();

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<>
			<Heading fontSize='5xl'>Platforms</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
				{data?.results.map((platform) => (
					<PlatformCard platform={platform} key={platform.id} />
				))}
			</SimpleGrid>
		</>
	);
};

export default PlatformsPage;

import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import GenreCard from '../components/GenreCard';
import useStores from '../hooks/useStores';
import StoreCard from '../components/StoreCard';

const StoresPage = () => {
	const { data, isLoading, error } = useStores();

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<Stack spacing={4}>
			<Heading fontSize='7xl'>Stores</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
				{data?.results.map((store) => (
					<StoreCard store={store} key={store.id} />
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default StoresPage;

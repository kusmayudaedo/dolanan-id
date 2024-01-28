import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import useStores from '../hooks/useStores';
import StoreCard from '../components/StoreCard';
import { useEffect } from 'react';
import useGameQueryStore from '../store';

const StoresPage = () => {
	const { data, isLoading, error } = useStores();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	useEffect(resetGameQuery, []);
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

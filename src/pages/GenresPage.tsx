import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import GenreCard from '../components/GenreCard';
import useGenres from '../hooks/useGenres';
import { useEffect } from 'react';
import useGameQueryStore from '../store';

const GenresPage = () => {
	const { data, isLoading, error } = useGenres();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	useEffect(resetGameQuery, []);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<Stack spacing={4}>
			<Heading fontSize='7xl'>Genres</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
				{data?.results.map((genre) => (
					<GenreCard genre={genre} key={genre.id} />
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default GenresPage;

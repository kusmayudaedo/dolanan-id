import { Heading, SimpleGrid } from '@chakra-ui/react';
import GenreCard from '../components/GenreCard';
import useGenres from '../hooks/useGenres';

const GenresPage = () => {
	const { data, isLoading, error } = useGenres();

	return (
		<>
			<Heading fontSize='5xl'>Genres</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
				{data?.results.map((genre) => (
					<GenreCard genre={genre} key={genre.id} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GenresPage;

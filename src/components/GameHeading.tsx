import { Heading } from '@chakra-ui/react';
import useParentPlatform from '../hooks/useParentPlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading = () => {
	const { gameQuery } = useGameQueryStore();
	const genre = useGenre(gameQuery.genreId);
	const platform = useParentPlatform(gameQuery.platformId);
	const searchText = gameQuery.searchText;

	const heading = `${platform?.name || ''} ${genre?.name || ''}  Games`;

	return (
		<>
			<Heading as='h1' mb={5} fontSize='6xl'>
				{searchText ? `Games search : ${searchText}` : heading}
			</Heading>
		</>
	);
};

export default GameHeading;

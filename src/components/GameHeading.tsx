import { Heading } from '@chakra-ui/react';
import useParentPlatform from '../hooks/useParentPlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';

const GameHeading = () => {
	const { gameQuery } = useGameQueryStore();
	const genre = useGenre(gameQuery.genreId);
	const parentPlatform = useParentPlatform(gameQuery.parentPlatformId);
	const platform = usePlatform(gameQuery.platformId);
	const publisherName = gameQuery.publisherName;
	const storeName = gameQuery.storeName
		? `Available at ${gameQuery.storeName}`
		: '';
	const searchText = gameQuery.searchText;

	const heading = `${publisherName || ''} ${
		parentPlatform?.name || platform?.name || ''
	} ${genre?.name || ''}  Games ${storeName}`;

	return (
		<>
			<Heading as='h1' mb={5} fontSize='6xl'>
				{searchText ? `Games search : ${searchText}` : heading}
			</Heading>
		</>
	);
};

export default GameHeading;

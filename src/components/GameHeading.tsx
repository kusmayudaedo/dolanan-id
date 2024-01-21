import { Heading, usePanGesture } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);
	const platform = usePlatform(gameQuery.platformId);

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
	return (
		<Heading as='h1' mb={5} fontSize='6xl'>
			{heading}
		</Heading>
	);
};

export default GameHeading;

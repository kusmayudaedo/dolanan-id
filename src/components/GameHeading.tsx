import { Heading, usePanGesture } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatform();
	const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
	const platform = platforms?.results.find(
		(p) => p.id === gameQuery.platformId
	);
	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
	return (
		<Heading as='h1' mb={5} fontSize='6xl'>
			{heading}
		</Heading>
	);
};

export default GameHeading;

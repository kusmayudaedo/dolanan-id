import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';

const GameDetailPage = () => {
	const { slug } = useParams();
	/* 
	slug! used to tell typescript that slug is never undefined, because if the slug is undefined we never go to this page, instead will return Error Page
	 */
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	// !game used so we don't need optional chaining in mark up
	if (error || !game) throw error;

	return (
		<>
			<Heading fontSize='3xl' marginBottom={2}>
				{game.name}
			</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
		</>
	);
};

export default GameDetailPage;

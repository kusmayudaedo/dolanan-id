import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

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
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
		</>
	);
};

export default GameDetailPage;

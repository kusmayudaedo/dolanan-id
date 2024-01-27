import {
	Box,
	Button,
	GridItem,
	HStack,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';
import GameScreenshot from '../components/GameScreenshot';
import PlatformIconList from '../components/PlatformIconList';
import moment from 'moment';

const GameDetailPage = () => {
	const { slug } = useParams();
	/* 
	slug! used to tell typescript that slug is never undefined, because if the slug is undefined we never go to this page, instead will return Error Page
	 */
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	// !game used so we don't need optional chaining in mark up
	if (error || !game) throw error;
	console.log(game.id);
	return (
		<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
			<GridItem>
				<HStack>
					<Box backgroundColor='white' paddingX={2}>
						<Text color='black'>
							{moment(game.released).format('MMM DD, YYYY').toUpperCase()}
						</Text>
					</Box>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<Text color='gray.500'>
						AVERAGE PLAY TIME : {game.playtime} HOURS
					</Text>
				</HStack>

				<Heading fontSize='5xl' marginBottom={2}>
					{game.name}
				</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshot gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;

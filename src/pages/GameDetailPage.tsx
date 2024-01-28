import {
	Box,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from '@chakra-ui/react';
import moment from 'moment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BuyCard from '../components/BuyCard';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshot from '../components/GameScreenshot';
import GameTrailer from '../components/GameTrailer';
import PlatformIconList from '../components/PlatformIconList';
import useGame from '../hooks/useGame';
import useGameQueryStore from '../store';

const GameDetailPage = () => {
	const { slug } = useParams();
	/* 
	slug! used to tell typescript that slug is never undefined, because if the slug is undefined we never go to this page, instead will return Error Page
	 */
	const { data: game, isLoading, error } = useGame(slug!);
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	useEffect(resetGameQuery, []);

	if (isLoading) return <Spinner />;

	// !game used so we don't need optional chaining in mark up
	if (error || !game) throw error;

	return (
		<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
			<GridItem>
				<Flex flexWrap='wrap' gap={4}>
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
				</Flex>

				<Heading fontSize='5xl' marginY={4}>
					{game.name}
				</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshot gameId={game.id} />
				<BuyCard stores={game.stores.map((s) => s.store)} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;

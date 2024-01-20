import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCarsSkeleton from './GameCarsSkeleton';

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={10}
				padding='20px'
			>
				{isLoading && skeletons.map((skeleton) => <GameCarsSkeleton />)}
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;

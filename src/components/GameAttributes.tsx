import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2} as='dl'>
			<DefinitionItem term='Platforms'>
				{game.parent_platforms?.map(({ platform }) => (
					<Text fontSize='lg' key={platform.id}>
						{platform.name}
					</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term='Metascore'>
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem term='Genres'>
				{game.genres.map((genre) => (
					<Text fontSize='lg' key={genre.id}>
						{genre.name}
					</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term='Publishers'>
				{game.publishers.map((publisher) => (
					<Text fontSize='lg' key={publisher.id}>
						{publisher.name}
					</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;

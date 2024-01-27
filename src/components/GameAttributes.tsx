import { Badge, HStack, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import DefinitionItem from './DefinitionItem';
import moment from 'moment';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} as='dl'>
			<DefinitionItem term='Platforms'>
				<Wrap>
					{game.parent_platforms?.map(({ platform }, idx) => (
						<Text fontSize='xl' key={platform.id} whiteSpace='nowrap'>
							{idx === game.parent_platforms.length - 1
								? `${platform.name}`
								: `${platform.name},`}
						</Text>
					))}
				</Wrap>
			</DefinitionItem>
			<DefinitionItem term='Metascore'>
				<Badge
					fontSize='2xl'
					paddingX={2}
					borderRadius='4px'
					colorScheme='green'
				>
					{game.metacritic}
				</Badge>
			</DefinitionItem>
			<DefinitionItem term='Genres'>
				<HStack>
					{game.genres.map((genre) => (
						<Text fontSize='xl' key={genre.id}>
							{genre.name}
						</Text>
					))}
				</HStack>
			</DefinitionItem>
			<DefinitionItem term='Released date'>
				{
					<Text fontSize='xl'>
						{moment(game.released).format('MMM DD, YYYY')}
					</Text>
				}
			</DefinitionItem>
			<DefinitionItem term='Publishers'>
				{game.publishers.map((publisher) => (
					<Text fontSize='xl' key={publisher.id}>
						{publisher.name}
					</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;

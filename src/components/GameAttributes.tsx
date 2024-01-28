import {
	Badge,
	HStack,
	SimpleGrid,
	Text,
	Wrap,
	Button,
} from '@chakra-ui/react';
import Game from '../interfaces/Game';
import DefinitionItem from './DefinitionItem';
import moment from 'moment';
import useGameQueryStore from '../store';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	const navigate = useNavigate();
	const setSelectedPlatformId = useGameQueryStore((s) => s.setParentPlatformId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const setSelectedPublisherId = useGameQueryStore((s) => s.setPublisherId);

	const onClickPlatform = (platformId: number) => {
		setSelectedPlatformId(platformId);
		navigate('/');
	};

	const onClickGenreId = (genreId: number) => {
		setSelectedGenreId(genreId);
		navigate('/');
	};

	const onClickPublisher = (publisherId: number) => {
		setSelectedPublisherId(publisherId);
		navigate(`/`);
	};
	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} as='dl'>
				<DefinitionItem term='Platforms'>
					<Wrap>
						{game.parent_platforms?.map(({ platform }, idx) => (
							<Button
								variant='link'
								key={platform.id}
								onClick={() => onClickPlatform(platform.id)}
							>
								<Text fontSize='xl' whiteSpace='nowrap'>
									{idx === game.parent_platforms.length - 1
										? `${platform.name}`
										: `${platform.name},`}
								</Text>
							</Button>
						))}
					</Wrap>
				</DefinitionItem>
				<DefinitionItem term='Metascore'>
					<Badge
						fontSize='xl'
						paddingX={2}
						borderRadius='4px'
						colorScheme='green'
					>
						{game.metacritic}
					</Badge>
				</DefinitionItem>
				<DefinitionItem term='Genres'>
					<HStack>
						{game.genres.map((genre, idx) => (
							<Button
								variant='link'
								key={genre.id}
								onClick={() => onClickGenreId(genre.id)}
							>
								<Text fontSize='xl'>
									{idx === game.genres.length - 1
										? `${genre.name}`
										: `${genre.name},`}
								</Text>
							</Button>
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
					{game.publishers.map((publisher, idx) => (
						<Button
							marginRight={1}
							variant='link'
							key={publisher.id}
							onClick={() => onClickPublisher(publisher.id)}
						>
							<Text fontSize='xl'>
								{idx === game.publishers.length - 1
									? `${publisher.name}`
									: `${publisher.name},`}
							</Text>
						</Button>
					))}
				</DefinitionItem>
			</SimpleGrid>
			<DefinitionItem term='Website'>
				<Link to={game.website} target='_blank'>
					<Text fontSize='xl'>{game.website}</Text>
				</Link>
			</DefinitionItem>
		</>
	);
};

export default GameAttributes;

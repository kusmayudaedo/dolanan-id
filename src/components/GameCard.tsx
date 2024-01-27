import {
	Box,
	Card,
	CardBody,
	GridItem,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Text,
	Flex,
	Button,
} from '@chakra-ui/react';
import Game from '../interfaces/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useGameQueryStore from '../store';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const genreSummary =
		game.genres.length > 2 ? game.genres.slice(0, 2) : game.genres;

	const onClickGenre = (genreId: number) => {
		setSelectedGenreId(genreId);
	};

	return (
		<Card variant='filled'>
			<Link to={`/game/${game.slug}`}>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					objectFit='fill'
				/>
			</Link>
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Link to={`/game/${game.slug}`}>
					<Flex alignItems='center'>
						<Heading fontSize='2xl' textAlign='left' marginRight={2}>
							{game.name}
						</Heading>
						<Emoji rating={game.rating_top} />
					</Flex>
				</Link>
				<Box marginTop={4}>
					<HStack
						justifyContent='space-between'
						borderBottom='2px solid #262626'
						paddingBottom={2}
						marginBottom={2}
					>
						<Text fontWeight='semibold' color='gray.500'>
							Release date:
						</Text>
						<Text>{moment(game.released).format('MMM DD, YYYY')}</Text>
					</HStack>
					<SimpleGrid
						columns={2}
						justifyContent='space-between'
						borderBottom='2px solid #262626'
						paddingBottom={2}
						templateColumns={'60px 1fr'}
					>
						<GridItem>
							<Text fontWeight='semibold' color='gray.500'>
								Genres:
							</Text>
						</GridItem>
						<GridItem>
							<HStack justifyContent='end'>
								{genreSummary.map((genre, idx) => (
									<Button
										key={idx}
										variant='link'
										// whiteSpace='normal'
										onClick={() => onClickGenre(genre.id)}
									>
										{genreSummary.length === 1
											? genre.name
											: idx === 1
											? genre.name
											: `${genre.name},`}
									</Button>
								))}
							</HStack>
						</GridItem>
					</SimpleGrid>
				</Box>
			</CardBody>
		</Card>
	);
};

export default GameCard;

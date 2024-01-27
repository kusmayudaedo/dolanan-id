import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Link to={`/game/${game.slug}`}>
			<Card variant='filled'>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					objectFit='fill'
				/>
				<CardBody>
					<HStack justifyContent='space-between' marginBottom={3}>
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize='2xl' textAlign='left'>
						{game.name} <Emoji rating={game.rating_top} />
					</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;

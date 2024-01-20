import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card rounded={10} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody>
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;

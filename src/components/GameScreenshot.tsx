import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
	gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;

	if (error) return null;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
			{data?.results.map((screenshot) => (
				<Image src={screenshot.image} key={screenshot.id} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshot;

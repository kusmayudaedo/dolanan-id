import { HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const GamePage = () => {
	return (
		<>
			<GameHeading />
			<HStack mb={5}>
				<SortSelector />
				<PlatformSelector />
			</HStack>
			<GameGrid />
		</>
	);
};

export default GamePage;

import { Grid, Show, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{ base: '1fr', lg: '250px 1fr' }}
		>
			<Show above='lg'>
				<GridItem area='aside' paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area='main' paddingX={5} paddingY='5px'>
				<GameHeading />
				<HStack mb={5}>
					<SortSelector />
					<PlatformSelector />
				</HStack>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;

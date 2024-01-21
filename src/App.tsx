import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			padding={3}
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: '1fr', lg: '250px 1fr' }}
		>
			<GridItem area='nav'>
				<NavBar
					onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
				/>
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' paddingX={5}>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genreId: genre.id })
						}
						selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>
			<GridItem area='main' paddingX={5} paddingY='5px'>
				<GameHeading gameQuery={gameQuery} />
				<HStack mb={5}>
					<SortSelector
						selectedOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
					/>
					<PlatformSelector
						selectedPlatformId={gameQuery.platformId}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platformId: platform?.id })
						}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;

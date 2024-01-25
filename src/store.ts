import { create } from 'zustand';

interface GameQuery {
	genreId?: number;
	platformId?: number | undefined;
	sortOrder?: string;
	searchText?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number | undefined) => void;
	setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {
		sortOrder: '',
		//Make default value of search order to '' so first query we get the relevance games
	},
	setSearchText: (searchText) =>
		set((store) => ({
			gameQuery: {
				...store.gameQuery,
				searchText,
				sortOrder: '-metacritic',
				//When searching games, sort it by the popularity so we get the popular game first
			},
		})),
	setGenreId: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
		})),
}));

export default useGameQueryStore;

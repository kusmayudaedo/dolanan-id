import { create } from 'zustand';

interface GameQuery {
	genreId?: number | undefined;
	platformId?: number | undefined;
	sortOrder?: string;
	searchText?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number | undefined) => void;
	setPlatformId: (platformId: number | undefined) => void;
	setSortOrder: (sortOrder: string) => void;
	resetGameQuery: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {
		sortOrder: '',
		//Make default value of search order to '' so first query we get the relevance games
	},
	setSearchText: (searchText) =>
		set(() => ({
			gameQuery: {
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
	resetGameQuery: () => set(() => ({ gameQuery: { sortOrder: '' } })),
}));

export default useGameQueryStore;

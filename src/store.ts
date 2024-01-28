import { create } from 'zustand';

interface GameQuery {
	genreId?: number | undefined;
	parentPlatformId?: number | undefined;
	sortOrder?: string;
	searchText?: string | undefined;
	publisherId?: number | undefined;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string | undefined) => void;
	setGenreId: (genreId: number | undefined) => void;
	setParentPlatformId: (parentPlatformId: number | undefined) => void;
	setSortOrder: (sortOrder: string) => void;
	setPublisherId: (publisherId: number | undefined) => void;
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
	setParentPlatformId: (parentPlatformId) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, parentPlatformId: parentPlatformId },
		})),
	setSortOrder: (sortOrder) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
		})),
	setPublisherId: (publisherId) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, publisherId },
		})),
	resetGameQuery: () => set(() => ({ gameQuery: { sortOrder: '' } })),
}));

export default useGameQueryStore;

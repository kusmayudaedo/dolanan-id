import Genre from './Genre';
import ParentPlatform from './ParentPlatform';
import Publisher from './Publisher';

export default interface Game {
	id: number;
	name: string;
	slug: string;
	description_raw: string;
	background_image: string;
	genres: Genre[];
	parent_platforms: { platform: ParentPlatform }[];
	metacritic: number;
	rating_top: number;
	publishers: Publisher[];
	playtime: number;
	released: string;
	website: string;
	added: number;
}

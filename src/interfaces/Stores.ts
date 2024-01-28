import Game from './Game';

export default interface Store {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	domain: string;
	games: Game[];
}

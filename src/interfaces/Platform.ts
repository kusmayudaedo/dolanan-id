import Game from './Game';

export default interface Platform {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	games_count: number;
	games: Game[];
}

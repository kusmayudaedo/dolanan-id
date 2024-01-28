import Game from './Game';

export default interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
	games_count: number;
	games: Game[];
}

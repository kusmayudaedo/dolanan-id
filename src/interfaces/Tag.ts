import Game from './Game';

export default interface Tag {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	games: Game[];
}

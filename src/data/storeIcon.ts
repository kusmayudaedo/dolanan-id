import {
	FaApple,
	FaGooglePlay,
	FaItchIo,
	FaPlaystation,
	FaSteam,
	FaXbox,
} from 'react-icons/fa6';
import { SiGogdotcom, SiNintendo, SiEpicgames } from 'react-icons/si';
import { IconType } from 'react-icons';

const storeIconMap: { [key: string]: IconType } = {
	steam: FaSteam,
	'playstation-store': FaPlaystation,
	'xbox-store': FaXbox,
	'apple-appstore': FaApple,
	gog: SiGogdotcom,
	nintendo: SiNintendo,
	xbox360: FaXbox,
	'google-play': FaGooglePlay,
	itch: FaItchIo,
	'epic-games': SiEpicgames,
};

export default storeIconMap;

import { IconType } from 'react-icons';
import { FaGhost, FaHashtag } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import { LiaDoorOpenSolid } from 'react-icons/lia';

const browseItem = [
	{ slug: 'genres', name: 'Genres' },
	{ slug: 'platforms', name: 'Platforms' },
	{ slug: 'stores', name: 'Stores' },
	{ slug: 'publishers', name: 'Publishers' },
	{ slug: 'tags', name: 'Tags' },
];

export const browseItemMap: { [key: string]: IconType } = {
	genres: FaGhost,
	platforms: IoGameControllerOutline,
	stores: IoGameControllerOutline,
	publishers: LiaDoorOpenSolid,
	tags: FaHashtag,
};

export default browseItem;

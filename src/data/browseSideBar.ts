import { FaGhost, FaDownload, FaHashtag } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import { LiaDoorOpenSolid } from 'react-icons/lia';

const browseItem = [
	{ slug: 'genres', name: 'Genres', icon: FaGhost },
	{ slug: 'platform', name: 'Platform', icon: IoGameControllerOutline },
	{ slug: 'stores', name: 'Stores', icon: FaDownload },
	{ slug: 'publisher', name: 'Publisher', icon: LiaDoorOpenSolid },
	{ slug: 'tags', name: 'Tags', icon: FaHashtag },
];

export default browseItem;

import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

const platformIconMap: { [key: string]: IconType } = {
	pc: FaWindows,
	playstation: FaPlaystation,
	xbox: FaXbox,
	nintendo: SiNintendo,
	mac: FaApple,
	linux: FaLinux,
	ios: MdPhoneIphone,
	android: FaAndroid,
	web: BsGlobe,
};

export default platformIconMap;

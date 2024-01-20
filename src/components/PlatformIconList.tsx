import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
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
	const limitPlatform = 5;
	return (
		<HStack marginY={1}>
			{platforms.length > limitPlatform ? (
				<HStack>
					{platforms.slice(0, limitPlatform).map((platform) => (
						<Icon
							as={iconMap[platform.slug]}
							fontWeight='bold'
							boxSize='16px'
							key={platform.id}
						/>
					))}
					<Text fontWeight='bold'>+{platforms.length - limitPlatform}</Text>
				</HStack>
			) : (
				platforms.map((platform) => (
					<Icon
						as={iconMap[platform.slug]}
						fontWeight='bold'
						boxSize='16px'
						key={platform.id}
					/>
				))
			)}
		</HStack>
	);
};

export default PlatformIconList;

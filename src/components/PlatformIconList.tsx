import { HStack, Icon, Text } from '@chakra-ui/react';
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
import Platform from '../interfaces/Platform';
import useGameQueryStore from '../store';

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

	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const onClickPlatform = (platformId: number) => {
		setSelectedPlatformId(platformId);
	};

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
							cursor='pointer'
							onClick={() => onClickPlatform(platform.id)}
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
						cursor='pointer'
						onClick={() => onClickPlatform(platform.id)}
					/>
				))
			)}
		</HStack>
	);
};

export default PlatformIconList;

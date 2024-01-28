import { HStack, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import platformIconMap from '../data/parentPlatformsIcon';
import ParentPlatform from '../interfaces/ParentPlatform';
import useGameQueryStore from '../store';

interface Props {
	platforms: ParentPlatform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const navigate = useNavigate();
	const limitPlatform = 5;

	const setSelectedPlatformId = useGameQueryStore((s) => s.setParentPlatformId);

	const onClickPlatform = (platformId: number) => {
		setSelectedPlatformId(platformId);
		navigate('/');
	};

	return (
		<HStack marginY={1}>
			{platforms.length > limitPlatform ? (
				<HStack>
					{platforms.slice(0, limitPlatform).map((platform) => (
						<Icon
							as={platformIconMap[platform.slug]}
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
						as={platformIconMap[platform.slug]}
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

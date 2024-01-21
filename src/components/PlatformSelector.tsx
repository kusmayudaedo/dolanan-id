import {
	Button,
	Text,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	HStack,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';
import { FaCheck } from 'react-icons/fa';

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatform();
	if (error) return null;
	return (
		<Menu isLazy>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => onSelectPlatform(null)}>
					<Text as='em' color='tomato'>
						Clear
					</Text>
				</MenuItem>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}
					>
						<HStack width='100%' paddingX={1} justifyContent='space-between'>
							<Text>{platform.name}</Text>
							<Text color='#33ff6d' fontSize='small'>
								{platform.id === selectedPlatform?.id ? <FaCheck /> : ''}
							</Text>
						</HStack>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

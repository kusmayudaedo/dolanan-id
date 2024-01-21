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
import usePlatform, { Platform } from '../hooks/usePlatforms';
import { FaCheck } from 'react-icons/fa';

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatform();
	const platform = data?.results.find((p) => p.id === selectedPlatformId);
	if (error) return null;
	return (
		<Menu isLazy>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || 'Platforms'}
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
								{platform.id === selectedPlatformId ? <FaCheck /> : ''}
							</Text>
						</HStack>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

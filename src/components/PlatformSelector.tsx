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
import usePlatforms from '../hooks/usePlatforms';
import { FaCheck } from 'react-icons/fa';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const { data, error } = usePlatforms();
	const platform = usePlatform(selectedPlatformId);
	if (error) return null;
	return (
		<Menu isLazy>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={() => setSelectedPlatformId(undefined)}>
					<Text as='em' color='tomato'>
						Clear
					</Text>
				</MenuItem>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => setSelectedPlatformId(platform.id)}
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

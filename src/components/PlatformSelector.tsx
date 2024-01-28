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
import useParentPlatforms from '../hooks/useParentPlatforms';
import { FaCheck } from 'react-icons/fa';
import useParentPlatform from '../hooks/useParentPlatform';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const PlatformSelector = () => {
	const navigate = useNavigate();
	const selectedPlatformId = useGameQueryStore(
		(s) => s.gameQuery.parentPlatformId
	);
	const setSelectedParentPlatformId = useGameQueryStore(
		(s) => s.setParentPlatformId
	);
	const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const storeId = useGameQueryStore((s) => s.gameQuery.storeId);
	const { data, error } = useParentPlatforms();
	const parentPlatform = useParentPlatform(selectedPlatformId);
	if (error) return null;
	if (storeId) return null;

	return (
		<Menu isLazy>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{parentPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				<MenuItem
					onClick={() => {
						setSelectedParentPlatformId(undefined);
						setSelectedPlatformId(undefined);
					}}
				>
					<Text as='em' color='tomato'>
						Clear
					</Text>
				</MenuItem>
				{data?.results.map((parentPlatform) => (
					<MenuItem
						key={parentPlatform.id}
						onClick={() => {
							setSelectedParentPlatformId(parentPlatform.id);
							navigate('/');
						}}
					>
						<HStack width='100%' paddingX={1} justifyContent='space-between'>
							<Text>{parentPlatform.name}</Text>
							<Text color='#33ff6d' fontSize='small'>
								{parentPlatform.id === selectedPlatformId ? <FaCheck /> : ''}
							</Text>
						</HStack>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;

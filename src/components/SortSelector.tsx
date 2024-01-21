import {
	Button,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	selectedOrder: string;
}

const SortSelector = ({
	onSelectSortOrder,
	selectedOrder = '-metacritic',
}: Props) => {
	const sortOrders = [
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-release', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === selectedOrder
	);

	return (
		<Menu isLazy>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				<HStack spacing='2px'>
					<Text>Order by:</Text>
					<Text fontWeight='bold'>
						{currentSortOrder?.label || 'Popularity'}
					</Text>
				</HStack>
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSelectSortOrder(order.value)}
						key={order.value}
					>
						<HStack width='100%' paddingX={1} justifyContent='space-between'>
							<Text>{order.label}</Text>
							<Text color='#33ff6d' fontSize='small'>
								{order.value === selectedOrder ? <FaCheck /> : ''}
							</Text>
						</HStack>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
export default SortSelector;

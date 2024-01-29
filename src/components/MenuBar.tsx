import {
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Icon,
	Text,
	Box,
	Heading,
	MenuDivider,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import browseItem, { browseItemMap } from '../data/browseSideBar';
import useGameQueryStore from '../store';

const MenuBar = () => {
	const navigate = useNavigate();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

	const onClickHome = () => {
		navigate('/');
		resetGameQuery();
	};
	return (
		<Menu isLazy strategy='fixed'>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				fontSize='2xl'
				icon={<GiHamburgerMenu />}
				variant='outline'
			/>
			<MenuList paddingX={2}>
				<MenuItem onClick={() => onClickHome()}>
					<Heading fontSize='2xl'>Home</Heading>
				</MenuItem>
				<MenuDivider />
				<MenuItem>
					<Heading fontSize='2xl'>Browse</Heading>
				</MenuItem>
				{browseItem.map((item, idx) => (
					<Link to={`/${item.slug}`} key={idx}>
						<MenuItem>
							<Flex alignItems='center' cursor='pointer' marginY={1} gap='8px'>
								<Icon boxSize='24px' as={browseItemMap[item.slug]} />
								<Box>
									<Text fontSize='xl'> {item.name}</Text>
								</Box>
							</Flex>
						</MenuItem>
					</Link>
				))}
			</MenuList>
		</Menu>
	);
};

export default MenuBar;

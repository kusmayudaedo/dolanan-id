import {
	Button,
	Flex,
	Heading,
	Icon,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';
import browseItem, { browseItemMap } from '../data/browseSideBar';
import { Link } from 'react-router-dom';

const BrowseList = () => {
	return (
		<>
			<Heading>Browse</Heading>
			<List>
				{browseItem.map((item, idx) => (
					<ListItem key={idx}>
						<Flex alignItems='center' cursor='pointer' marginY={4} gap='8px'>
							<Icon boxSize='28px' as={browseItemMap[item.slug]} />
							<Link to={`/${item.slug}`}>
								<Button variant='link' textAlign='left'>
									<Text fontSize='2xl'> {item.name}</Text>
								</Button>
							</Link>
						</Flex>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default BrowseList;

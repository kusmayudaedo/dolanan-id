import {
	Button,
	Flex,
	Heading,
	Icon,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';
import browseItem from '../data/browseSideBar';
import { Link } from 'react-router-dom';

const BrowseList = () => {
	const IconComponent = (icon: any) => <Icon as={icon} />;
	return (
		<>
			<Heading>Browse</Heading>
			<List>
				{browseItem.map((item, idx) => (
					<ListItem key={idx}>
						<Flex alignItems='start' cursor='pointer' marginY={2}>
							<Icon boxSize='36px'>{IconComponent(item.icon)}</Icon>
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

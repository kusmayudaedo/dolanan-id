import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/react';

import { IoPersonOutline } from 'react-icons/io5';
import { MdGamepad } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';
import Store from '../interfaces/Stores';

interface Props {
	store: Store;
}

const StoreCard = ({ store }: Props) => {
	const setSelectedStoreId = useGameQueryStore((s) => s.setStoreId);
	const setSelectedStoreName = useGameQueryStore((s) => s.setStoreName);
	const navigate = useNavigate();
	const topThreeGame = store.games?.slice(0, 3);
	return (
		<Box
			_hover={{
				transform: 'scale(1.1)',
				borderRadius: '40',
				transition: 'transform .15s ease-in-out;',
				padding: '10px',
				overflow: 'hidden',
			}}
		>
			<Card
				bg={`rgba(0, 0, 0, 0.1) url(${store.image_background})`}
				backgroundSize='cover'
				backgroundPosition='center'
				objectFit='fill'
				height='250px'
			>
				<CardBody backgroundImage='linear-gradient(rgba(255,255,255, 0.05), rgba(0, 0, 0, 1) )'>
					<Stack spacing={4}>
						<Flex justifyContent='center'>
							<Button
								variant='ghost'
								whiteSpace='normal'
								onClick={() => {
									setSelectedStoreId(store.id);
									setSelectedStoreName(store.name);
									navigate('/');
								}}
							>
								<Heading>{store.name}</Heading>
							</Button>
						</Flex>

						<Flex
							justifyContent='space-between'
							marginY={3}
							paddingBottom={2}
							borderBottom='1px solid rgba(255, 2555,255, 0.3)'
						>
							<Text fontSize='xl' fontWeight='bold'>
								Popular items
							</Text>
							<Flex alignItems='center' gap={1}>
								<Text fontSize='xl' fontWeight='bold'>
									{store.games_count.toLocaleString()}
								</Text>
								<MdGamepad />
							</Flex>
						</Flex>
					</Stack>

					<Stack spacing={1}>
						{topThreeGame?.map((game) => (
							<Flex key={game.id} justifyContent='space-between'>
								<Link to={`/game/${game.slug}`}>
									<Text textDecor='underline'>{game.name}</Text>
								</Link>
								<Flex alignItems='center' gap={1}>
									<Text>{game.added.toLocaleString()}</Text>
									<IoPersonOutline />
								</Flex>
							</Flex>
						))}
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
};

export default StoreCard;

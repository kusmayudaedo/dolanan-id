import {
	Flex,
	HStack,
	Icon,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import storeIconMap from '../data/storeIcon';
import Store from '../interfaces/Stores';

interface Props {
	stores: Store[];
}

const BuyCard = ({ stores }: Props) => {
	return (
		<Stack spacing={3} mt={10}>
			<Text fontSize='2xl' fontWeight='bold' color='gray.600'>
				Where to buy
			</Text>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
				{stores.map((store) => (
					<Link href={`https://${store.domain}`} isExternal key={store.id}>
						<Flex
							height='56px'
							margin={2}
							wrap='wrap'
							justifyContent='center'
							backgroundColor='gray.700'
							borderRadius={10}
							_hover={{ backgroundColor: 'white', color: 'black' }}
						>
							<HStack alignItems='center' spacing={5}>
								<Text fontSize='2xl'>{store.name}</Text>
								<Icon
									as={storeIconMap[store.slug]}
									fontWeight='bold'
									boxSize='24px'
								/>
							</HStack>
						</Flex>
					</Link>
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default BuyCard;

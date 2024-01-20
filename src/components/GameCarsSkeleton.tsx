import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCarsSkeleton = () => {
	return (
		<Card width={{ sm: '100%', lg: '300px' }}>
			<Skeleton height='200px' />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCarsSkeleton;

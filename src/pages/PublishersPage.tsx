import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import usePublishers from '../hooks/usePublishers';
import PublisherCard from '../components/PublisherCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';

const PublishersPage = () => {
	const { data, isLoading, error, fetchNextPage, hasNextPage } =
		usePublishers();
	const fetchPublishersCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<InfiniteScroll
			dataLength={fetchPublishersCount}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<Stack spacing={4}>
				<Heading fontSize='7xl'>Publishers</Heading>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((publisher) => (
								<PublisherCard publisher={publisher} key={publisher.id} />
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</Stack>
		</InfiniteScroll>
	);
};

export default PublishersPage;

import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TagCard from '../components/TagCard';
import useTags from '../hooks/useTags';
import useGameQueryStore from '../store';

const TagsPage = () => {
	const { data, isLoading, error, fetchNextPage, hasNextPage } = useTags();
	const fetchPublishersCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	useEffect(resetGameQuery, []);

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
				<Heading fontSize='7xl'>#Tags</Heading>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} mt={2}>
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((tag) => (
								<TagCard tag={tag} key={tag.id} />
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</Stack>
		</InfiniteScroll>
	);
};

export default TagsPage;

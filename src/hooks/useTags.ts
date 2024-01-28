import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import Publisher from '../interfaces/Publisher';
import ms from 'ms';

const apiClient = new APIClient<Publisher>('/tags');

const useTags = () =>
	useInfiniteQuery<FetchResponse<Publisher>>({
		queryKey: ['tags'],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({ params: { page: pageParam } }),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('24h'),
	});

export default useTags;

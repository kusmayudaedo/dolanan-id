import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Publisher from '../interfaces/Publisher';
import ms from 'ms';

const apiClient = new APIClient<Publisher>('/publishers');

const usePublishers = () =>
	useQuery({
		queryKey: ['publishers'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});

export default usePublishers;

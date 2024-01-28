import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Store from '../interfaces/Stores';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Store>('/stores');

const useStores = () =>
	useQuery({
		queryKey: ['stores'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});

export default useStores;

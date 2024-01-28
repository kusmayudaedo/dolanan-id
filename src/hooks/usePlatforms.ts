import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import Platform from '../interfaces/Platform';

const apiClient = new APIClient<Platform>('/platforms');

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});

export default usePlatforms;

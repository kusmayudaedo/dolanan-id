import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import APIClient from '../services/api-client';
import { Platform } from '../interfaces/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery({
		queryKey: ['platform'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		initialData: platforms,
	});

export default usePlatforms;

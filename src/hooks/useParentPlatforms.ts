import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import ParentPlatform from '../interfaces/ParentPlatform';
import APIClient from '../services/api-client';

const apiClient = new APIClient<ParentPlatform>('/platforms/lists/parents');

const useParentPlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		initialData: platforms,
	});

export default useParentPlatforms;

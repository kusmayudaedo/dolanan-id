import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import ParentPlatform from '../interfaces/ParentPlatform';
import APIClient from '../services/api-client';

const apiClient = new APIClient<ParentPlatform>('/platforms/lists/parents');

const useParentPlatforms = () =>
	useQuery({
		queryKey: ['parent-platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});

export default useParentPlatforms;

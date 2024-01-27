import { useQuery } from '@tanstack/react-query';
import Publisher from '../interfaces/Publisher';
import APIClient from '../services/api-client';
import ms from 'ms';

const apiClient = new APIClient<Publisher>(`/publishers`);

const usePublisher = (id: number) => {
	if (!id) return null;
	return useQuery({
		queryKey: ['publisher', id],
		queryFn: () => apiClient.get(id),
		staleTime: ms('24h'),
	});
};

export default usePublisher;

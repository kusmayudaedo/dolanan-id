import useParentPlatforms from './useParentPlatforms';

const useParentPlatform = (id?: number) => {
	const { data: platforms } = useParentPlatforms();
	return platforms?.results.find((p) => p.id === id);
};

export default useParentPlatform;

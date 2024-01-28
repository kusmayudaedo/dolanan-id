import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
	const { data: platform } = usePlatforms();
	return platform?.results.find((p) => p.id === id);
};

export default usePlatform;

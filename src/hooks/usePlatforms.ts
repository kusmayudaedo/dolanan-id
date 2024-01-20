import useData from './useData';
import { Platform } from './useGames';

const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;

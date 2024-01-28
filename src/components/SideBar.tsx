import { Heading, Link, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import GenreList from './GenreList';
import useGameQueryStore from '../store';
import BrowseList from './BrowseList';
import ParentPlatformList from './ParentPlatformList';

const SideBar = () => {
	const navigate = useNavigate();
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

	const onClickAllGames = () => {
		navigate('/');
		resetGameQuery();
	};
	return (
		<Stack spacing={4}>
			<Link>
				<Heading marginBottom={2} cursor='pointer' onClick={onClickAllGames}>
					All Games
				</Heading>
			</Link>
			<BrowseList />
			<ParentPlatformList />
			<GenreList />
		</Stack>
	);
};

export default SideBar;

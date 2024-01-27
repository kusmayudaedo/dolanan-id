import { Grid, GridItem, Heading, Show } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';
import useGameQueryStore from '../store';

const Layout = () => {
	const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
	const navigate = useNavigate();

	const onClickAllGames = () => {
		navigate('/');
		resetGameQuery();
	};

	return (
		<Grid
			padding={5}
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: '1fr', lg: '250px 1fr' }}
		>
			<GridItem area='nav' marginBottom={5}>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside'>
					<Heading
						as='button'
						fontSize='3xl'
						marginBottom={2}
						cursor='pointer'
						onClick={onClickAllGames}
					>
						All Games
					</Heading>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area='main' marginLeft={5}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default Layout;

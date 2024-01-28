import { Grid, GridItem, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Layout = () => {
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
					<SideBar />
				</GridItem>
			</Show>
			<GridItem area='main' marginLeft={5}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default Layout;

import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import GameDetailPage from './pages/GameDetailPage';
import GamePage from './pages/GamePage';
import Layout from './pages/Layout';
import GenresPage from './pages/GenresPage';
import PlatformsPage from './pages/PlatformsPage';
import PublishersPage from './pages/PublishersPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <GamePage /> },
			{ path: 'game/:slug', element: <GameDetailPage /> },
			{ path: 'genres', element: <GenresPage /> },
			{ path: 'platforms', element: <PlatformsPage /> },
			{ path: 'publishers', element: <PublishersPage /> },
		],
	},
]);

export default router;

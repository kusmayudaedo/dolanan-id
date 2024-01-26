import { Box, Heading, Text } from '@chakra-ui/react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<NavBar />
			<Box padding={3}>
				<Heading>Oops</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? 'This page does not exist.'
						: 'An unexpected error occured.'}
				</Text>
				<Link to={'/'}>Back home</Link>
			</Box>
		</>
	);
};

export default ErrorPage;

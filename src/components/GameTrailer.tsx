import { Box } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailers(gameId);

	if (isLoading) return null;

	if (error) return null;

	const trailers = data?.results[0];

	return (
		<Box marginY={4}>
			{trailers ? (
				<video
					src={trailers?.data['max']}
					poster={trailers?.preview}
					controls
				/>
			) : null}
		</Box>
	);
};

export default GameTrailer;

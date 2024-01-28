import {
	HStack,
	List,
	ListItem,
	Image,
	Heading,
	Button,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const navigate = useNavigate();

	if (error) return null;
	if (isLoading) return null;
	return (
		<>
			<Heading mb={3} fontSize='3xl'>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
							/>
							<Button
								onClick={() => {
									setSelectedGenreId(genre.id);
									navigate('/');
								}}
								fontSize='xl'
								variant='link'
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								whiteSpace='normal'
								textAlign='left'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;

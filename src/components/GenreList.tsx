import {
	HStack,
	List,
	ListItem,
	Image,
	Heading,
	Button,
	Text,
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
			<Heading fontSize='3xl'>Genres</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY='5px' marginY={1}>
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
								variant='link'
								whiteSpace='normal'
								textAlign='left'
							>
								<Text
									fontSize='2xl'
									fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								>
									{genre.name}
								</Text>
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;

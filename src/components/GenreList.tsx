import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Heading,
	Button,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
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
								onClick={() => onSelectGenre(genre)}
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

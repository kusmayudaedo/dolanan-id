import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Spinner,
	Heading,
	Button,
} from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genres) => void;
	selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<>
			<Heading mb={2}>Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize='32px'
								borderRadius={8}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize='xl'
								variant='link'
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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

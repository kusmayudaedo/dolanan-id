import {
	Button,
	Flex,
	Heading,
	Image,
	List,
	ListItem,
	Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const {
		setParentPlatformId,
		setPlatformId,
		setPublisherId,
		setPublisherName,
		setStoreId,
		setStoreName,
		setTagId,
		setTagName,
	} = useGameQueryStore();

	const navigate = useNavigate();

	if (error) return null;
	if (isLoading) return null;
	return (
		<>
			<Heading fontSize='3xl'>Genres</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY='5px' marginY={1}>
						<Flex gap='8px' marginY={1}>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
							/>
							<Button
								onClick={() => {
									setSelectedGenreId(genre.id);
									setParentPlatformId(undefined);
									setPlatformId(undefined);
									setPublisherId(undefined);
									setPublisherName(undefined);
									setStoreId(undefined);
									setStoreName(undefined);
									setTagId(undefined);
									setTagName(undefined);
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
						</Flex>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_REACT_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
      year: new Date(movie.release_date).getFullYear(),
      quality: movie.vote_average > 7 ? '4K' : 'HD', // Example quality logic
      duration: '120min', // Note: TMDB doesn't provide duration in this endpoint
      reviews: movie.vote_count,
      genre: movie.genre_ids[0], // We'll need to map this to actual genre names
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const fetchTVShows = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${import.meta.env.VITE_REACT_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results.map(show => ({
      id: show.id,
      title: show.name,
      posterPath: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
      rating: show.vote_average,
      year: new Date(show.first_air_date).getFullYear(),
      quality: show.vote_average > 7 ? '4K' : 'HD',
      duration: 'TV Series',
      reviews: show.vote_count,
      genre: show.genre_ids[0],
    }));
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};

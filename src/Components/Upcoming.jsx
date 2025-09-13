/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, IconButton, Grid, Card, CardMedia, CardContent, Typography, Rating, CircularProgress } from '@mui/material';
// import { fetchUpcomingMovies, fetchTVShows } from '../API/tmdb';

function MovieCard({ movie }) {
  return (
    <div className="bg-[rgba(24,27,32,0.7)] rounded-2xl h-full flex flex-col transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-2xl"
        src={movie.posterPath}
        alt={movie.title}
      />
      <div className="flex-grow p-4 text-white">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-[#E6C800] text-[#181B20] px-2 py-1 rounded text-xs font-bold">
            {movie.quality}
          </span>
          <span className="bg-white/10 text-white px-2 py-1 rounded text-xs">
            {movie.duration}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <Rating
            value={movie.rating / 2}
            precision={0.5}
            readOnly
            size="small"
            sx={{
              '& .MuiRating-iconFilled': {
                color: '#E6C800',
              },
            }}
          />
          <span className="text-xs text-white/70">
            ({movie.reviews} reviews)
          </span>
        </div>
        <p className="text-xs text-white/70">
          Year: {movie.year}
        </p>
      </div>
    </div>
  );
}

function UpcomingTabs() {
  const [value, setValue] = useState(1);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        if (value === 1) {
          const movieData = await fetchUpcomingMovies();
          setMovies(movieData);
        } else if (value === 0) {
          const tvData = await fetchTVShows();
          setTvShows(tvData);
        }
      } catch (err) {
        setError('Failed to load content. Please try again later.');
        console.error('Error loading content:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePrev = () => setValue((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setValue((prev) => Math.min(prev + 1, 2));

  const currentContent = value === 0 ? tvShows : value === 1 ? movies : [];

  return (
    <Box>
      <div className="flex flex-wrap items-center gap-4 mt-2 mb-6">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{
            background: 'transparent',
            '.MuiTab-root': {
              color: '#fff',
              borderRadius: '16px',
              px: { xs: 2, sm: 3 },
              py: 1,
              minWidth: { xs: 80, sm: 100 },
              fontWeight: 500,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              background: 'rgba(24,27,32,0.7)',
              marginRight: { xs: 1, sm: 2 },
              border: 'none',
              transition: 'all 0.2s',
            },
            '.Mui-selected': {
              color: '#fff',
              border: '2px solid #E6C800',
              boxShadow: '0 0 8px #E6C80044',
            },
          }}
        >
         <Tab label="Movies" />
          <Tab label="TV Shows" />
          <Tab label="Anime" />
        </Tabs>
        <div className="flex items-center gap-2">
          <IconButton 
            sx={{ 
              color: '#fff',
              padding: { xs: '4px', sm: '8px' }
            }} 
            onClick={handlePrev} 
            disabled={value === 0}
          >
            {/* <ArrowBackIosNewIcon /> */}
          </IconButton>
          <IconButton 
            sx={{ 
              color: '#fff',
              padding: { xs: '4px', sm: '8px' }
            }} 
            onClick={handleNext} 
            disabled={value === 2}
          >
            {/* <ArrowForwardIosIcon /> */}
          </IconButton>
        </div>
      </div>

      {loading ? (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress sx={{ color: '#E6C800' }} />
        </Box>
      ) : error ? (
        <Box p={4} textAlign="center" color="error.main">
          {error}
        </Box>
      ) : currentContent.length === 0 ? (
        <Box p={4} textAlign="center" color="white">
          No content available at the moment.
        </Box>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2">
          {currentContent.map((item) => (
            <div key={item.id} className="w-full">
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}

function Upcoming() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <h3 className="uppercase text-yellow-500 text-sm sm:text-base font-medium tracking-wide">
          online streaming
        </h3>
        <div className="mt-6 sm:mt-8">
          <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
            Upcoming Movies
          </h2>
          <UpcomingTabs />
        </div>
      </section>
    </>
  );
}

export default Upcoming;
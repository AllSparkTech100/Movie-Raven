import React, { useState, useEffect } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Tabs, Tab, Box, IconButton, Rating, CircularProgress } from '@mui/material';
import { fetchUpcomingMovies, fetchTVShows } from '../API/tmdb';

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

// Removed duplicate UpcomingTabs component. All logic is in Upcoming.

function Upcoming() {
  const [value, setValue] = useState(1);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselPage, setCarouselPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive items per page
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    }
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

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
    setCarouselPage(0); // Reset carousel when tab changes
  }, [value]);

  const handleChange = (event, newValue) => setValue(newValue);
  // Arrow buttons now control carousel page
  const currentContent = value === 0 ? tvShows : value === 1 ? movies : [];
  const totalPages = currentContent.length > 0 ? Math.ceil(currentContent.length / itemsPerPage) : 1;
  // Infinite carousel logic
  const handlePrev = () => {
    setCarouselPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const handleNext = () => {
    setCarouselPage((prev) => (prev + 1) % totalPages);
  };
  // Get paged content
  const pagedContent = currentContent.slice(carouselPage * itemsPerPage, (carouselPage + 1) * itemsPerPage);
  // If wrapping, show from start
  if (pagedContent.length < itemsPerPage && currentContent.length > 0) {
    pagedContent.push(...currentContent.slice(0, itemsPerPage - pagedContent.length));
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <h3 className="uppercase text-yellow-500 text-sm sm:text-base font-medium tracking-wide">
        online streaming
      </h3>
      <div className="lg:m-0 lg:flex lg:items-center lg:justify-between mt-6 sm:mt-8">
        <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl lg:m-0 mb-4 sm:mb-6">
          Upcoming Movies
        </h2>
        <div className="w-full lg:w-auto">
          <div className="flex flex-wrap items-center gap-4">
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
              >
                <MdArrowBackIosNew size={20} />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: '#fff',
                  padding: { xs: '4px', sm: '8px' }
                }} 
                onClick={handleNext}
              >
                <MdArrowForwardIos size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel below title and tabs */}
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
        <div className={`grid gap-4 px-2 mt-8 w-full grid-cols-1 sm:grid-cols-3 lg:grid-cols-4`}>
          {pagedContent.map((item, idx) => (
            <div key={item.id || idx} className="w-full">
              <MovieCard movie={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Upcoming;
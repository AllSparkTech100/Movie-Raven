import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, IconButton, Grid, Card, CardMedia, CardContent, Typography, Rating, CircularProgress } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fetchUpcomingMovies, fetchTVShows } from '../API/tmdb';

function MovieCard({ movie }) {
  return (
    <Card sx={{ 
      background: 'rgba(24,27,32,0.7)',
      borderRadius: '16px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.03)',
      }
    }}>
      <CardMedia
        component="img"
        height="300"
        image={movie.posterPath}
        alt={movie.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, color: '#fff' }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <Typography
            variant="caption"
            sx={{
              bgcolor: '#E6C800',
              color: '#181B20',
              px: 1,
              py: 0.5,
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            {movie.quality}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              px: 1,
              py: 0.5,
              borderRadius: '4px',
            }}
          >
            {movie.duration}
          </Typography>
        </Box>
        <Typography variant="h6" component="div" sx={{ mb: 1, fontWeight: 'bold' }}>
          {movie.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
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
          <Typography variant="body2" color="rgba(255,255,255,0.7)">
            ({movie.reviews} reviews)
          </Typography>
        </Box>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">
          Year: {movie.year}
        </Typography>
      </CardContent>
    </Card>
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
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 4 }}>
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
              px: 3,
              py: 1,
              minWidth: 100,
              fontWeight: 500,
              fontSize: '1rem',
              background: 'rgba(24,27,32,0.7)',
              marginRight: 2,
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
          <Tab label="TV Shows" />
          <Tab label="Movies" />
          <Tab label="Anime" />
        </Tabs>
        <IconButton sx={{ color: '#fff', ml: 1 }} onClick={handlePrev} disabled={value === 0}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton sx={{ color: '#fff', ml: 1 }} onClick={handleNext} disabled={value === 2}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

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
        <Grid container spacing={3}>
          {currentContent.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

function Upcoming() {
  return (
    <>
      <section className="px-4 py-4">
        <h3 className="uppercase text-yellow-500">
          online streaming
        </h3>
        <div className='flex flex-col' style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', marginBottom: '1rem' }}>Upcoming Movies</h2>
          <UpcomingTabs />
        </div>
      </section>
    </>
  );
}

export default Upcoming;
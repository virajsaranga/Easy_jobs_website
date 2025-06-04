import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


//hero section functions


const HeroSection = ({ onBrowseClick }) => {
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1581090700227-1c065c1823e9?auto=format&fit=crop&w=1650&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          mb: 2,
          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
        }}
      >
        Find Your Dream Job Today
      </Typography>


      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          fontWeight: 300,
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          mb: 4,
          textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
          maxWidth: '600px',
        }}
      >
        Explore thousands of job opportunities across various categories. Your future starts here!
      </Typography>

      <Button
        onClick={onBrowseClick}
        component={Link}
        to="/jobs"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#ff5722',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          px: 4,
          py: 1.5,
          borderRadius: '30px',
          textTransform: 'capitalize',
          boxShadow: '0 4px 12px rgba(138, 128, 128, 0.3)',
          '&:hover': {
            backgroundColor: '#e64a19',
          },
        }}
      >
        Browse Jobs
      </Button>
    </Box>
  );
};

export default HeroSection;

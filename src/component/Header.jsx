import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Header component for the Jobify application
const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#0d47a1',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 'bold',
            fontSize: '24px',
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          Jobify
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: '#fff',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/jobs"
            sx={{
              color: '#fff',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Jobs
          </Button>
          <Button
            component={Link}
            to="/categories"
            sx={{
              color: '#fff',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Categories
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: '#fff',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { Box, Typography, Grid, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0d47a1',
        color: '#fff',
        mt: 6,
        px: { xs: 3, md: 10 },
        py: 5,
      }}
    >
      <Grid container spacing={4}>
        {/* Logo and About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Jobify
          </Typography>
          <Typography variant="body2">
            Jobify is your gateway to thousands of job opportunities across various industries.
            Start your career journey with us today!
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/jobs" underline="hover" color="inherit">
              Jobs
            </Link>
            <Link href="/categories" underline="hover" color="inherit">
              Categories
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: support@jobify.com
            <br />
            Phone: +94 77 123 4567
            <br />
            Address: 123, Job Street, Colombo, Sri Lanka
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

      <Typography variant="body2" align="center" sx={{ color: '#ccc' }}>
        © {new Date().getFullYear()} Jobify. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;


import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Welcome to the Admin Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>Use the menu to manage jobs and admins.</Typography>
    </Box>
  );
};

export default Dashboard;

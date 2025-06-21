
import React from 'react';
import { Box, Typography } from '@mui/material';
import JobPostForm from '../components/JobPostForm';
import JobListAdmin from '../components/JobListAdmin';

const ManageJobs = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Manage Jobs</Typography>
      <JobPostForm />
      <JobListAdmin />
    </Box>
  );
};



export default ManageJobs;

// frontend/admin/components/JobListAdmin.jsx
import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const JobListAdmin = () => {
  const jobs = ['Frontend Developer', 'Backend Engineer', 'UI/UX Designer']; // Dummy data

  return (
    <Box>
      {jobs.map((job, index) => (
        <Paper key={index} sx={{ p: 2, mb: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{job}</Typography>
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Paper>
      ))}
    </Box>
  );
};

export default JobListAdmin;

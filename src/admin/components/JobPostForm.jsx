// frontend/admin/components/JobPostForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

// This component allows admins to post new job listings by entering a job title and submitting the form.
const JobPostForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    console.log('Posting job:', title);
    setTitle('');
  };

  return (
    <Box sx={{ my: 2, display: 'flex', gap: 2 }}>
      <TextField label="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Post Job</Button>
    </Box>
  );
};

export default JobPostForm;

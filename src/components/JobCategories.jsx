import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const categories = [
  { id: 1, name: 'Software Development', jobs: 125 },
  { id: 2, name: 'Marketing & Sales', jobs: 78 },
  { id: 3, name: 'Design & Creative', jobs: 53 },
  { id: 4, name: 'Customer Support', jobs: 44 },
  { id: 5, name: 'Finance & Accounting', jobs: 32 },
  { id: 6, name: 'Project Management', jobs: 21 },
];

const JobCategories = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: 6,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Job Categories
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: '#0d47a1' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Available Jobs</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{cat.jobs}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ textTransform: 'capitalize' }}
                  >
                    Explore
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JobCategories;

// frontend/admin/components/AdminNavbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/admin/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/admin/jobs">Manage Jobs</Button>
        <Button color="inherit" component={Link} to="/admin/admins">Admins</Button>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;

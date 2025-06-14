// frontend/admin/components/AdminNavbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


// This component renders the admin navigation bar with links to different admin pages and a logout button.
const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  // The handleLogout function clears the admin token from local storage and redirects to the admin login page.
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

// frontend/admin/adminRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ManageJobs from './pages/ManageJobs';
import ManageAdmins from './pages/ManageAdmins';
import AdminNavbar from './components/AdminNavbar';
import AdminRoute from '../routes/AdminRoute'; // We'll create this in user routes

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={<AdminRoute><AdminNavbar /><Dashboard /></AdminRoute>}
      />
      <Route
        path="/admin/jobs"
        element={<AdminRoute><AdminNavbar /><ManageJobs /></AdminRoute>}
      />
      <Route
        path="/admin/admins"
        element={<AdminRoute><AdminNavbar /><ManageAdmins /></AdminRoute>}
      />
      <Route path="/admin/*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  );
};

export default AdminRoutes;

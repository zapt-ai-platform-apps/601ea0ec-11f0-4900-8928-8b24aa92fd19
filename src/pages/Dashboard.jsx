import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import UserDashboard from './UserDashboard';
import BrandDashboard from './BrandDashboard';
import AdminDashboard from './AdminDashboard';

export default function Dashboard() {
  const { role } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12">
      {role === 'user' && <UserDashboard />}
      {role === 'brand' && <BrandDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </div>
  );
}
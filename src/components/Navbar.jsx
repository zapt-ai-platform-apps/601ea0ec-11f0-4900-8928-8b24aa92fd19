import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseClient';

export default function Navbar() {
  const { session } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Influencer Connect
        </Link>
        <div className="flex items-center space-x-4">
          {!session ? (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
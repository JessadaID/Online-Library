'use client'
import Link from 'next/link';
import { useUser } from '../context/UserContext';
import { useState } from 'react';

export function Navbar() {
  const { user, logout, loading, isAuthenticated } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    setShowDropdown(false);
  };

  return (
    <nav className="bg-emerald-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg font-semibold">
            Online Library
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          {loading ? (
            // Loading state
            <div className="animate-pulse bg-emerald-500 h-8 w-24 rounded"></div>
          ) : isAuthenticated ? (
            // User is logged in
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="hidden sm:block">{user?.name ||'User'}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm text-gray-700 font-medium">{user?.name || 'User'}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    โปรไฟล์
                  </Link>
                  
                  <Link
                    href="/my-books"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    หนังสือของฉัน
                  </Link>
                  
                  <Link
                    href="/favorites"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    รายการโปรด
                  </Link>
                  
                  <hr className="my-1" />
                  
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                  >
                    ออกจากระบบ
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in
            <>
              <Link 
                href="/auth/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                เข้าสู่ระบบ
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-white text-emerald-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                สมัครสมาชิก
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowDropdown(false)}
        ></div>
      )}
    </nav>
  );
}
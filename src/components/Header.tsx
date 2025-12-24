import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">L</span>
              </div>
              <span className="text-gray-900">L-earn</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/opportunities"
              className={`transition-colors ${
                isActive('/opportunities') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Opportunities
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/opportunities"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive('/opportunities') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Opportunities
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

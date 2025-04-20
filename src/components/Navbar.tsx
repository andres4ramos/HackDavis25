import React, { useState, useEffect } from 'react';
import { Car, Menu, X, Info, Mail, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gradient-to-b from-gray-900/70 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car size={28} className={`${isScrolled ? 'text-red-700' : 'text-white'}`} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-red-700' : 'text-white'}`}>
              Bulldog Parking
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors`}>
              <div className="flex items-center space-x-1">
                <Info size={18} />
                <span>About</span>
              </div>
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors`}>
              <div className="flex items-center space-x-1">
                <Mail size={18} />
                <span>Contact</span>
              </div>
            </Link>
            <button 
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors flex items-center space-x-1"
              onClick={() => navigate('/login')}
            >
              <UserCircle size={18} />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-red-600 transition-colors py-2 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-red-600 transition-colors py-2 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={18} />
              <span>Contact</span>
            </Link>
            <button 
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors flex items-center justify-center space-x-2"
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/login');
              }}
            >
              <UserCircle size={18} />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

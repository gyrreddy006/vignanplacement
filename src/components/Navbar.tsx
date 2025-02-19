import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const skillsDropdownRef = useRef(null);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('supabase.auth.token');
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleSkillsDropdown = () => {
    setSkillsDropdownOpen(!skillsDropdownOpen);
  };

  const closeDropdowns = () => {
    setSkillsDropdownOpen(false);
  };

  useEffect(() => {
    closeDropdowns();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (skillsDropdownRef.current && !skillsDropdownRef.current.contains(event.target as Node) && skillsDropdownOpen) {
        setSkillsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [skillsDropdownOpen, skillsDropdownRef]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">PlacementPrep</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            
            <div className="relative" ref={skillsDropdownRef}>
              <button
                className="text-gray-700 hover:text-indigo-600 flex items-center"
                onClick={toggleSkillsDropdown}
              >
                Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {skillsDropdownOpen && (
                <div
                  className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
                >
                  <Link to="/skills/technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">
                    Technical Skills
                  </Link>
                  <Link to="/skills/non-technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">
                    Non-Technical Skills
                  </Link>
                   <Link to="/quiz" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    All Quizzes
                  </Link>
                  <Link to="/quiz/technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Technical Quizzes
                  </Link>
                  <Link to="/quiz/non-technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Non-Technical Quizzes
                  </Link>
                </div>
              )}
            </div>

            <Link to="/practice" className="text-gray-700 hover:text-indigo-600">Practice Problems</Link>
            <Link to="/placement-drives" className="text-gray-700 hover:text-indigo-600">Placement Drives</Link>
            
            {/* Profile Link */}
            <Link to="/profile" className="text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/skills/technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Technical Skills</Link>
            <Link to="/skills/non-technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Non-Technical Skills</Link>
             <Link to="/quiz" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              All Quizzes
            </Link>
            <Link to="/quiz/technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              Technical Quizzes
            </Link>
            <Link to="/quiz/non-technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              Non-Technical Quizzes
            </Link>
            <Link to="/practice" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Practice Problems</Link>
            <Link to="/placement-drives" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Placement Drives</Link>
            <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

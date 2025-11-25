import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { ChatWidget } from './components/ChatWidget';
import { Menu, X, Github, Linkedin, Cpu } from 'lucide-react';
import { CONTACT } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navClasses = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-600'}`;

  const mobileNavClasses = ({ isActive }: { isActive: boolean }) => 
    `block px-4 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`;

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 hover:opacity-80 transition-opacity">
            <div className="bg-slate-900 text-white p-1.5 rounded-lg">
              <Cpu className="w-5 h-5" />
            </div>
            <span>Zane.Tsai</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navClasses}>Home</NavLink>
            <NavLink to="/resume" className={navClasses}>Resume</NavLink>
            <NavLink to="/projects" className={navClasses}>Projects</NavLink>
            
            <div className="w-px h-5 bg-slate-300 mx-2"></div>
            
            <div className="flex items-center gap-4">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl">
          <div className="space-y-1">
            <NavLink to="/" className={mobileNavClasses}>Home</NavLink>
            <NavLink to="/resume" className={mobileNavClasses}>Resume</NavLink>
            <NavLink to="/projects" className={mobileNavClasses}>Projects</NavLink>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4 px-4">
             <a href={CONTACT.linkedin} className="text-slate-500 hover:text-blue-600">LinkedIn</a>
             <a href="https://github.com" className="text-slate-500 hover:text-slate-900">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Zane Tsai. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs">
          Designed with React, Tailwind, and Gemini AI.
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
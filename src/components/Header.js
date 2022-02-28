import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './Resume';
import Footer from './Footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainpage">
      <div className="mainContent">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

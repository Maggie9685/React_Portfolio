import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div class="px-3 py-2 bg-special">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#home" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none" onClick={() => handlePageChange('Home')}>
            <h1 class="text-nav">Maggie Lai</h1>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#about" class="nav-link" onClick={() => handlePageChange('About')}>
                <h5 class="text-nav">About</h5>
              </a>
            </li>
            <li>
              <a href="#porfolio" class="nav-link" onClick={() => handlePageChange('Project')}>
                <h5 class="text-nav">Porfolio</h5>
              </a>
            </li>
            <li>
              <a href="#contact" class="nav-link" onClick={() => handlePageChange('Contact')}>
                <h5 class="text-nav">Contact</h5>
              </a>
            </li>
            <li>
              <a href="#resume" class="nav-link" onClick={() => handlePageChange('Resume')}>
                <h5 class="text-nav">Resume</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

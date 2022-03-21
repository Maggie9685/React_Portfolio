import React from 'react';

export default function Resume() {
  return (
    <div className="text-center">
      <h1 className="main-title">Resume</h1>
      <div className="resume">
        <a href="https://drive.google.com/file/d/1QNWGsot8czX_WjxPLsPl9FlvmGykWWYs/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-link">
          <p class="resume-p">Download my resume</p>
        </a>
        <h4>Front-end Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

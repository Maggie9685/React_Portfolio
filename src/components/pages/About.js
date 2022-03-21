import React from 'react';
import coverImage from '../../assets/profile.jpg';

export default function About() {
  return (
    <div className="text-center">
      <h1 className="main-title">About Me</h1>
      <div className="center">
        <img src={coverImage} className="img-fluid rounded-circle mx-auto d-block mb-3" style={{ width: "40%" }} alt="cover" />
        <p className="aboutP"> 
          Trying to find out reason of code not functioning properly is tiring, but it 
          is also satisifying when seeing these lines of code turns out to be something 
          cool like website for local business/communities or application to simpify daily task.
          learning web development is the best decision I have ever made. It is fun and challenging. 
          And I would love to make more cool website and application!
        </p>
      </div>
    </div>
  );
}

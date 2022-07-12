import React from 'react';

export default function About() {

  return (
    <div>
      <h2 className="w-100 px-1 text-white"> <u>About</u></h2>
      <div className='row'>
        <div className="col-9 p-2">
          <p className="bg-secondary text-white"> Hi, I'm Tim. I'm an award winning Civil and Structural
            Design Engineer with experience in both the public and private sectors.
            <br />
            With 8 years experience, I have designed bridges, roads, houses, subdivisions, dams,
            retaining walls and more.
            <br />
            Most recently I have enrolled in the USYD-Trilogy Coding Bootcamp, to learn the basics of
            web development.
            For further information, please refer to my CV, which can be accessed

            <a href="./assets/TimPolo CV.pdf"><u>here.</u></a>
          </p>
        </div>
        <div className="col-3 p-2">
          <img className="w-100" src={require('./IPWEA Photo.png')} alt="A headshot of Tim Polo" />
        </div>
      </div>
    </div>
  );
}

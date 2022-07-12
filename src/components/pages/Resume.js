import React from 'react';
import resumePDF from "../../assets/misc/TimPolo CV.pdf";

export default function About() {

  return (
    <div>
      <h2 className="w-100 px-1 text-white"> <u>Resume</u></h2>
      <div className='row'>
        <div className="col-9 p-2">
          <p className="bg-secondary text-white">
            For further information, please refer to my CV, which can be accessed
            <a href={resumePDF} target="_blank" rel="noreferrer"><u> here.</u></a>
          </p>

          <p className="bg-secondary text-white">
            Some of my professional proficiencies include:<br /><br />
            <u>Software Technologies:</u> VS Code, GitBash, GitHub, GitLab, Node, Electron.<br />
            <u>Software Languages:</u> HTML, CSS, Javascript, Python. <br />
            <u>Structural Design Experience:</u> Reinforced and Prestressed Concrete Design, Steel Design, Cold Formed Steel Design,
            Timber Design, Masonry Design.<br />
            <u>Structural Project Experience:</u> Bridges, Dwellings, Sheds, Decks, Retaining Walls, Miscellaneous Structures.<br />
            <u>Structural Software: </u> Revit, AutoCad, FEA with Robot Structural Analysis and SkyCiv, AutoDesk Structural Bridge Design,
            ClearCalcs, Structural Toolkit, Excel.<br />
            <u>Civil Design:</u> Geometric Road Design, Subdivision Design, Stormwater Pit and Pipe Networks, Sewer & Water Service
            Networks, Flooding & Hydraulic Studies to ARR 2019 using 1d and 2d Flood Modelling.<br />
            <u>Civil Project Experience:</u> Bridges, Dwellings, Commercial Developments, Subdivisions, Roads, Driveways, Culverts, Flood
            Modelling<br />
            <u>Civil Software: </u>AutoCad Civil 3d, HEC-RAS, RORB, Excel<br />
            <u>Project Management:</u> Bridges, Subdivisions & Residences<br />


            <a href={resumePDF} target="_blank" rel="noreferrer"><u> here.</u></a>
          </p>
        </div>
        <div className="col-3 p-2">
          <img className="w-100" src={require('./IPWEA Photo.png')} alt="A headshot of Tim Polo" />
        </div>
      </div>
    </div>
  );
}

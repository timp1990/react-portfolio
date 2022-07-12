import React from 'react';
import image0 from "../../assets/images/techblog.JPG"
import image1 from "../../assets/images/projecthub.JPG"
import image2 from "../../assets/images/lanesBridge.jpg"
import image3 from "../../assets/images/teamprofile.JPG"
import image4 from "../../assets/images/WeatherDashboard.JPG"
import image5 from "../../assets/images/WorkdayScheduler.JPG"
import image6 from "../../assets/images/Fischers Aerial.JPG"
import image7 from "../../assets/images/3b Nyora Close Photo.JPG"


const styles = {
    card: {
        width: '90%',
        background: '#e8eaf6'
    }
}

function Portfolio() {
    var projectsArray = [
        { id: 0, file: image0, project: 'Tech Blog', description: 'A Blog Website for Tech People', link: "https://dry-sea-52050.herokuapp.com/", gitHub: "https://github.com/timp1990/Tech-Blog" },
        { id: 3, file: image3, project: 'Team Profile Generator', description: 'Use Inquirer to generate a team website', link: "https://www.youtube.com/watch?v=TQAOtdu7KJ0", gitHub: "https://github.com/timp1990/Team-Profile-Generator" },
        { id: 1, file: image1, project: 'Project Hub - 1 of a team of 4', description: 'Part of a team that made a project management website', link: "https://projecthub-crm.herokuapp.com/login", gitHub: "https://github.com/wilgru/projecthub" },
        { id: 5, file: image5, project: 'Workday Scheduler', description: 'A daily planner for a standard workday', link: 'https://timp1990.github.io/Work-Day-Scheduler/', gitHub: "https://github.com/timp1990/Work-Day-Scheduler" },
        { id: 6, file: image6, project: 'Fischers Bridge', description: '35m x 5m x 10m Concrete Bridge', link: "https://www.nbnnews.com.au/2020/06/17/largest-mobile-crane-used-in-bridge-build-at-tamban/" },
        { id: 7, file: image7, project: 'Residence', description: 'Coffs Harbour Residence', link: "https://www.google.com/maps/place/3+Nyora+Cl,+Coffs+Harbour+NSW+2450/@-30.3052227,153.1065517,18.87z/data=!4m5!3m4!1s0x6b9c0e0af710ed7b:0x79cf4433a5d46d1b!8m2!3d-30.3052845!4d153.1068923" },
        { id: 4, file: image4, project: 'Weather Dashboard', description: 'Enter a city for weather data', link: 'https://timp1990.github.io/Weather-Dashboard/', gitHub: "https://github.com/timp1990/Weather-Dashboard" },
        { id: 2, file: image2, project: 'Lanes Bridge', description: '60m x 10m x 10m Concrete Bridge', link: "https://www.nbnnews.com.au/2019/08/20/ribbon-cutting-marks-official-opening-of-new-lanes-bridge/" },

    ];

    const renderedOutput = projectsArray.map((item) => {
        return (
            <div className="col-md-6" key={item.id}>
                <div className="card text-white bg-secondary mb-3" style={styles.card}>
                    <img src={item.file} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.project}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href={item.link} className="btn btn-primary">Website</a>
                        {item.gitHub ? (<a href={item.gitHub} className="btn btn-primary mx-2">GitHub</a>) : ('')}
                    </div>
                </div>
            </div>

        )
    })

    return (
        <div className="container">
            <div className='row'>
                {renderedOutput}
            </div >
        </div>
    )
}

export default Portfolio;
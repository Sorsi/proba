import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                id="sorsi-resume"
                src="Sorsi-resume.png"
                alt="resume-pic"
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Orsolya Sütő</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>I prove my persistence with creative solutions and work best when I see the whole pistures with the exact goals.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1045 Budapest</p>
            <h5>Phone</h5>
            <p>+36 (70) 3318 405</p>
            <h5>Email</h5>
            <p>orsolya.suto.so@gmail.com</p>
            <h5>Web</h5>
            <p>https://sorsi.herokuapp.com/</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2018}
              schoolName='Green Fox Academy'
              schoolDescription='Junior Software Developer course at GFA: basic programming concepts, JavaScript, TypeScript'
            />
            <Education
              startYear={2009}
              endYear={2014}
              schoolName='Eötvös Loránd University'
              schoolDescription='I graduated at Faculty of Arts with Editor specialization. In my dissertation I examine the effect of manipulation in television commercials.'
            />
            <Education
              startYear={2010}
              endYear={2013}
              schoolName='Zsigmond Király College'
              schoolDescription="I got my degree in film studies, my dissertation's title is 'Madness on the big screen'. I was looking for answers about schizophrenia in the light of film genres."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <Experience
              startYear={2018}
              endYear={2018}
              jobName='Junior Software Developer at GFA'
              jobDescription='At Green Fox Academy I worked on a real life, greenfield, full-stack project. We developed (with my team together) a CRM system, a responsive drag and drop webapplication with React frontend and Node.js backend. Further technologies that we used: Redux, AntDesign, Sass, MongoDB, HTML, DOM, CSS, GitHUB, version control, Visual Studio, FeathersJS'
            />
            <Experience
              startYear={2016}
              endYear={2018}
              jobName='Promotional Specialist at POS Media Global'
              jobDescription="Event management: I was responsible for coordinating in-store promotions and tastings. Main tasks: managing field marketing booking system, creating reports and analysis, co-ordinating supervisor's work"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="React"
              progress={40}
            />
            <Skills
              skill="Redux"
              progress={10}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

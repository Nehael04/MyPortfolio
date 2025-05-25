import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  const Exp =["Worked at Saujannaya Pvt. Ltd on a Government Project at Accountant General's Office, Trivandrum, for 6 months.",
    "Owned and operated a DTP, Online Service Centre for 6 months."]
  return (
    <>
    <div className="main-container h-100">
      
      <Container className="sub-container w-100 d-flex flex-column align-items-center pt-5 pb-4" fluid>
        <Row className="about-container w-100">
          <Col>
          <h1 className='pb-2 ps-2'>
             About Me
          </h1>
         </Col>
        </Row>
        <Row className="about-container w-100">
          <Col lg>
          <p className="about-text" >   Hi, I'm Neha — a frontend developer in the making,
             currently pursuing my Bachelor's in Computer Applications from IGNOU. 
             I have a strong grasp of HTML, CSS, JavaScript, and React, 
             and I love turning ideas into clean, responsive, 
             and user-friendly web experiences.
             <br />
             I'm passionate about learning new technologies, improving my skills, 
             and grow as a developer by contributing to meaningful projects and dynamic teams.
             </p>
          </Col>
          <Col xl="6" md="0"></Col>
          </Row>

          <Row className="about-container w-100 pt-1 pb-3">
            <Col xl="6" md="0"></Col>
          <Col>
          <h1 className='pb-2 ps-2'>Experience</h1>
          {
            Exp.map((experience,index) => (
              <li className="about-text" key={index}>{experience}</li>
            ))
          }
          </Col>
        </Row>

        <Row className="about-container w-100 pt-1">
          <Col>
          <h1 className='pb-2 ps-2'>Qualification</h1>
          <h4>BCA</h4>
          <p className="about-text pb-2">Ignou - Ongoing (Distance Mode)</p>
          <h4>Higher Secondary Education</h4>
          <p className="about-text">ST. Mary's Higher Secondary School, Pattom, Trivandrum.</p>
          </Col>
           <Col xl="6" md="0"></Col>
        </Row>
    </Container>
          
            
          
          
    </div>
    </>
  )
}

export default About
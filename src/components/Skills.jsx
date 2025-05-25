import React from 'react'
import './Skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html from '../assets/html-logo.png'
import css from '../assets/css-logo.png'
import js from '../assets/javascript-logo.png'
import java from '../assets/java-logo.png'

import react from '../assets/react-logo.png'
import bs from '../assets/bootstrap-logo.png'
import reactBs from '../assets/react-bootstrap.png'

import github from '../assets/github-logo.png'
import npm from '../assets/npm-logo.png'
import vs from '../assets/vs-code.png'
import figma from '../assets/figma-logo.png'

import word from '../assets/ms-word.png'
import excel from '../assets/ms-excel.png'
import pp from '../assets/ms-powerpoint.png'

const Skills = () => {
  return (
    <div className="main-container" id="skill-container">
         <Container className="sub-container w-100 d-flex flex-column justify-content-center p-3 ps-4">
            <Row>
                <Col sm="0" md="1" xl="2"></Col>
                <Col>
                <h1 className='ps-2 pb-3'>My Skills</h1>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col sm="0" md="1" xl="2"></Col>
                <Col className="d-flex flex-wrap gap-1">
                <p className='title'>Languages : </p>
                <img className="html" src={html} alt="HTML" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.5rem,5vw,2.9rem)"}}/>
                <img className="logos" src={css} alt="CSS" 
                style={{height:"clamp(2.8rem,5vw,3.1rem)",width:"clamp(3.3rem,5vw,3.7rem)"}} />
                <img className="logos" src={js} alt="javascript" 
                style={{height:"clamp(2.8rem,5vw,3.2rem)",width:"clamp(2.8rem,5vw,3.2rem)"}} />
                <img className="logos" src={java} alt="java" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.3rem,5vw,2.7rem)"}} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col sm="0" md="1" xl="2"></Col>
                <Col className="d-flex flex-wrap gap-1">
                <p className='title'>Frameworks / Libraries : </p>
                <img className="logos" src={react} alt="React" 
                style={{height:"clamp(2.5rem,5vw,3rem)",width:"clamp(2.5rem,5vw,3rem)"}} />
                <img className="bs" src={bs} alt="Bootstrap"  
                style={{height:"clamp(3.5rem,5vw,4rem)",width:"clamp(3.5rem,5vw,4rem)"}} />
                <img className="react-bs" src={reactBs} alt="React-Bootstrap" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.5rem,5vw,2.9rem)"}} />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col sm="0" md="1" xl="2"></Col>
                <Col className="d-flex flex-wrap gap-1">
                <p className='title'>Tools :</p>
                <img className="git" src={github} alt="Github" 
                style={{height:"clamp(2.4rem,5vw,2.8rem)",width:"clamp(2.4rem,5vw,2.8rem)"}} />
                <img className="logos" src={npm} alt="npm" 
                style={{height:"clamp(3rem,5vw,3.4rem)",width:"clamp(3rem,5vw,3.4rem)"}} />
                <img className="vs-code" src={vs} alt="VS code" 
                style={{height:"clamp(3.4rem,5vw,3.8rem)",width:"clamp(3.4rem,5vw,3.8rem)"}} />
                <img className="figma" src={figma} alt="Figma" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.5rem,5vw,2.9rem)"}} />
                </Col>
            </Row>
            <Row>
                <Col sm="0" md="1" xl="2"></Col>
                <Col className="d-flex flex-wrap gap-1">
                <p className='title'>Others :</p>
                <img className="logos" src={word} alt="MS Word" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.8rem,5vw,3.2rem)"}}/>
                <img className="logos" src={excel} alt="MS Excel" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.8rem,5vw,3.2rem)"}}/>
                <img className="logos" src={pp} alt="MS Powerpoint" 
                style={{height:"clamp(2.5rem,5vw,2.9rem)",width:"clamp(2.8rem,5vw,3.2rem)"}}/>
                </Col>
            </Row>
         </Container>
    </div>
  )
}

export default Skills
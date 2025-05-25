import React from 'react'
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import netflix from '../assets/netflix.png'
import netflix2 from '../assets/netflix2.png'
import factorship from '../assets/factorship.png'
import kt from '../assets/keralatourism.png'
import pixshot from '../assets/pixshot.png'

const cardData = [
  {
    title: 'Netflix (clone)',
    text: 'HTML, CSS, Bootstrap, React',
    image: netflix,
    url: 'https://github.com/Nehael04/Netflix-clone.git'
  },
  {
    title: 'Factorship - W3Layouts (clone)',
    text: 'HTML, CSS, Bootstrap',
    image: factorship,
    url: 'https://github.com/Nehael04/Factorship.git'
  },
  {
    title: 'Kerala Tourism (clone)',
    text: 'HTML, CSS',
    image: kt,
    url: 'https://github.com/Nehael04/kerala-tourism.git'
  },
  {
    title: 'Pixshot - W3Layouts (clone)',
    text: 'HTML, CSS, Bootstrap',
    image: pixshot,
    url: 'https://github.com/Nehael04/PIX-SHOT.git'
  }
];


const Projects = () => {
  return (
    <div>
        <div className="main-container h-100" style={{height:"100%"}}>
          <div className="sub-container pt-5 pb-5 w-100" >
            <Container className="d-flex flex-column align-items-center justify-content-center">
              <Row>
                <Col className='d-flex flex-column align-items-center mb-4'>
                <h5>My</h5>
                <h1>Projects</h1>
                </Col>
                
              </Row>
                <Row xs={1} md={2} className="g-4 d-flex align-items-center justify-content-center">
                {cardData.map((card, idx) => (
                   <Col className='d-flex align-items-center justify-content-center' key={idx} style={{width:"auto"}}>
                   <Card className='card-container m-2'>
                    <Card.Img className='m-2' href={card.image} variant="top" src={card.image} style={{height:"auto", maxWidth:"350px"}}/>
                   <Card.Body>
                   <Card.Title className="card-title">{card.title}</Card.Title>
                   <Card.Text className="card-text">{card.text}</Card.Text>
                   <Button className='m-0' href={card.url} target="_blank">open in Github</Button>
                   </Card.Body>
                   </Card>
                   </Col>
                ))}
                </Row>
            </Container>
          </div>
        </div>
    </div>
  )
}

export default Projects



// import './Projects.css'
// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//    <div className="main-container">
        //     <Container className="sub-container w-100 d-flex align-items-center justify-content-center">
        //       <div >
        //         <div className="g-4 d-flex align-items-center justify-content-center">
        //         {cardData.map((card, idx) => (
        //           //  <Col className=' d-flex align-items-center justify-content-center'>
        //            <Card className='card-container d-flex align-items-center justify-content-center' key={idx}>
        //             <Card.Img variant="top" src={card.image} height={"auto"} max-width={"200px"}/>
        //            <Card.Body>
        //            <Card.Title>{card.title}</Card.Title>
        //            <Card.Text>{card.text}</Card.Text>
        //            <Button href={card.url}>open in Github</Button>
        //            </Card.Body>
        //            </Card>
        //           //  </Col>
        //         ))}
        //         </div>
        //         </div>
        //     </Container>
        // </div>
//   );
// }

// export default BasicExample;
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar1 from './components/Navbar1'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Testing from './components/Testing'
// import Testing2 from './components/Testing2'
function App() {

  return (
    <>
    <Container fluid className='' >
      <Row className="flex-column flex-md-row">
        <Col xs={12} md={3} className="text-white p-0">
          <div className="d-md-none w-100 h-100">
            <Navbar1 />
          </div>
          <div className="d-none d-md-block w-25 vh-100 position-fixed" 
          style={{minHeight:"450px",backgroundColor:"black"}}>
            <Navbar1 />
          </div>
        </Col>

        <Col className='p-0'>
        <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Testing/>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default App

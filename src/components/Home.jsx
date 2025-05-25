import React from 'react'
import './Home.css'
import NehaCV from '../assets/NehaCV.pdf'

const Home = () => {
 
  const resume = NehaCV;
  const handleOpen = () => {
    window.open(resume, '_blank');
  };
  return (
        <>
    <div className="main-container">
        <div className="sub-container w-100 d-flex flex-column align-items-center justify-content-center">
            <p className="home-title">Hi, I am </p>
            <p className="name">Neha E L</p>
            <p className="captian">I am a passionate Frontend<br />Developer.</p>
            <button className="btn" onClick={handleOpen}>View Resume</button>

            </div>
    </div>
    </>
  )
}

export default Home
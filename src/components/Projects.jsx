import React from 'react';
import '../styles/Projects.css';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
    return (
        <div>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                height: '40vh',
                marginLeft: '30rem',
            }}
            >
                <h1 style={{textDecoration:'underline'}}> PROJECTS</h1>
                <Carousel style={{
                    
                }}>
                    <Carousel.Item>
                        <h1> Turn Based Fighting Game </h1>
                    <img
                            style={{ width: '50rem', height: '20rem' }}
                            src="../../images/dotascreenshot.png"
                            alt="First slide"
                        />
                            <h3>Dota2Game</h3>
                            <p style={{color:'grey'}}>Dota2Fighting is a turn based game where the objective of the game is to outlast the computer and have more health points remaining.</p>
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ width: '450px', height: '450px' }}
                            src="../../images/home.svg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ width: '450px', height: '450px' }}
                            src="../../images/home.svg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}
export default Projects;
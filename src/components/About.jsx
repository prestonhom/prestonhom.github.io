import React from 'react';
import '../styles/About.css'
import {Link} from 'react-router-dom';

const About = () =>{
    return(
        <div  >
            <section 
            
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                marginLeft: '30rem',
                
            }}
            >
            <h1 className='header'> About Me</h1>
            <div className='aboutBackground'>
            <p>
           Howdy! I'm Preston.
            <hr></hr>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; What began as a love for cryptocurrency and blockchain unavoidably led me down the path of wanted to build applications rather than to just trade assets. Originally a data analyst,
            a lot of skills in growing a sales divison within a Fortune 100 company has also applied with software development. Going to UC Irvine for college and living in sunny Southern California for most of my adult life has definitely influenced me in the way
            I construct applications. The culture there has had an impact in what problems I aim to solve. I prioritize user stories and love making applications that are not only practical but extremely easy to use.
            <hr></hr>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Currently I live in the San Francisco Bay Area with my number one fan, my dog Cyclops. Some of my favorite hobbies including reading, listening to podcasts, working out and trading cryptocurrency. 
            You can always find me with a cup of black iced coffee, and yes, even on cold days.
            When I have time I also have a blog of what trades I take using technical analysis on TradingView.com. 
            Modularization excites me and especially blockchain technology.
            Coding has allowed me to explore an ocean of ideas and every single day I am learning something new. I love meeting new people and building relationships so don't be shy! 
            <hr></hr>
            Let's connect.
            </p>
            <hr></hr>
            <Link to="/contact" className='findHere' style={{textAlign:'center'}}> Find me here</Link>
            </div>
            </section>
        </div>
    )
}
export default About
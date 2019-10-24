import React from 'react';
import '../styles/About.css'

const About = () =>{
    return(
        <div>
            <section style={{
            display:'flex',
            flexDirection:'column',
            height:'100vh',
            marginLeft:'12.5rem'
          }}
            >
            
            <h1 className='page-header'> About Me</h1>
            <p style={{
                padding:'0 15%',
                
                
            }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Graduating from UC Irvine in 2013 I originally started my career path as a data analyst. 
            Entering my fourth year however, I was introduced to cryptocurrency and that led me down the 
            proverbial rabbit hole of decentralized finance. It was a difficult decision but without looking 
            back I left that job and took on a full-time analyst position providing market analysis on 
            cryptocurrency. I was already researching a myriad of topics within the blockchain/cryptocurrency 
            pace and that curiosity eventually pushed me to research more into actually developing the tech 
            rather than just trading. That’s when I decided to take the leap and enroll in General Assembly’s 
            software engineering immersive program. I’m proud that I’ve not only been able to build full stack 
            applications but have cultivated lasting relationships in only 12 weeks.

            </p>
            
            </section>
        </div>
    )
}
export default About
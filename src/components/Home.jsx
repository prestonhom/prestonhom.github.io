import React from 'react';
import '../styles/Home.css'
import {Accordion,Card,Button} from 'react-bootstrap'
const Home = () => {
    return (
        <div>
            <section
             className='homeBackground'
                style={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    marginLeft: '30rem',
                    

                }}
            >
                <div>
                <h2 style={{fontStyle:'italic'}}>"Brilliant thinking is rare, but courage is in even shorter supply than genius."- Peter Thiel, Zero to One</h2>
                </div>
            </section>
        </div>
    )
}

export default Home;
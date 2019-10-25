import React from 'react';
import '../styles/Contact.css'
import {Accordion,Card,Button} from 'react-bootstrap'
const Contact = () => {
    return (
        <div>
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    marginLeft: '30rem',

                }}
            >
                <div className='contactBackground'>
                <h1 className='header'>Contact </h1>
                <Accordion defaultActiveKey="0" >
                    <Card className='cardCard'>
                        <Card.Header className='cardHeader'>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <a href='https://linkedin.com/in/prestonhom'><img className='cardImage' src="../../images/linkedin.png"/></a>
                            </Accordion.Toggle>
                        </Card.Header>
                       
                    </Card>
                    {/* Github */}
                    <Card className='cardCard'>
                        <Card.Header className='cardHeader'>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <a href='https://github.com/prestonhom'> <img className='cardImage' src="../../images/githublonglogo.svg"/><img style={{width:'50px'}} className='cardImage' src="../../images/githublogo.svg"/></a>
                            </Accordion.Toggle>
                        </Card.Header>
                       
                    </Card >
                    {/* Trading View */}
                    <Card className='cardCard'>
                        <Card.Header className='cardHeader'>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                               <a href='https://www.tradingview.com/u/aboveandphom/'> <img className='cardImage' src="../../images/tradingviewlogo.png"/></a>
                            </Accordion.Toggle>
                        </Card.Header>
                        
                    </Card>
                    {/* Email */}
                    <Card className='cardCard'>
                        <Card.Header className='cardHeader'>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                <a href="mailto:preston.hom@gmail.com"><img className='cardImage' style={{width:'400px'}}src="../../images/gmailwordlogo.svg"/></a>
                            </Accordion.Toggle>
                        </Card.Header>
                        
                    </Card>
                </Accordion>
                </div>
            </section>
        </div>
    )
}

export default Contact;
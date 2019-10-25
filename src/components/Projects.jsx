import React from 'react';
import '../styles/Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
const Projects = () => {
    return (
        <div>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                marginLeft: '30rem',
            }}
            >
                <Carousel style={{
                    height: '100vh'
                }}>
                    <Carousel.Item>
                        <h1 className='header'> Fighting Game</h1>
                        <img
                            style={{ width: '50rem', height: '20rem', marginLeft: '8%', border: '2px white solid', borderRadius: '5px' }}
                            src="../../images/dotascreenshot.png"
                            alt="First slide"
                        />
                        <p>Github <a href='https://github.com/prestonhom/DotaGame'> <img className='githubLogo' src='../../images/githublogo.svg'/> </a> </p>
                        <p className='paragraphHeadline' style={{ color: 'grey', fontStyle: 'italic' }}>Dota2Fighting is a turn based game where the objective of the game is to outlast the computer and have more health points remaining.</p>
                        <ol>
                            <li>The user can select either Physical Attack for a consistent 800 damage to Roshan
                        or Magical Attack damage that has a variable rate between 0-2000.
                            </li>
                            <li>Roshan has similar abilities that the user will not see but will conduct its damage by attacking you once with its
                        physical attack that does a consistent 400 damage and then a Magic attack damage that has a variable rate of damage as well ranging between 0-800.
                            </li>
                        </ol>
                        <p>Built With: HTML//CSS//JavaScript</p>

                    {/* END OF DOTA GAME */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <h1 className='header'>CAPX Cryptocurrency Exchange</h1>
                        <img
                            style={{ width: '50rem', height: '20rem', marginLeft: '8%', border: '2px white solid', borderRadius: '5px' }}
                            src="../../images/capxsnapshot.png"
                            alt="First slide"
                        />
                        <div className='projectLinks' style={{display:'flex'}}>
                        <p>Links<a href='https://github.com/prestonhom/capx'> <img className='githubLogo' src='../../images/githublogo.svg' /> </a></p>
                        <a href='https://capxexchange.herokuapp.com'>  <img className='linkLogo' src='../../images/chain-links.svg'/> </a> 
                        </div>
                        <p className='projectParagraphs' style={{ color: 'grey', fontStyle:'italic'}}>CAPX is an exchange for users to create/read/update/delete orders as well as fill a counterparty's.</p>
                        <p>
                        Users get 10000 BTC and 10000 ETH to trade for free. Only orders with matching parameters wil be filled and accounts updated. Current imrpovements are to implement a blockchain to package transaction data.
                        </p>
                        <p>Built With: Python//Django//PostgreSQL//MVT Architecture </p>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1 className='header'> CritEats  </h1>
                        <img
                            style={{ width: '50rem', height: '20rem', marginLeft: '8%', border: '2px white solid', borderRadius: '5px' }}
                            src="../../images/criteatssnapshot.png"
                            alt="First slide"
                        />
                        <div className='projectLinks' style={{display:'flex'}}>
                        <p>Links<a href='https://github.com/prestonhom/criteats'> <img className='githubLogo' src='../../images/githublogo.svg' /> </a></p>
                        <a href='https://criteats.herokuapp.com'>  <img className='linkLogo' src='../../images/chain-links.svg'/> </a> 
                        </div>
                        <p style={{ color: 'grey', fontStyle:'italic' }}>Food review application that only allows users to review a restaurants menu items</p>
                        <p> Judge a restaurant by its food -- and only its food. Full CRUD application where users are only allowed to give ratings out of 5 and write a description explaining why they like or don't like a certain menu item. Pulls from an eternal API from a restaurant managing application called Tasty.</p>
                        <p>Built With: HTML//CSS/JAVASCRIPT//MERN Stack//Mongoose/MongoDB/Express//React/React BootStrap//NodeJS</p>

                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}
export default Projects;
import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (<>
        <section className='about' id='about'>
            <div className="container">
                <div className='banner'>
                    <div className='top'>
                        <h1 className='heading'>About Us</h1>
                        <p>The Only thing we are serious about is food.</p>
                    </div>
                    <p className='mid'>"Here, at Deliciosa, we understand cravings. We know how important it is to get your food fast, and we have a 1-hour delivery guarantee, or you get your money back.
                    While we prepare our food fast, we develop the flavor slowly. Our dough rises over the night, and our meat is always marinated.Don’t let hunger take control of you. Beat it with Deliciosa!</p>
                    <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight /></span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    </>
  )
}

export default About;

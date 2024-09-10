import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import data from '../restApi.json'; // Ensure this import path is correct

const Navbar = () => {
    const [show, setShow] = useState(false);

    // Safely access navbarLinks
    const navbarLinks = data.data && data.data[0] ? data.data[0].navbarLinks : [];

    return (
        <>
            <nav>
                <div className="logo" >Bella Cucina </div>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {navbarLinks.length > 0 ? (
                            navbarLinks.map(element => (
                                <Link 
                                    to={element.link} 
                                    key={element.id} 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}
                                >
                                    {element.title}
                                </Link>
                            ))
                        ) : (
                            <p>No links available</p>
                        )}
                    </div>
                    <button className='menuBtn'>Our Menu</button>
                </div>
                <div className="hamburger" onClick={() => setShow(!show)}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
}

export default Navbar;

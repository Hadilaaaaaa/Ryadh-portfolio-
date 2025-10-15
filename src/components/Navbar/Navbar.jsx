import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi';
import Ryadh from '../../photo/ryadh1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='navbar'>
      <div className="logo">
        <img src={Ryadh} alt="Riyadh Ouchfoun" />
      </div>

      <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        <a href="#Home" onClick={closeMenu}>Home</a>
        <a href="#About" onClick={closeMenu}>About</a>
        <a href="#Portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#clients" onClick={closeMenu}>Clients</a>
        <a href="#Contact" onClick={closeMenu}>Contact</a>
        <a href="#Contact" onClick={closeMenu}>
          <button className='btn'>Hire Me</button>
        </a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;

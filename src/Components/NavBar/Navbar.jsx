import React, { useState } from 'react';
import './Navbar.css';
import { motion } from "framer-motion";
import LogoSVG from "../../Assets/Images/Logo.svg";
import LogoSVG from "./logosvg.svg";
// import Logo from 'components/Logo';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <a href='/'>
        <img src={LogoSVG} alt='' />
      </a>
      <a href='/'>
        <img src={LogoSVG} alt='' />
      </a>
      {/* <a href='/'>
      </a> */}
      {/* <a href='/'>
      </a> */}
      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <a href='/' className="links">
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}>
              Home
            </motion.li>
          </a>
          <a href='/events' className="links">
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}>
              Events
            </motion.li>
          </a>
          <a href='/resources' className="links">
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}>
              Resources
            </motion.li>
          </a>
          <a href='/cvrepo' className="links">
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}>
              CV&nbsp;Repo
            </motion.li>
          </a>
          <motion.li
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9, y: 0 }}>
            <div className="dropdown">
              <button className="dropbtn links">Blogs</button>
              <div className="dropdown-content">
                <div className="dropdown-content">
                  <a href="/internblogs">Internship Blogs</a>
                  <a href="/placementblogs">Placement Blogs</a>
                  <a href="/adieublogs">Adieu KGP</a>
                  <a href="/kyd">Know Your Department</a>
                </div>
              </div>
            </div>
          </motion.li>
          <a href='/about' className="links">
            <motion.li
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}>
              About
            </motion.li>
          </a>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;
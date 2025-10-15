
import React from 'react'
import './About.css'
import MobileMockup from './MobileMockup'
import { FaVoteYea } from "react-icons/fa"
import { CgEyeAlt } from "react-icons/cg"
import { GiPodiumWinner } from "react-icons/gi"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='about' id='About'>
      <motion.div
        className="top-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className='section_title'>About <span>Me</span></h2>
        <p className='section_subtitle'>My introduction to myself</p>
      </motion.div>

      <div className="about_container container">
        <div className="about-img">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            className="bg_img">
            <MobileMockup />
          </motion.div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaVoteYea className='cards-icon' />
              <h5>Experience</h5>
              <small>+ 5 years middle</small>
            </div>
            <div className="about_card">
              <GiPodiumWinner className='cards-icon' />
              <h5>Projects</h5>
              <small>+100 projects finished</small>
            </div>
            <div className="about_card">
              <CgEyeAlt className='cards-icon' />
              <h5>Clients</h5>
              <small>+50 worldwide</small>
            </div>
          </div>
          <p>
            I'm a passionate graphic designer with over 5 years of experience creating stunning visual solutions. 
            My expertise spans across brand identity,logo design , and digital marketing materials. 
            I believe in the power of good design to transform businesses and create meaningful connections with audiences.
          </p>
          <a href="#Contact">
            <button className='btn'>Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About


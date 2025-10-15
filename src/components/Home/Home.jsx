import React from 'react'
import './Home.css'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdWavingHand } from "react-icons/md";
import { motion } from 'framer-motion'

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const Home = () => {
  return (
    <section className='home' id='Home'>
      <div className="home_container container">
        <div className="home_content">
          <motion.h4
            variants={animation(0)}
            initial='hidden'
            animate='visible'
            className='typing-text'>
            Do you Need a Redesigner! Hi <span><MdWavingHand /> I'm</span>
          </motion.h4>
          <motion.h2
            variants={animation(0.5)}
            initial='hidden'
            animate='visible'>
            Riyadh Ouchfoun
          </motion.h2>
          <motion.h3
            variants={animation(1)}
            initial='hidden'
            animate='visible'
            className='subtitle'>
            GRAPHIC DESIGNER
          </motion.h3>
          <motion.p
            variants={animation(1.5)}
            initial='hidden'
            animate='visible'>
            I'm a creative designer, and I'm very passionate and dedicated to my work. Would you like to share this experience with us!
          </motion.p>

          <motion.div
            variants={animation(2)}
            initial='hidden'
            animate='visible'
            className='socials'>
            <a href="https://www.instagram.com/riyadh.ouchfoun_/" target='_blank' rel="noopener noreferrer">
              <RiInstagramFill />
            </a>
            <a href="https://www.facebook.com/riyadh.ouchfoun?locale=fr_FR" target='_blank' rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://api.whatsapp.com/send?phone=0554924082" target='_blank' rel="noopener noreferrer">
              <IoLogoWhatsapp />
            </a>
          </motion.div>

          <motion.div
            variants={animation(2.5)}
            initial='hidden'
            animate='visible'
            className="btns">
            <a href="#Contact">
              <button className='btn'>Contact Me</button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="home_image">
        </motion.div>
      </div>
    </section>
  )
}

export default Home

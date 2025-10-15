import React, { useState } from 'react';
import './contact.css';
import { color, motion } from 'framer-motion';
import { IoMdContacts } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmailSimple = (email) => {
    // Check if email contains '@'
    if (!email.includes('@')) {
      return 'You should enter "@" in your email';
    }

  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const errorMsg = validateEmailSimple(value);
    setEmailError(errorMsg);
  };

  return (
    <section className='Contact' id='Contact'>
      <motion.div 
        className="top-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className='section_title'>Contact <span>Me</span></h2>
        <p className='section_subtitle'>this is how you can contact me</p>
      </motion.div>

      <div className="contact-container ">
        <div className="contact-content">
          <h3 className="contact-title">Talk To Me</h3>
          <div className="contact-info">
            <div className="contact-card">
              <IoMdContacts className='contact-card-icon'/>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">ryadmcee201@gmail.com</span>
              <a href="mailto:ryadmcee201@gmail.com" className="contact-button">
                Write me <FaArrowRightLong className='contact-icon' />
              </a>
            </div>
            <div className="contact-card">
              <IoLogoWhatsapp className='contact-card-icon'/>
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">0554924082</span>
              <a href="https://api.whatsapp.com/send?phone=0554924082" className="contact-button">
                Write me <FaArrowRightLong className='contact-icon' />
              </a>
            </div>
            <div className="contact-card">
              <RiInstagramFill className='contact-card-icon'/> 
              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">riyadh.ouchfoun_</span>
              <a href="https://www.facebook.com/riyadh.ouchfoun?locale=fr_FR" className="contact-button">
                Write me <FaArrowRightLong className='contact-icon' />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">write me your projects</h3>
          <form 
            action="https://formspree.io/f/xwprvdno" 
            method='POST' 
            className='contact-form'
            onSubmit={e => {
              if (emailError || !email) {
                e.preventDefault();
                alert('Please enter a valid email before submitting.');
              }
            }}
            noValidate
          >
            <div className="contact-form-div">
              <label className="contact-form-tag">Name </label>
              <input 
                type="text" 
                name='name'
                className='contact-form-input'
                placeholder='Enter your Name'
                required
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Email </label>
              <input 
                type="email" 
                name='email'
                className={`contact-form-input ${emailError ? 'input-error' : ''}`}
                placeholder='Enter your Email'
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <p className="error-subtitle">{emailError}</p>}
            </div>
            <div className="contact-form-div textarea-container">
              <label className="contact-form-tag">Project </label>
              <textarea 
                name="projects" 
                cols='30' 
                rows='8' 
                className='contact-form-input' 
                placeholder='Write your projects description '
                required
              ></textarea>
            </div> 
            <button className='btn btn-contact'  type="submit" disabled={!!emailError}><LuSend />   Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

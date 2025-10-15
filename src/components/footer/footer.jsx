
import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaRegHeart } from "react-icons/fa";
import './footer.css'
import Photo from '../../photo/ryadh4.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Portfolio', href: '#Portfolio' },
    { name: 'Clients', href: '#Clients' },
    { name: 'Contact', href: '#Contact' }
  ]

  const services = [
    'Brand Identity',
    'Logo Design',
    'Print Design',
    'Marketing Materials'
  ]

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/riyadh.ouchfoun?locale=fr_FR",
      label: "Facebook"
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/riyadh.ouchfoun_/",
      label: "Instagram"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=0554924082",
      label: "WhatsApp"
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-header">
              <img 
                src={Photo} 
                alt="Riyadh Ouchfoun" 
                className="brand-avatar"
              />
              <div>
                <h3 className="brand-name">Riyadh Ouchfoun</h3>
                <p className="brand-title">Graphic Designer</p>
              </div>
            </div>
            <p className="brand-description">
              Creating compelling visual solutions that help businesses communicate 
              effectively and build strong brand identities.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="nav-link"
                  >
                    <span className="link-indicator"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Services</h4>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  <span className="service-bullet"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="section-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span className="contact-text">riyadh.ouchfoun@email.com</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span className="contact-text">+213 554 924 082</span>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span className="contact-text">Algeria</span>
              </div>
            </div>

            {/* CTA */}
            <motion.a
               href="#Contact"
              className="cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bottom-content">
            <p className="copyright">
              Made with love  by Fadwa <FaRegHeart />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
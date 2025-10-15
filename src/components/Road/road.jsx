import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './road.css'

const Road = () => {
  const { scrollYProgress } = useScroll() // Track whole page scroll

  // Transform for circle vertical movement
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -20])

  const processes = [
    {
      title: "Discovery",
      description: "Understanding your brand goals and target audience through detailed consultation and research"
    },
    {
      title: "Strategy", 
      description: "Developing a comprehensive plan that aligns with your business objectives and market positioning"
    },
    {
      title: "Design",
      description: "Creating innovative visual solutions that capture your brand essence and engage your audience"
    },
    {
      title: "Implementation",
      description: "Bringing designs to life with precision, attention to detail, and seamless user experience"
    }
  ]

  return (
    <section className='road'>
      <motion.div 
        className="top-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className='section_title'>My Design  <span>Process</span></h2>
        <p className='section_subtitle'>A proven methodology that ensure every project delivers exeptinoal results and expectation </p>
      </motion.div>

      <div className="timeline-container">
        {processes.map((process, index) => (
          <div key={index} className="timeline-item">
            {/* Left content */}
            {index % 2 === 0 && (
              <motion.div 
                className="process left"
                initial={{ opacity: 0, x: -100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {process.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {process.description}
                </motion.p>
              </motion.div>
            )}

            {/* Circle */}
            <motion.div 
              className="circle"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{ y: yTransform }}
            />

            {/* Right content */}
            {index % 2 === 1 && (
              <motion.div 
                className="process right"
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {process.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {process.description}
                </motion.p>
              </motion.div>
            )}

            {/* Connecting line */}
            {index < processes.length - 1 && (
              <motion.div 
                className="connecting-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Road 

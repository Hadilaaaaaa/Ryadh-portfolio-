
import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import logo1 from '../../photo/logo1.jfif'
import logo2 from '../../photo/logo2.jpeg'
import logo3 from '../../photo/logo3.jpeg'
import logo4 from '../../photo/logo4.jpeg'
import logo5 from '../../photo/logo5.jpeg'
import './clients.css'
import 'swiper/css'


const Clients = () => {
  const testimonials = [
    {
      id: 1,
      image: logo2,
      name: " BrainerX",
      position: "CEO, Tech Corp",
      review: "Outstanding work! The design exceeded our expectations and perfectly captured our brand vision.",
      rating: 5
    },
    {
      id: 2,
      image: logo1,
      name: "Assetchain",
      position: "Marketing Director",
      review: "Professional, creative, and delivered on time. I highly recommend Riyadh for any design project.",
      rating: 5
    },
    {
      id: 3,
      image: logo3,
      name: "Rysala",
      position: "Startup Founder",
      review: "Amazing attention to detail and great communication throughout the project. Will definitely work again!",
      rating: 5
    },
    {
      id: 4,
      image: logo4,
      name: "noxis ai tool",
      position: "Brand Manager",
      review: "The quality of work and creativity is exceptional. Our brand identity looks fantastic!",
      rating: 5
    },
    {
       id: 5,
      image: logo5,
      name: "Cod Toop",
      position: "Startup Founder",
      review: "Amazing attention to detail and great communication throughout the project. Will definitely work again!",
      rating: 5
    },
  ]

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        {/* Header */}
        <motion.div 
               className="top-section"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
             > <h2 className='section_title'>Clients <span>Review</span></h2>
        <p className='section_subtitle'>what my clients say about me  </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="clients-slider-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="clients-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rating Stars */}
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="star-icon" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="testimonial-review">
                    "{testimonial.review}"
                  </p>

                  {/* Client Info */}
                  <div className="testimonial-client">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="client-image"
                    />
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-position">{testimonial.position}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="clients-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">
            Ready to join these satisfied clients?
          </p>
          <motion.a
            href="#Contact"
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>  
      </div>
    </section>
  )
}

export default Clients
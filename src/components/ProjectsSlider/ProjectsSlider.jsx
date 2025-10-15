import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import './projectsSlider.css';  
import c4 from '../../photo/c4.jpeg'
import c7 from '../../photo/c7.jpeg'
import logos from '../../photo/logos.jpeg'
import p4 from '../../photo/p4.jpeg'
import rysala from '../../photo/rysala.jpeg'
import c2 from '../../photo/c2.jpeg'
const projects = [
 
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity system with logo, typography, and color palette for a modern tech startup.",
    image: c4,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["Logo Design", "Brand Identity", "Typography"]
  },
  {
    id: 2,
    title: "Logo construction",
    category: "Web Design",
    description: "Complete website overhaul with focus on user engagement and conversion optimization.",
    image: c7,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["Logo Design", "Responsive", "Ui Research"]
  },
  {
    id: 3,
    title: "Logo design",
    category: "Print Design",
    description: "Creative print advertising campaign with bold visuals and compelling messaging strategy.",
    image: logos,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["Print Design", "Advertising", "Creative Direction"]
  },
  {
    id: 4,
    title: "Social Media post",
    category: "Digital Design",
    description: "Modern e-commerce platform design with focus on product showcase and seamless checkout flow.",
    image: p4,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["E-commerce", "Product Design", "Conversion"]
  },
  {
    id: 5,
    title: "graphic designer",
    category: "Social Media",
    description: "Engaging social media visual campaign with consistent brand messaging across platforms.",
    image: rysala,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["Social Media", "Content Creation", "Digital Marketing"]
  },
  {
    id: 6,
    title: "Packaging Design",
    category: "Product Design",
    description: "Innovative packaging design that combines sustainability with eye-catching visual appeal.",
    image: c2,
    link: "https://www.behance.net/gallery/201418549/PORTFOLIO",
    tags: ["Packaging", "Product Design", "Sustainability"]
  }
  // ... (rest of the projects array)
];

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Auto-play functionality with improved cleanup
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);  // Cleanup on unmount or dependency change
  }, [isPlaying, projects.length]);  // Added projects.length to dependencies for safety

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      console.error('No link provided for this project');
    }
  };

  return (
    <div className="projects-container" id='Portfolio'>
      <div className="projects-wrapper">
         <motion.div 
               className="top-section"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
             > <h2 className='section_title'>My <span>Projects</span></h2>
        <p className='section_subtitle'>these are some of my works  </p>
        </motion.div>


        {/* Main Slider */}
        <div className="slider-container">
          <div className="slider-main">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex]?.id}  // Use project ID for better keying
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="slide"
                style={{
                  backgroundImage: `url(${projects[currentIndex]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onError={() => console.error('Image failed to load for project:', projects[currentIndex]?.title)}  // Add error handling
              >
                <div className="slide-overlay" />
                <div className="slide-content">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="slide-tags">
                      {projects[currentIndex]?.tags?.map((tag, index) => (
                        <span key={index} className="slide-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="slide-title">{projects[currentIndex]?.title}</h2>
                    <p className="slide-description">{projects[currentIndex]?.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(projects[currentIndex]?.link)}
                      className="slide-button"
                    >
                      View Project <ExternalLink size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="nav-controls">
            <motion.button onClick={goToPrevious} className="nav-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button onClick={goToNext} className="nav-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Play/Pause Button */}
          <motion.button onClick={togglePlayPause} className="play-pause-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="thumbnails-container">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="thumbnail-image" onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} />  {/* Add fallback image */}
              <div className="thumbnail-overlay" />
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="thumbnail-tooltip"
                >
                  {project.title}
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="progress-container">
          <div className="progress-indicators">
            {projects.map((_, index) => (
              <div key={index} className={`progress-dot ${index === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
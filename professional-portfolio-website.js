

import React, { useState } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

// Color Palette
const COLORS = {
  peach: '#FFE5B4',
  darkBrown: '#5D4037',
  white: '#FFFFFF',
  lightPeach: '#FFF3E0'
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', icon: Home, section: 'home' },
    { name: 'About', icon: User, section: 'about' },
    { name: 'Projects', icon: Briefcase, section: 'projects' },
    { name: 'Contact', icon: Mail, section: 'contact' }
  ];

  return (
    <nav 
      className="fixed left-0 top-0 h-full w-20 bg-[#5D4037] flex flex-col items-center justify-center space-y-6 z-50"
      style={{ backgroundColor: COLORS.darkBrown }}
    >
      {navItems.map((item) => (
        <button
          key={item.section}
          onClick={() => setActiveSection(item.section)}
          className={`p-3 rounded-full transition-all duration-300 ${
            activeSection === item.section 
              ? 'bg-[#FFE5B4] text-[#5D4037]' 
              : 'text-white hover:bg-[#FFE5B4]/20'
          }`}
        >
          <item.icon size={24} />
        </button>
      ))}
    </nav>
  );
};

// Home Section
const HomeSection = () => (
  <div 
    className="min-h-screen flex items-center justify-center text-center"
    style={{ backgroundColor: COLORS.white }}
  >
    <div>
      <h1 
        className="text-6xl font-bold mb-4"
        style={{ color: COLORS.darkBrown }}
      >
        Your Name
      </h1>
      <p 
        className="text-2xl"
        style={{ color: COLORS.darkBrown }}
      >
        Professional Title / Creative Description
      </p>
    </div>
  </div>
);

// About Section
const AboutSection = () => (
  <div 
    className="min-h-screen flex items-center justify-center p-16"
    style={{ backgroundColor: COLORS.lightPeach }}
  >
    <div className="max-w-4xl flex items-center">
      <div className="w-1/2 mr-12">
        <img 
          src="/api/placeholder/400/400" 
          alt="Professional Headshot" 
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-1/2">
        <h2 
          className="text-4xl font-bold mb-6"
          style={{ color: COLORS.darkBrown }}
        >
          About Me
        </h2>
        <p 
          className="text-lg mb-4"
          style={{ color: COLORS.darkBrown }}
        >
          A compelling professional summary showcasing your skills, 
          experience, and unique value proposition. Highlight your 
          expertise and professional journey.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {['Design', 'Development', 'Strategy', 'Innovation'].map((skill) => (
            <div 
              key={skill} 
              className="p-3 rounded-lg text-center"
              style={{ 
                backgroundColor: COLORS.peach,
                color: COLORS.darkBrown 
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Projects Section
const ProjectsSection = () => {
  const projects = [
    { 
      title: 'Project One', 
      description: 'Detailed project description highlighting achievements.',
      technologies: ['React', 'Tailwind', 'Design']
    },
    { 
      title: 'Project Two', 
      description: 'Comprehensive overview of project scope and impact.',
      technologies: ['Node.js', 'GraphQL', 'UI/UX']
    }
  ];

  return (
    <div 
      className="min-h-screen p-16"
      style={{ backgroundColor: COLORS.white }}
    >
      <h2 
        className="text-4xl font-bold text-center mb-12"
        style={{ color: COLORS.darkBrown }}
      >
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg shadow-lg"
            style={{ 
              backgroundColor: COLORS.lightPeach,
              color: COLORS.darkBrown 
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: COLORS.peach,
                    color: COLORS.darkBrown 
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Section
const ContactSection = () => (
  <div 
    className="min-h-screen flex items-center justify-center p-16"
    style={{ backgroundColor: COLORS.lightPeach }}
  >
    <div className="max-w-lg w-full">
      <h2 
        className="text-4xl font-bold text-center mb-12"
        style={{ color: COLORS.darkBrown }}
      >
        Contact Me
      </h2>
      <form className="space-y-6">
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full p-3 rounded-lg"
          style={{ 
            backgroundColor: COLORS.white,
            color: COLORS.darkBrown,
            borderColor: COLORS.darkBrown 
          }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 rounded-lg"
          style={{ 
            backgroundColor: COLORS.white,
            color: COLORS.darkBrown,
            borderColor: COLORS.darkBrown 
          }}
        />
        <textarea 
          placeholder="Your Message" 
          rows={4} 
          className="w-full p-3 rounded-lg"
          style={{ 
            backgroundColor: COLORS.white,
            color: COLORS.darkBrown,
            borderColor: COLORS.darkBrown 
          }}
        />
        <button 
          className="w-full p-3 rounded-lg font-bold"
          style={{ 
            backgroundColor: COLORS.darkBrown,
            color: COLORS.white 
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

// Main App Component
const ProfessionalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <div className="ml-20">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </div>
  );
};

export default ProfessionalPortfolio;

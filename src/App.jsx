import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#d3faf7]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-[#3f816c] hover:text-[#e15921] transition-colors"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              BF
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('projects')} className="text-[#3f816c] hover:text-[#e15921] font-medium transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#3f816c] hover:text-[#e15921] font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('extras')} className="text-[#3f816c] hover:text-[#e15921] font-medium transition-colors">
                Extras
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#3f816c] hover:text-[#e15921] font-medium transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#3f816c]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-[#3f816c] hover:text-[#e15921] font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#3f816c] hover:text-[#e15921] font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('extras')} className="block w-full text-left text-[#3f816c] hover:text-[#e15921] font-medium">
                Extras
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#3f816c] hover:text-[#e15921] font-medium">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="text-[120px] md:text-[180px] font-bold text-[#e15921] leading-none mb-6"
            style={{ 
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.05em'
            }}
          >
            BF
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3f816c] mb-4">
            Software Engineer
          </h1>
          <p className="text-xl text-[#3f816c] opacity-80 max-w-2xl mx-auto">
            Building elegant solutions to complex problems
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3f816c] mb-12 text-center">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wellness AI */}
            <div className="bg-[#d3faf7] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#e15921]">
              <h3 className="text-2xl font-bold text-[#3f816c] mb-3">
                Wellness AI
              </h3>
              <p className="text-[#3f816c] mb-4 leading-relaxed">
                An intelligent health and wellness application powered by AI to provide personalized recommendations, track wellness goals, and offer insights for a healthier lifestyle.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Azure OpenAI
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
              </div>
              <button className="flex items-center text-[#e15921] font-semibold hover:text-[#d73f00] transition-colors">
                View Project <ExternalLink size={16} className="ml-1" />
              </button>
            </div>

            {/* TradeWise Exchange */}
            <div className="bg-[#d3faf7] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#e15921]">
              <h3 className="text-2xl font-bold text-[#3f816c] mb-3">
                TradeWise Exchange
              </h3>
              <p className="text-[#3f816c] mb-4 leading-relaxed">
                A sophisticated trading platform with real-time market data, advanced analytics, and intuitive tools for making informed investment decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Express
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  Alpha Vantage API
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  WebSocket
                </span>
                <span className="px-3 py-1 bg-[#8dd3c6] text-[#3f816c] rounded-full text-sm font-medium">
                  MongoDB
                </span>
              </div>
              <button className="flex items-center text-[#e15921] font-semibold hover:text-[#d73f00] transition-colors">
                View Project <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#d3faf7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3f816c] mb-12 text-center">
            About Me
          </h2>
          
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#3f816c] leading-relaxed mb-6">
                I'm a newly graduated software engineer passionate about creating elegant, user-focused applications that solve real-world problems. My journey in tech has been driven by curiosity and a love for continuous learning.
                Oregon State University, Bachelor of Science in Computer Science(GPA 3.92), September 2025
              </p>
              
              <p className="text-[#3f816c] leading-relaxed mb-6">
                With a strong foundation in full-stack development and a keen interest in AI and financial and healthcare technology, I bring fresh perspectives and modern solutions to every project I work on.
              </p>

              <p className="text-[#3f816c] leading-relaxed mb-6">
                In my previous life, I was a physical therapist who helped individuals problem solve to get out of pain and live full lives.
                I still enjoy helping others and see my career transition into software as a scaling up of my technical skills and knowledge
                that enables me to impact lives on a macroscale. 
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#3f816c] mb-4">Skills & Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'Python', 'React', 'Node.js', 'Express', 'FastAPI', 'Machine Learning', 'Microservices', 'Algorithms', 'System Design'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#e98b5b] text-white rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section id="extras" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3f816c] mb-12 text-center">
            Fun Extras
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#d3faf7] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🐕</div>
              <h3 className="font-bold text-[#3f816c] mb-2">Currently</h3>
              <p className="text-[#3f816c] text-sm">Snuggling with my Dog</p>
            </div>
            
            <div className="bg-[#d3faf7] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-bold text-[#3f816c] mb-2">Coding Playlist</h3>
              <p className="text-[#3f816c] text-sm">Taylor Swift & Lo-fi</p>
            </div>
            
            <div className="bg-[#d3faf7] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="font-bold text-[#3f816c] mb-2">Fuel of Choice</h3>
              <p className="text-[#3f816c] text-sm">Too many Cappuccinos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#3f816c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-[#d3faf7] text-xl mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/brifore13" className="bg-[#e15921] text-white p-4 rounded-full hover:bg-[#d73f00] transition-colors shadow-lg">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/briforeman" className="bg-[#e15921] text-white p-4 rounded-full hover:bg-[#d73f00] transition-colors shadow-lg">
              <Linkedin size={28} />
            </a>
            <a href="mailto:bforeman3@gmail.com" className="bg-[#e15921] text-white p-4 rounded-full hover:bg-[#d73f00] transition-colors shadow-lg">
              <Mail size={28} />
            </a>
          </div>
          
          <a 
            href="mailto:bforeman3@gmail.com"
            className="inline-block bg-[#e15921] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d73f00] transition-colors shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3f816c] border-t border-[#8dd3c6] py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-[#d3faf7]">
          <p className="text-sm">
            © 2025 BF. Designed with TSwift color palette.
          </p>
        </div>
      </footer>
    </div>
  );
}
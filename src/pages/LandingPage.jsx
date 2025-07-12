import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import { getBannerData } from '../services/api';

const LandingPage = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const loadBannerData = async () => {
      try {
        const response = await getBannerData();
        setBannerData(response.data);
      } catch (error) {
        console.error('Error loading banner data:', error);
        // Keep bannerData as null for fallback
      }
    };

    loadBannerData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Ideas Section - MOVED TO TOP */}
      <section id="ideas" className="pt-16 min-h-screen bg-gray-50">
        <Banner bannerData={bannerData} />
        <PostList />
      </section>
      
      {/* Work Section */}
      <section id="work" className="min-h-screen bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Work</h1>
            <p className="text-lg md:text-xl font-light">Our amazing projects and portfolio</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Project {item}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Project Title {item}</h3>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4">About</h1>
            <p className="text-lg md:text-xl font-light">Get to know who we are</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="mb-4">
                  Founded with a passion for digital excellence, Suit Media has been at the 
                  forefront of creative technology solutions. We believe in pushing boundaries 
                  and creating experiences that inspire and engage.
                </p>
                <p>
                  Our team of creative minds and technical experts work together to bring 
                  innovative ideas to life, helping brands connect with their audiences in 
                  meaningful ways.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/90">
                  To empower businesses through innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p>Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <p>Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Services</h1>
            <p className="text-lg md:text-xl font-light">What we do best</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Web Development', icon: '🌐', desc: 'Custom websites and web applications' },
                { title: 'Mobile Apps', icon: '📱', desc: 'iOS and Android app development' },
                { title: 'UI/UX Design', icon: '🎨', desc: 'User-centered design solutions' },
                { title: 'Digital Marketing', icon: '📈', desc: 'Strategic online marketing campaigns' },
                { title: 'Brand Identity', icon: '✨', desc: 'Complete brand design and strategy' },
                { title: 'Consulting', icon: '💡', desc: 'Technology and business consulting' }
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-colors">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="min-h-screen bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Careers</h1>
            <p className="text-lg md:text-xl font-light">Join our amazing team</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-2">
                  <li>• Flexible working hours</li>
                  <li>• Remote work opportunities</li>
                  <li>• Competitive salary</li>
                  <li>• Professional development</li>
                  <li>• Creative work environment</li>
                  <li>• Great team culture</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Open Positions</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3">
                    <h4 className="font-semibold text-white">Frontend Developer</h4>
                    <p className="text-white/90 text-sm">React, Vue.js, TypeScript</p>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <h4 className="font-semibold text-white">UI/UX Designer</h4>
                    <p className="text-white/90 text-sm">Figma, Adobe Suite, Prototyping</p>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <h4 className="font-semibold text-white">Project Manager</h4>
                    <p className="text-white/90 text-sm">Agile, Scrum, Team Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Contact</h1>
            <p className="text-lg md:text-xl font-light">Let's start a conversation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <span>hello@suitmedia.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📱</span>
                    <span>+62 21 1234 5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span>Daerah Istimewa Yogyakarta, Indonesia</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📘</a>
                    <a href="#" className="text-2xl hover:text-orange-400 transition-colors">📷</a>
                    <a href="#" className="text-2xl hover:text-orange-400 transition-colors">🐦</a>
                    <a href="#" className="text-2xl hover:text-orange-400 transition-colors">💼</a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-white focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

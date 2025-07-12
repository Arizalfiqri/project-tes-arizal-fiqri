import React from 'react';
import Header from '../components/Header';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Daerah Istimewa Yogyakarta, Indonesia",
      description: "We're looking for an experienced frontend developer to join our team."
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Daerah Istimewa Yogyakarta, Indonesia",
      description: "Creative designer needed to craft amazing user experiences."
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Daerah Istimewa Yogyakarta, Indonesia",
      description: "Help our clients grow their digital presence with strategic marketing."
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Daerah Istimewa Yogyakarta, Indonesia",
      description: "Lead projects from conception to delivery ensuring client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Careers</h1>
            <p className="text-lg md:text-xl font-light">Join our amazing team</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Work With Us</h2>
              <p className="text-lg text-gray-600">
                Be part of a team that's passionate about creating exceptional digital experiences. 
                We offer exciting opportunities for growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Work on cutting-edge projects with the latest technologies.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">Join a supportive team that values collaboration and creativity.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-500 text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600 text-sm">Continuous learning and professional development opportunities.</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h3>
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{position.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{position.type}</span>
                          <span>📍 {position.location}</span>
                        </div>
                        <p className="text-gray-600">{position.description}</p>
                      </div>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Role?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and let's talk!
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

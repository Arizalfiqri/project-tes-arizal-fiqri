import React from 'react';
import Header from '../components/Header';

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Work</h1>
            <p className="text-lg md:text-xl font-light">Our amazing projects and portfolio</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our impressive collection of creative works and successful projects 
              that showcase our expertise in digital solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
      </div>
    </div>
  );
};

export default WorkPage;

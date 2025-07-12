import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">About</h1>
            <p className="text-lg md:text-xl font-light">Get to know who we are</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Suit Media</h2>
              <p className="text-lg text-gray-600">
                We are a creative digital agency dedicated to delivering exceptional results 
                and innovative solutions for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded with a passion for digital excellence, Suit Media has been at the 
                  forefront of creative technology solutions. We believe in the power of 
                  innovation to transform businesses and create meaningful connections.
                </p>
                <p className="text-gray-600">
                  Our team of talented professionals brings together diverse expertise in 
                  design, development, and digital strategy to deliver outstanding results.
                </p>
              </div>
              <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Company Image</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">To empower businesses through innovative digital solutions.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 text-2xl">👁️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">To be the leading creative technology partner globally.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Values</h4>
                <p className="text-gray-600 text-sm">Excellence, creativity, and client satisfaction drive everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

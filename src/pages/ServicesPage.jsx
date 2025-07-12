import React from 'react';
import Header from '../components/Header';

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delivers exceptional experiences",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence",
      icon: "📈"
    },
    {
      title: "Branding",
      description: "Complete brand identity and visual communication solutions",
      icon: "🏷️"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to optimize your business",
      icon: "💡"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Services</h1>
            <p className="text-lg md:text-xl font-light">Solutions that drive your success</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive digital solutions tailored to meet your business needs 
                and help you achieve your goals in the digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help transform your business with our expert services.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

import React, { useState } from 'react';
import Header from '../components/Header';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Contact</h1>
            <p className="text-lg md:text-xl font-light">Let's start a conversation</p>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to start your next project? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-red-500">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">Kolektif Coworking Space, Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, <br />Daerah Istimewa Yogyakarta 55581, Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-red-500">📞</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+62 21 1234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-red-500">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">hello@suitmedia.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

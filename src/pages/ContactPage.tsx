import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-red-700 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/90 text-lg">
              Have questions about parking at Fresno State? We're here to help!
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-3 mt-1">
                      <Mail className="text-red-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">parking@fresnostate.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-3 mt-1">
                      <Phone className="text-red-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">(559) 278-2950</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-3 mt-1">
                      <MapPin className="text-red-700" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        5241 N Maple Ave<br />
                        Fresno, CA 93740
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-800">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-800">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-800">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Question">General Question</option>
                        <option value="App Feedback">App Feedback</option>
                        <option value="Parking Issue">Parking Issue</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition-colors duration-300"
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Where can I find permit information?</h3>
                <p className="text-gray-600">
                  You can purchase parking permits through the Fresno State Traffic Operations office or online through the student portal.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How accurate are the parking recommendations?</h3>
                <p className="text-gray-600">
                  Our recommendations are based on historical data and patterns. While we strive for accuracy, factors like special events 
                  may affect availability. We're continuously improving our prediction algorithms.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What if I can't find parking in the recommended lot?</h3>
                <p className="text-gray-600">
                  Our app shows multiple options, so if your primary recommendation is full, check the alternatives. 
                  You can also use the "Mark as Full" feature to help other students in real-time.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you have real-time data for all lots?</h3>
                <p className="text-gray-600">
                  Currently, we use a combination of historical data and user reports. In the future, we plan to 
                  implement sensors and real-time monitoring for greater accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
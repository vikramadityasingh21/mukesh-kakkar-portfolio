'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Linkedin, MessageCircle, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = {
    email: 'mukeshkakkar@gmail.com',
    linkedin: 'https://linkedin.com/in/mukeshkakkar',
    location: 'Prospect Heights, Illinois',
    availability: 'Usually responds within 24-48 hours'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(formData.subject || 'Website Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Me</h1>
              <p className="text-xl text-gray-700 mb-4">
                Whether you're looking for strategic advisory, interested in collaboration, 
                or want to discuss AI strategy and healthcare transformation - I'd love to hear from you.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-2"><MapPin size={18} />{contactInfo.location}</span>
                <span className="flex items-center gap-2"><Clock size={18} />{contactInfo.availability}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
                    <p className="text-gray-600 mb-4">Your message has been prepared. Just hit send to complete.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-purple-600 hover:text-purple-700 font-medium">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none" placeholder="Tell me what's on your mind..." />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      {isSubmitting ? (<><span className="animate-spin">⏳</span>Opening Email...</>) : (<><Send size={20} />Send Message</>)}
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
                <div className="space-y-4">
                  <button onClick={() => window.location.href = `mailto:${contactInfo.email}`} className="w-full flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group text-left">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors"><Mail className="w-6 h-6 text-purple-600" /></div>
                    <div><h3 className="font-bold text-gray-900">Email</h3><p className="text-gray-600">{contactInfo.email}</p><p className="text-sm text-purple-600">Click to open email client</p></div>
                  </button>
                  <button onClick={() => window.open(contactInfo.linkedin, '_blank')} className="w-full flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group text-left">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors"><Linkedin className="w-6 h-6 text-blue-600" /></div>
                    <div><h3 className="font-bold text-gray-900">LinkedIn</h3><p className="text-gray-600">Professional network connection</p><p className="text-sm text-blue-600">Click to view profile</p></div>
                  </button>
                </div>

                <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-gray-900 mb-3">What I Can Help With</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span>AI strategy & healthcare transformation</li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span>Board advisory & strategic consulting</li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span>Value-based care implementation</li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span>Digital transformation leadership</li>
                    <li className="flex items-start gap-2"><span className="text-purple-600 mt-1">•</span>Speaking engagements & keynotes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Looking for my background?</h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">Check out my resume for a detailed overview of my experience and qualifications.</p>
            <a href="/resume" className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">View Resume</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

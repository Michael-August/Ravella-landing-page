"use client";

import React, { useState } from 'react';
import { Mail, Headphones, ArrowRight, Play } from 'lucide-react';

export default function RavellaContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {/* Left Side - Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          {/* General Communication */}
          <div className="bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF9801]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#FF9801]">General Communication</h3>
            </div>

            <p className="text-muted-foreground font-semibold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed max-w-md">
              Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
            </p>

            <div className="inline-block bg-white border border-gray-300 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 sm:py-3">
              <a href="mailto:hello@ravellaultrasolution.com" className="text-[#653424] font-medium text-sm sm:text-base lg:text-lg break-all">
                hello@ravellaultrasolution.com
              </a>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF9801]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#FF9801]">Help & support</h3>
            </div>

            <p className="text-muted-foreground font-semibold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed max-w-md">
              Ask product questions, report issues, or share feedback. We resolve every query — anytime, any day.
            </p>

            <div className="inline-block bg-white border border-gray-300 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 sm:py-3">
              <a href="mailto:support@ravellaultrasolution.com" className="text-[#653424] font-medium text-sm sm:text-base lg:text-lg break-all">
                support@ravellaultrasolution.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#F5F5F5] rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[#525252] text-sm sm:text-base mb-2">
                Full name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Oluwafemi Samson"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-[#525252] text-sm sm:text-base mb-2">
                Username*
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="@username"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-[#525252] text-sm sm:text-base mb-2">
                Phone number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter number"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#525252] text-sm sm:text-base mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition placeholder:text-[#A3A3A3] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[#525252] text-sm sm:text-base mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm interested in Ravella for my team..."
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#A3A3A3] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none placeholder:text-[#A3A3A3] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#653424] text-white text-base sm:text-lg lg:text-xl font-semibold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl hover:bg-amber-900 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              Submit form
              <Play className="w-4 h-4 text-[#A3A3A3] fill-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
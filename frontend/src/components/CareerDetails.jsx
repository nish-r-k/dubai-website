import React, { useState } from "react";
import { X, UploadCloud, CheckCircle, Send } from 'lucide-react';
import { useParams, Link } from "react-router-dom";
import jobDetails from "../data/jobData";


const CareerDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const job = jobDetails[decodedTitle];

  // ✅ Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });

  // ✅ Form handling
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setIsLoading(true);
   
    setTimeout(() => {
     
      setIsLoading(false);
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          message: "",
        });
      }, 2000);
    }, 800);
  };


  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-blue-600">404</h2>
        <h3 className="text-3xl font-semibold text-gray-800 mt-2">
          Job Not Found 😢
        </h3>
        <p className="text-gray-600 mt-4 max-w-md">
          The position you are looking for may no longer exist or the link is
          incorrect. Please return to the main careers page.
        </p>
        <Link
          to="/careers"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Back to All Open Roles
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="mb-8">
          <Link
            to="/careers"
            className="text-blue-600 font-medium hover:underline transition duration-150 inline-flex items-center gap-1"
          >
            &larr; Back to Careers
          </Link>
          </div>

        {/* Header Section (Original Code) */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {job.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            {job.team} • {job.location} • {job.type}
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
        
          <div className="lg:col-span-2 space-y-10">
            {/* Role Overview */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Role Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Responsibilities
                  </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Required Skills & Qualifications
                  </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

       
          <div className="lg:col-span-1 mt-10 lg:mt-0">
            {/* Apply Card */}
            <div className="sticky top-10 bg-blue-600 p-8 rounded-xl shadow-lg text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to join us?
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-blue-500 px-8 py-3 rounded-full font-extrabold text-lg
                        hover:bg-gray-100 transition-all duration-300 shadow-md uppercase tracking-wider"
              >
                Apply Now
              </button>
              <p className="text-blue-200 text-sm mt-4 opacity-80">
                Takes 5 minutes. We review applications daily.
              </p>
            </div>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Benefits
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-4">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => !isLoading && setIsModalOpen(false)} 
        >
          {/* Modal Content Container */}
          <div 
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Close Button */}
            <button
              onClick={() => !isLoading && setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-100 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
              aria-label="Close application form"
              disabled={isLoading}
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
             
                <div className="p-6 border-b border-gray-100 bg-blue-600 rounded-t-xl">
                  <h2 className="text-2xl font-extrabold text-white">
                    Apply for: {job.title}
                  </h2>
                  <p className="text-sm text-blue-200 mt-1">
                    Complete the form to send your application to our team.
                  </p>
                </div>

                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                 
                  <div className="grid sm:grid-cols-2 gap-4">
                   
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1">Full Name </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner"
                      />
                    </div>

                  
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-500 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label 
                        className="flex items-center justify-center p-3 border-2 border-dashed border-blue-300 bg-blue-50 text-blue-700 rounded-lg cursor-pointer hover:bg-blue-100 transition-all duration-300 h-full"
                      >
                        <input 
                          type="file" 
                          name="resume" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleChange} 
                          className="hidden"
                          required 
                        />
                        <UploadCloud className="w-5 h-5 mr-2" />
                        {formData.resume ? (
                          <span className="truncate max-w-full font-medium text-sm">{formData.resume.name}</span>
                        ) : (
                          <span className="font-medium text-sm">Upload Resume (.pdf, .doc, .docx)</span>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Why are you interested in joining us? (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your motivation and relevant experience..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner resize-none"
                      
                    />
                  </div>

                
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white transition-all duration-300 shadow-lg
                               bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:bg-gray-400"
                  >
                    {isLoading ? (
                      <>
                        {/* Simple Tailwind Spinner */}
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 flex flex-col items-center justify-center min-h-[300px]">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">
                  Application Submitted Successfully!
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for applying. We’ll review your application and get
                  back to you soon. This window will close automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerDetails;
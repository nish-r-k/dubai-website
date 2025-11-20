import React, { useState } from 'react';
import { X, CheckCircle, UploadCloud, Send } from 'lucide-react';


const JobApplicationForm = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        whyJoin: '',
    });
  
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

   
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, resume: file }));
    };

   
    const closeModal = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setIsLoading(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            resume: null,
            whyJoin: '',
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
            console.error("Please fill all required fields and upload a resume.");
            return;
        }

        setIsLoading(true);
        console.log("Submitting form data:", formData);

       
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);

           s
            setTimeout(() => {
                closeModal();
            }, 2000); 

        }, 3000);
    };

    // --- Form UI Components ---

    const TextInput = ({ name, type = 'text', placeholder, required = true }) => (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleInputChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner text-gray-800"
        />
    );

    const ResumeUpload = () => (
        <label className="flex items-center justify-center p-4 border-2 border-dashed border-blue-300 bg-blue-50 text-blue-700 rounded-lg cursor-pointer hover:bg-blue-100 transition-all duration-300 text-sm md:col-span-2">
            <input 
                type="file" 
                name="resume" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange} 
                className="hidden"
                required
            />
            <UploadCloud className="w-5 h-5 mr-2" />
            {formData.resume ? (
                <span className="truncate max-w-full">{formData.resume.name}</span>
            ) : (
                <span>Upload Resume (.pdf, .doc, .docx)</span>
            )}
        </label>
    );

    const SuccessState = () => (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
            <h2 className="text-2xl font-bold mt-6 text-gray-800">Application Submitted!</h2>
            <p className="text-gray-600 mt-2">
                Thank you for your interest. We've successfully received your application.
            </p>
            <p className="text-sm text-gray-500 mt-4">
                The window will close automatically shortly.
            </p>
        </div>
    );
   
    return (
        <div className="font-sans">
            {/* 1. The 'Apply Now' Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-blue-600 px-8 py-3 rounded-full font-extrabold text-lg 
                            hover:bg-blue-100 transition-all duration-300 shadow-xl uppercase tracking-wider 
                            focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            >
                Apply Now
            </button>

        
            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
                    onClick={closeModal} 
                >
                   
                    <div 
                        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transition-transform transform scale-100"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            aria-label="Close application form"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 bg-blue-600 rounded-t-xl">
                            <h3 className="text-2xl font-extrabold text-white">
                                Apply for the Role
                            </h3>
                            <p className="text-sm text-blue-200 mt-1">
                                Complete the form to send your application to our team.
                            </p>
                        </div>
  <div className="p-6">
                            {isSubmitted ? (
                                <SuccessState />
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Responsive Grid for Contact Info */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <TextInput name="fullName" placeholder="Full Name (Required)" />
                                        <TextInput name="email" type="email" placeholder="Email Address (Required)" />
                                        <TextInput name="phone" type="tel" placeholder="Phone Number (Required)" />
                                        <div className="md:col-span-1">
                                        </div>
                                    </div>
                                    
                                    {/* Resume Upload */}
                                    <div className="md:grid md:grid-cols-2 gap-4">
                                        <ResumeUpload />
                                    </div>

                                    {/* Textarea for Motivation */}
                                    <div>
                                        <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-2">
                                            Why are you interested in joining us? (Min 50 characters)
                                        </label>
                                        <textarea
                                            id="whyJoin"
                                            name="whyJoin"
                                            rows="4"
                                            value={formData.whyJoin}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your motivation and relevant experience..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 shadow-inner text-gray-800"
                                            required
                                            minLength="50"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl text-white transition-all duration-300 shadow-lg
                                                   bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:bg-gray-400"
                                    >
                                        {isLoading ? (
                                            <>
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
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobApplicationForm;
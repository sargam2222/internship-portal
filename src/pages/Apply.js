import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Apply for Internship</h2>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
            ✅ Application submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mt-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2  mt-4 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Upload Resume (PDF/DOC)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Cover Letter</label>
              <textarea
                name="coverLetter"
                rows="4"
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
               style={{ backgroundColor: "#00d1d1", padding: "10px 20px", border: "none", borderRadius: "5px" }}
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Apply;

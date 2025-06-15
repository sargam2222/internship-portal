import React, { useState } from 'react';


const Profile = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const handleDownload = () => {
    alert('Resume downloaded successfully!');
  };

 

  const handleAddNote = () => {
    if (noteInput.trim() !== '') {
      setNotes([...notes, noteInput]);
      setNoteInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:flex space-y-6 md:space-y-0 md:space-x-8 profile-card">

        {/* Left Panel */}
        <div className="md:w-1/3 space-y-6">
          {/* Profile Image & Info */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover profile-avatar"
            />
            <h2 className="text-xl font-bold mt-4">Sargam Shirke</h2>
            <p className="text-gray-600">Frontend Developer</p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-700 leading-relaxed px-2">
            Full stack product designer with hands-on experience solving problems
            for clients in Real Estate, Healthcare, IT, and more.
            Skilled in collaboration, communication, and user-centered design.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {['React', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm text-blue-700 rounded-full skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Add Notes */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Add Notes</h3>
            <textarea
              className="w-full border rounded-md p-2 text-sm"
              rows="3"
              placeholder="Add notes for future reference"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />
            <button
              onClick={handleAddNote}
              className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add Note
            </button>

            {/* Display Notes */}
            <div className="mt-4 space-y-2">
              {notes.map((note, index) => (
                <div key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-2/3 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold block text-gray-500">AGE</span>
              28 years
            </div>
            <div>
              <span className="font-semibold block text-gray-500">YEARS OF EXPERIENCE</span>
              1 years
            </div>
            <div>
              <span className="font-semibold block text-gray-500">CTC</span>
              12.5 Lac
            </div>
            <div>
              <span className="font-semibold block text-gray-500">PHONE</span>
              +91 98123 55679
            </div>
            <div>
              <span className="font-semibold block text-gray-500">LOCATION</span>
              Mumbai
            </div>
            <div>
              <span className="font-semibold block text-gray-500">EMAIL</span>
              sargam@gmail.com
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              style={{ backgroundColor: "#00d1d1", padding: "10px 20px", border: "none", borderRadius: "5px" }}
              onClick={handleDownload}
            >
              Download Resume
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

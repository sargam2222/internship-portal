import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobCard() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h3 className="text-lg font-bold">Backend Dev @ Desi Developer</h3>
      <p className="text-sm text-gray-500">Click for more details</p>
      <button onClick={() => setShow(true)} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Check</button>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <button onClick={() => setShow(false)} className="absolute top-2 right-2">X</button>
            <h2 className="text-xl font-bold mb-2">Backend dev @ Desi developer</h2>
            <p>Posted on: 30/Aug/2020</p>
            <p>Job type: Full-time</p>
            <p>Location: In-office</p>
            <p>Description: Amazin job, I’m telling ya</p>
            <p>Website: https://google.com</p>
            <div className="flex gap-2 mt-2">
              <span className="bg-gray-200 px-2 rounded">JavaScript</span>
              <span className="bg-gray-200 px-2 rounded">Node</span>
              <span className="bg-gray-200 px-2 rounded">Firebase</span>
            </div>
            <button onClick={() => navigate('/apply')} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;

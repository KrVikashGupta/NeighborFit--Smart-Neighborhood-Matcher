import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const preferencesList = [
  { key: 'safety', label: 'Safety' },
  { key: 'transport', label: 'Transport Access' },
  { key: 'commuteTime', label: 'Commute Time' },
  { key: 'greenSpaces', label: 'Green Spaces' },
  { key: 'socialLife', label: 'Social Life' },
  { key: 'peaceQuiet', label: 'Peace & Quiet' },
  { key: 'affordability', label: 'Affordability' }
];

export default function App() {
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('student');
  const [selectedPrefs, setSelectedPrefs] = useState([]);
  const [results, setResults] = useState([]);

  const togglePref = (pref) => {
    setSelectedPrefs(prev =>
      prev.includes(pref)
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/match', {
        preferences: selectedPrefs,
        profession
      });
      setResults(response.data);
    } catch (error) {
      alert('Error fetching results. Is the server running?');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">NeighborFit</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border px-2 py-1 w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Profession:</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="profession"
                value="student"
                checked={profession === 'student'}
                onChange={(e) => setProfession(e.target.value)}
              /> Student
            </label>
            <label>
              <input
                type="radio"
                name="profession"
                value="professional"
                checked={profession === 'professional'}
                onChange={(e) => setProfession(e.target.value)}
              /> Working Professional
            </label>
          </div>
        </div>

        <div>
          <label className="block font-semibold">Your Preferences:</label>
          <div className="grid grid-cols-2 gap-2">
            {preferencesList.map(pref => (
              <label key={pref.key}>
                <input
                  type="checkbox"
                  value={pref.key}
                  checked={selectedPrefs.includes(pref.key)}
                  onChange={() => togglePref(pref.key)}
                /> {pref.label}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Find My Match
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Top Neighborhoods</h2>
          <ul className="space-y-2">
            {results.map((n, i) => (
              <li key={i} className="border rounded p-3">
                <div className="font-bold">{n.name}</div>
                <div>Match Score: {n.matchScore}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-6">Welcome to User Auth App</h2>
                <div className="space-y-4">
                    <Link to="/signup" className="w-full bg-blue-500 text-white py-2 rounded block hover:bg-blue-700">Signup</Link>
                    <Link to="/login" className="w-full bg-blue-500 text-white py-2 rounded block hover:bg-blue-700">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default App;

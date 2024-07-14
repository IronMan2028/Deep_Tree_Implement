import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Address:</strong> {`${user.address.line1}, ${user.address.city}, ${user.address.state}, ${user.address.pincode}`}</p>
                <p><strong>User Type:</strong> {user.userType}</p>
            </div>
        </div>
    );
};

export default Dashboard;

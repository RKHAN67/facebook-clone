import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <h1>Main Layout</h1>
            {children}
        </div>
    );
};

export default MainLayout; // ✅ Default export

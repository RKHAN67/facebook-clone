import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-red-600 text-white text-center text-sm p-2'>
            © Copyright {year} syhtek software solutions. All Rights
            Reserved.</div>
    )
}

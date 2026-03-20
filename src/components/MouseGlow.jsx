import React, { useState, useEffect } from 'react';

const MouseGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 197, 94, 0.03), transparent 80%)`
            }}
        />
    );
};

export default MouseGlow;

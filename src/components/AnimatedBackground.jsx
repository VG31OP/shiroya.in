import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-black">
            {/* SaaS-style glowing blobs */}
            <motion.div 
                animate={{
                    x: ["-20%", "20%", "-20%"],
                    y: ["0%", "30%", "0%"],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40"
            />
            
            <motion.div 
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["40%", "10%", "40%"],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-30"
            />

            <motion.div 
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05)_0%,transparent_70%)]"
            />
            
            {/* The animated grid from index.css :root::before will still show through */}
        </div>
    );
};

export default AnimatedBackground;

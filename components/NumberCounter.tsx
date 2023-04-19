import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NumberCounter({ targetNumber }:any) {

const [currentNumber, setCurrentNumber] = useState(0);
const increment = Math.ceil(targetNumber / 50); // Defines the increment
const duration = 1000; // Duration in ms

useEffect(() => {
let timer:any = null;
if (currentNumber < targetNumber) {
    timer = setTimeout(() => {
    setCurrentNumber(currentNumber + increment);
    }, duration / 50);
}

return () => clearTimeout(timer);
}, [currentNumber, targetNumber, increment, duration]);

const variants = {
count: {
    opacity: 1,
    scale: 1,
    transition: {
    duration: 0.5,
    ease: 'easeOut',
    },
},
hidden: { opacity: 0, scale: 0.5 },
};

return (
<motion.span variants={variants} initial="hidden" animate="count">
    {currentNumber.toLocaleString()}
</motion.span>
);
}

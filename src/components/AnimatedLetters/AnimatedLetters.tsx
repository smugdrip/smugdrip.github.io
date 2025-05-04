import './index.css';
import React from 'react';

interface AnimatedLettersProps {
  strArray: string[];
  idx: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`text-animate _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
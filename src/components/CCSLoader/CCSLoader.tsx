import React, { useEffect } from 'react';

interface CCSLoaderProps {}

const CCSLoader: React.FC<CCSLoaderProps> = (props) => {
  const {} = props;

  useEffect(() => {
    const squares = document.querySelectorAll('.square');

    const gradientColors = [
      '#0033cc',
      '#0040ff',
      '#3366ff',
      '#4d88ff',
      '#4d88ff',
      '#4d88ff',
      '#3366ff',
      '#0040ff',
      '#0033cc',
    ];

    squares.forEach((square, index) => {
      (square as any).style.backgroundColor = gradientColors[index];
      (square as any).style.animationDelay = index * 0.125 + 's';
    });
  }, []);

  return (
    <div className="spinner">
      <div className="square" id="s1"></div>
      <div className="square" id="s2"></div>
      <div className="square" id="s3"></div>
      <div className="square" id="s4"></div>
      <div className="square" id="s5"></div>
      <div className="square" id="s6"></div>
      <div className="square" id="s7"></div>
      <div className="square" id="s8"></div>
      <div className="square" id="s9"></div>
    </div>
  );
};

export default CCSLoader;

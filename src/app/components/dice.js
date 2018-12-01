import React from 'react';
import '../style/dice.scss';

export default function Dice({onClick}) {
  return (
    <div onClick={onClick} className="dice">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
}

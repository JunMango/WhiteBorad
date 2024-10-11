// Eraser.js
import React from 'react';
import css from "../white-board.module.css";

export default function Eraser({ onSelect }) {
    return (
        <button onClick={() => onSelect('eraser')} className={`${css.btn} ${css.eraser}`}>
           지우개
        </button>
    );
}

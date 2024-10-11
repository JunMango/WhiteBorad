import React, { useRef, useState, useEffect } from 'react';
import css from './white-board.module.css';
import Eraser from "./writing instrument/Eraser";

export default function Whiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentTool, setCurrentTool] = useState('pen'); // 'pen' or 'eraser'
  const [eraserPosition, setEraserPosition] = useState({ x: 0, y: 0 }); // New state for eraser position

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.scale(ratio, ratio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const getCoordinates = (e) => {
    if (e.nativeEvent instanceof TouchEvent) {
      const touch = e.nativeEvent.touches[0];
      const rect = canvasRef.current.getBoundingClientRect();
      return { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top };
    }
    return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
  };

  const startDrawing = (e) => {
    e.stopPropagation();
    const { offsetX, offsetY } = getCoordinates(e);
    setIsDrawing(true);
    setLines([...lines, [{ x: offsetX, y: offsetY }]]);
    if (currentTool === 'eraser') {
      setEraserPosition({ x: offsetX, y: offsetY });
    }
  };
  const draw = (e) => {
    if (!isDrawing) return;
    e.stopPropagation();
    const { offsetX, offsetY } = getCoordinates(e);
    const newLines = [...lines];
    const lastLine = newLines[newLines.length - 1];
    lastLine.push({ x: offsetX, y: offsetY });
    setLines(newLines);

    const ctx = canvasRef.current.getContext('2d');
    if (currentTool === 'pen') {
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    } else if (currentTool === 'eraser') {
      ctx.clearRect(offsetX - 20, offsetY - 20, 100, 100);
      setEraserPosition({ x: offsetX, y: offsetY });
    }
  };

  const endDrawing = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDrawing(false);
    canvasRef.current.getContext('2d').beginPath();
  };

  const saveDrawing = () => {
    const drawingData = JSON.stringify(lines);
    console.log('Saved Drawing Data:', drawingData);
    localStorage.setItem('drawing', drawingData);
  };

  const resetDrawing = () => {
    setLines([]);
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    localStorage.removeItem('drawing');
  };

  return (
      <div className={css.canvasContainer}>
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            onMouseLeave={endDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={endDrawing}
            className={css.canvas}
        />
        {currentTool === 'eraser' && (
            <div
                style={{
                  position: 'absolute',
                  left: eraserPosition.x - 10,
                  top: eraserPosition.y - 10,
                  width: '100px',
                  height: '100px',
                  border: '2px dashed red',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}
            />
        )}
        <button onClick={() => setCurrentTool('pen')} className={`${css.btn} ${css.pen}`}>Pen</button>
        <Eraser onSelect={setCurrentTool} />
        <button onClick={resetDrawing} className={`${css.btn} ${css.reset}`}>
          Reset
        </button>
      </div>
  );
}

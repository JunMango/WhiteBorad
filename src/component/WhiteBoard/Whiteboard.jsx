import React, { useRef, useState } from 'react';

export default  function Whiteboard  (){
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);

  const getCoordinates = (e) => {
    if (e.nativeEvent instanceof TouchEvent) {
      const touch = e.nativeEvent.touches[0];
      const rect = canvasRef.current.getBoundingClientRect();
      return { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top };
    }
    return { offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
  };

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    setIsDrawing(true);
    setLines([...lines, [{ x: offsetX, y: offsetY }]]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(e);
    const newLines = [...lines];
    const lastLine = newLines[newLines.length - 1];
    lastLine.push({ x: offsetX, y: offsetY });
    setLines(newLines);

    const ctx = canvasRef.current.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);

    // 터치 시 스크롤 방지
    e.preventDefault();
  };

  const endDrawing = () => {
    setIsDrawing(false);
    canvasRef.current.getContext('2d').beginPath();
  };
  // 로컬 스토리지에 저장.
  const saveDrawing = () => {
    const drawingData = JSON.stringify(lines);
    console.log('Saved Drawing Data:', drawingData);
    localStorage.setItem('drawing', drawingData);
  };

  return (
      <div>
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            onMouseLeave={endDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={endDrawing}
            width={800}
            height={600}
            // touch-action 스타일 추가
            style={{ border: '1px solid #000', touchAction: 'none' }}
        />
        <button onClick={saveDrawing}>Save Drawing</button>
      </div>
  );
};

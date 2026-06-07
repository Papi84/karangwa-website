'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix movie style - mix of katakana-like characters and numbers
    const matrix = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = matrix;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops: number[] = [];

    for (let i = 0; i < columns; i++) {
      rainDrops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Matrix movie style - WHITE hot leading character with green trail
        const isLeading = rainDrops[i] <= 1;

        if (isLeading) {
          // WHITE hot leading character (like the movie!)
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#00ff41';
        } else {
          // Green trail with fading opacity
          const fadeOpacity = Math.max(0.15, 1 - (rainDrops[i] / canvas.height) * 1.5);
          ctx.fillStyle = `rgba(0, 255, 65, ${fadeOpacity})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset shadow for next frame
        ctx.shadowBlur = 0;

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrixCanvas"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}

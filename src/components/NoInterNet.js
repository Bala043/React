import React, { useEffect, useRef, useState } from "react";
const NoInterNet = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const cowsRef = useRef([]);
  const ufoXRef = useRef(220);
  const [ufoX, setUfoX] = useState(220);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const keysPressed = useRef({});
  const canvasWidth = 500;
  const canvasHeight = 300;
  const cowRadius = 15;
  const resetGame = () => {
    setScore(0);
    setMissed(0);
    setGameOver(false);
    cowsRef.current = [];
    ufoXRef.current = 220;
    setUfoX(220);
  };
  // Keyboard down/up tracking
  useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed.current[e.key] = true;

      if (gameOver && e.key === "Enter") {
        resetGame();
      }
    };
    const handleKeyUp = (e) => {
      keysPressed.current[e.key] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameOver]);
  // Cow drop
  useEffect(() => {
    const dropInterval = setInterval(() => {
      if (!gameOver) {
        cowsRef.current.push({ x: Math.random() * (canvasWidth - 30), y: 0 });
      }
    }, 1200);
    return () => clearInterval(dropInterval);
  }, [gameOver]);
  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const drawUFO = () => {
      ctx.fillStyle = "#7f5af0";
      ctx.fillRect(ufoXRef.current, 250, 60, 20);
      ctx.beginPath();
      ctx.arc(ufoXRef.current + 30, 250, 20, 0, Math.PI, true);
      ctx.fillStyle = "#2cb67d";
      ctx.fill();
    };
    const drawCow = (x, y) => {
      ctx.beginPath();
      ctx.arc(x + cowRadius, y + cowRadius, cowRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "#ff8906";
      ctx.fill();
    };
    const animate = () => {
      if (gameOver) return;
      // move UFO smoothly
      if (keysPressed.current["ArrowLeft"]) {
        ufoXRef.current = Math.max(0, ufoXRef.current - 5);
        setUfoX(ufoXRef.current);
      }
      if (keysPressed.current["ArrowRight"]) {
        ufoXRef.current = Math.min(canvasWidth - 60, ufoXRef.current + 5);
        setUfoX(ufoXRef.current);
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawUFO();
      let updatedCows = [];
      cowsRef.current.forEach((cow) => {
        cow.y += 3;
        drawCow(cow.x, cow.y);
        const caught =
          cow.y + cowRadius * 2 >= 250 &&
          cow.x + cowRadius > ufoXRef.current &&
          cow.x + cowRadius < ufoXRef.current + 60;
        const isMissed = cow.y > canvasHeight;
        if (caught) {
          setScore((prev) => prev + 1);
        } else if (isMissed) {
          setMissed((prev) => {
            const m = prev + 1;
            if (m >= 3) setGameOver(true);
            return m;
          });
        } else {
          updatedCows.push(cow);
        }
      });
      cowsRef.current = updatedCows;
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameOver]);
  return (
    <div className="no-internet-game">
      <h2>No Internet Connection 😢</h2>
      <p>
        Play this UFO Catcher Game 🚀 | Move with ⬅️ ➡️ | Catch 3 cows or you lose!
      </p>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
      <div className="info">
        <p>
          🎯 Score: {score} | ❌ Missed: {missed}
        </p>
        {gameOver && (
          <p className="game-over">
            💀 Game Over! Press <strong>Enter</strong> to retry
          </p>
        )}
      </div>
    </div>
  );
};


export default NoInterNet;

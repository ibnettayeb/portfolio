import { useState, useEffect } from "react";

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updatePosition);
    return () => document.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolut"
      style={{
        backgroundImage: `radial-gradient(600px at ${position.x}px ${position.y}px, rgb(58, 159, 241,0.10), transparent 80%)`,
      }}
    />
  );
};

export default CursorFollow;

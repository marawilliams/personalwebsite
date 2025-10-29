"use client";

import React, { useState, useEffect } from "react";

interface HoverImageCycleProps {
  images: string[];
  size?: number;
  onClick?: () => void;
  intervalMs?: number; // optional speed control
}

const HoverImageCycle: React.FC<HoverImageCycleProps> = ({
  images,
  size = 480,
  onClick,
  intervalMs = 110,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isHovered) {
      intervalId = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalMs);
    } else {
      setIndex(0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, images.length, intervalMs]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        width: 350,
        height: 350,
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        cursor: isHovered
          ? 'url("/assets/cursorpoint.png") 0 0, pointer'
          : 'url("/assets/cursorplane.png") 0 0, auto',
      }}
    >
      <img
        src={images[index]}
        alt={`frame-${index}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

export default HoverImageCycle;

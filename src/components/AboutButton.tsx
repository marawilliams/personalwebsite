import React, { useState } from "react";
import "../styles/AboutButton.css";

interface ImageButtonProps {
  href: string;
  defaultSrc: string;
  hoverSrc: string;
  alt?: string;
}

export default function ImageButton({ href, defaultSrc, hoverSrc, alt }: ImageButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="image-button-link"
    >
      <img
        src={isHovered ? hoverSrc : defaultSrc}
        alt={alt}
        className="image-button"
      />
    </a>
  );
}

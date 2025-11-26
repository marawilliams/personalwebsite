import React from "react";
import "../styles/AlbumCard.css";

interface AlbumCardProps {
  imageSrc: string;
  spotifyUrl: string;
  alt?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ imageSrc, spotifyUrl, alt }) => {
  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="album-card"
    >
      <img src={imageSrc} alt={alt} className="album-image" />
      <div className="album-overlay" />
    </a>
  );
};

export default AlbumCard;

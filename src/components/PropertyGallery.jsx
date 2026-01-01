import { useState } from "react";
import "../styles/PropertyGallery.css";


export default function PropertyGallery({ images }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery">
      <img
        className="main"
        src={images[0]}
        alt="Main property"
        onClick={() => setSelected(images[0])}
      />

      <div className="thumbs">
        {images.slice(1).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            onClick={() => setSelected(img)}
            className="thumb"
          />
        ))}
      </div>

      {/* POPUP / LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>
              ✕
            </button>
            <img src={selected} alt="Large view" />
          </div>
        </div>
      )}
    </div>
  );
}
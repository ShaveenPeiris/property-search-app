import { useNavigate } from "react-router-dom";
import "../styles/PropertyCard.css";

export default function PropertyCard({ property, isFavourite, onFavouriteToggle }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/property/${property.id}`);
  };

  const handleFavouriteClick = (e) => {
    e.stopPropagation();
    console.log("Favourite button clicked for:", property.title);
    console.log("Current favourite status:", isFavourite);
    if (onFavouriteToggle) {
      onFavouriteToggle();
    } else {
      console.error("onFavouriteToggle is not defined!");
    }
  };

  // Get the main image - either first in images array or fallback
  const mainImage = property.images && property.images.length > 0 
    ? property.images[0] 
    : property.image || '/placeholder.jpg';

  // Get location from postcode or location field
  const location = property.postcode || property.location || 'London';

  return (
    <div className="property-card">
      <div className="property-image">
        <img 
          src={mainImage} 
          alt={property.title}
          onError={(e) => {
            console.log('Image failed to load:', mainImage);
            e.target.src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
          }}
        />
        <button
          className={`favourite-btn ${isFavourite ? 'active' : ''}`}
          onClick={handleFavouriteClick}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          {isFavourite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="property-description">
          {property.shortDescription || property.description}
        </p>
        <p className="property-price">£{property.price.toLocaleString()}</p>
        <div className="property-meta">
          <span>🛏️ {property.bedrooms} beds</span>
          <span>📍 {location}</span>
        </div>
        <div className="property-actions">
          <button className="view-btn" onClick={handleViewClick}>
            View
          </button>
          <button
            className={`favourite-action-btn ${isFavourite ? 'active' : ''}`}
            onClick={handleFavouriteClick}
          >
            {isFavourite ? '❤️ Favourite' : '🤍 Favourite'}
          </button>
        </div>
      </div>
    </div>
  );
}
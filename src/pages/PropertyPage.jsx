import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyGallery from "../components/PropertyGallery";
import PropertyTabs from "../components/PropertyTabs";
import properties from "../data/properties.json";
import "../styles/PropertyPage.css";

export default function PropertyPage({ addFavourite, favourites = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <div className="property-page">
          <div className="property-container">
            <h1>Property Not Found</h1>
            <button onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isFavourite = favourites.some((fav) => fav.id === property.id);

  const handleAddToFavourites = () => {
    if (addFavourite && !isFavourite) {
      addFavourite(property);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="property-page">
        <div className="property-container">
          {/* Property Header */}
          <div className="property-header">
            <h1>{property.title}</h1>
            <p>£{property.price.toLocaleString()}</p>
            <div className="property-meta-info">
              <span>🛏️ {property.bedrooms} bedrooms</span>
              <span>📍 {property.postcode || property.location}</span>
              <span>🏠 {property.type}</span>
            </div>
            <button 
              onClick={handleAddToFavourites}
              disabled={isFavourite}
              style={{
                opacity: isFavourite ? 0.6 : 1,
                cursor: isFavourite ? 'not-allowed' : 'pointer'
              }}
            >
              {isFavourite ? '❤️ Already in Favourites' : '🤍 Add to Favourites'}
            </button>
          </div>

          {/* Gallery */}
          {property.images && property.images.length > 0 && (
            <PropertyGallery images={property.images} />
          )}

          {/* Tabs */}
          <div className="property-content">
            <PropertyTabs
              description={property.description || property.Description}
              floorPlan={property.floorPlan}
              lat={property.lat || 51.5074}
              lng={property.lng || -0.1278}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
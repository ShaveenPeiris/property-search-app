import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties.json";
import "../styles/ResultPage.css";

export default function ResultsPage({ addFavourite, favourites, removeFavourite }) {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [draggedProperty, setDraggedProperty] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Filter properties based on URL parameters
  useEffect(() => {
    let results = [...properties];

    const type = searchParams.get('type');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const minBedrooms = searchParams.get('minBedrooms');
    const maxBedrooms = searchParams.get('maxBedrooms');
    const postcode = searchParams.get('postcode');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    // Filter by property type
    if (type) {
      results = results.filter(
        (p) => p.type.toLowerCase() === type.toLowerCase()
      );
    }

    // Filter by min price
    if (minPrice) {
      const min = parseFloat(minPrice);
      results = results.filter((p) => p.price >= min);
    }

    // Filter by max price
    if (maxPrice) {
      const max = parseFloat(maxPrice);
      results = results.filter((p) => p.price <= max);
    }

    // Filter by min bedrooms
    if (minBedrooms) {
      const min = parseInt(minBedrooms);
      results = results.filter((p) => p.bedrooms >= min);
    }

    // Filter by max bedrooms
    if (maxBedrooms) {
      const max = parseInt(maxBedrooms);
      results = results.filter((p) => p.bedrooms <= max);
    }

    // Filter by postcode area
    if (postcode) {
      results = results.filter((p) =>
        (p.postcode && p.postcode.toLowerCase().includes(postcode.toLowerCase())) ||
        (p.location && p.location.toLowerCase().includes(postcode.toLowerCase()))
      );
    }

    // Filter by date from (properties added after this date)
    if (dateFrom) {
      const fromDate = new Date(dateFrom);
      results = results.filter((p) => {
        if (!p.dateAdded) return true;
        const propertyDate = new Date(p.dateAdded);
        return propertyDate >= fromDate;
      });
    }

    // Filter by date to (properties added before this date)
    if (dateTo) {
      const toDate = new Date(dateTo);
      results = results.filter((p) => {
        if (!p.dateAdded) return true;
        const propertyDate = new Date(p.dateAdded);
        return propertyDate <= toDate;
      });
    }

    setFilteredProperties(results);
  }, [searchParams]);

  const handleDragStart = (property) => {
    setDraggedProperty(property);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedProperty && addFavourite) {
      addFavourite(draggedProperty);
      setDraggedProperty(null);
    }
    setIsDragOver(false);
  };

  const isFavourite = (propertyId) => {
    return favourites?.some((fav) => fav.id === propertyId);
  };

  const handleFavouriteToggle = (property) => {
    if (isFavourite(property.id)) {
      if (removeFavourite) {
        removeFavourite(property.id);
      }
    } else {
      if (addFavourite) {
        addFavourite(property);
      }
    }
  };

  // Get main image from property (handles both image and images array)
  const getMainImage = (property) => {
    if (property.images && property.images.length > 0) {
      return property.images[0];
    }
    return property.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="results-page-container">
        {/* Property Results */}
        <div className="results">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                draggable
                onDragStart={() => handleDragStart(property)}
                className="property-card-wrapper"
              >
                <PropertyCard
                  property={property}
                  isFavourite={isFavourite(property.id)}
                  onFavouriteToggle={() => handleFavouriteToggle(property)}
                />
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h2>No Properties Found</h2>
              <p>Try adjusting your search criteria</p>
            </div>
          )}
        </div>

        {/* Favourites Drop Zone */}
        <div
          className={`favourites-drop-zone ${isDragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <h2>Favourites</h2>
          
          {favourites && favourites.length > 0 ? (
            <div className="favourites-list">
              {favourites.map((fav) => (
                <div key={fav.id} className="favourite-item">
                  <img 
                    src={getMainImage(fav)} 
                    alt={fav.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
                    }}
                  />
                  <div className="favourite-info">
                    <h3>{fav.title}</h3>
                    <p>£{fav.price.toLocaleString()}</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFavourite && removeFavourite(fav.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="drop-instruction">
              Drag properties here to add to favourites
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
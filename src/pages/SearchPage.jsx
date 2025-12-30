import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SearchPage.css";

export default function SearchPage() {
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    
    // Navigate to results page with search filters as URL params
    const params = new URLSearchParams();
    
    if (filters.type) params.append('type', filters.type);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.minBedrooms) params.append('minBedrooms', filters.minBedrooms);
    if (filters.maxBedrooms) params.append('maxBedrooms', filters.maxBedrooms);
    if (filters.postcode) params.append('postcode', filters.postcode);
    
    // Navigate to results page with filters
    navigate(`/results?${params.toString()}`);
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="search-page">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Find Your Dream Property</h1>
        </section>

      </div>

      <Footer />
    </div>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";
import './styles/App.css';

function App() {
  // FAVOURITES STATE - Added for ResultsPage
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (property) => {
    if (!favourites.find(p => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter(p => p.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route 
          path="/results" 
          element={
            <ResultPage 
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
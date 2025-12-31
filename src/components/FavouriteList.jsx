import FavouriteItem from "./FavouriteItem";
import "../styles/FavouriteList.css";

export default function FavouriteList({ favourites, removeFavourite, clearFavourites }) {
  return (
    <aside className="favourites">
      <h2>Favourites</h2>

      {favourites.map(f => (
        <FavouriteItem
          key={f.id}
          property={f}
          removeFavourite={removeFavourite}
        />
      ))}

      {favourites.length > 0 && (
        <button onClick={clearFavourites}>Clear All</button>
      )}
    </aside>
  );
}
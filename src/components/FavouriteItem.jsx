export default function FavouriteItem({ property, removeFavourite }) {
  return (
    <div className="favourite-item">
      <span>{property.title}</span>
      <button onClick={() => removeFavourite(property.id)}>✖</button>
    </div>
  );
}
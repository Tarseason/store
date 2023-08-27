import React, { useEffect, useState } from "react";
import { getFavorites } from "../utils/favoriteFunc";
import ClothingCard from "../components/clothingCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const store = getFavorites();

    if (store) {
      setFavorites(store);
    }
  }, []);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {favorites.length > 0 ? (
        <div className="w-full border-red-300 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {favorites.map((item) => (
            <ClothingCard item={item} />
          ))}
        </div>
      ) : (
        <div>
          <p>Nenhum favorito adicionado!</p>
        </div>
      )}
    </div>
  );
}
export default Favorites;

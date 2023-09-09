import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../utils/favoriteFunc";
import ClothingCard from "../components/clothingCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const phoneNumber = "5565981645969";

  const message = `Ola Rosy! Estava em sua loja e amei seus produtos, principalemente os ${favorites.map(
    (item) => `${item.name}+, `
  )} gostaria de finalizar meu pedido!`;

  const formattedPhoneNumber = phoneNumber.replace("+", "").replace(/ /g, "");
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

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
      <div className="w-full">
        <div>Logo voce tera suas peças favoritas!</div>
        <div className="w-full border-red-300 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <p>Voce amou 4 peças</p>
          <p>Gostaria de realizar seu pedido agora?</p>
        </div>
        <div className="w-full border-red-300 grid grid-cols-1 gap-2 pt-4">
          <button>
            <Link to="/">Continuar na Loja</Link>
          </button>
          <button className="p-8">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Pedir Agora
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Favorites;

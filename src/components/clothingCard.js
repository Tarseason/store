import React, { useState } from "react";
import { setFavorite, getFavorites } from "../utils/favoriteFunc.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ClothingCard(props) {
  const item = props.item;
  console.log(item);

  const [favoriteInStorage, setFavoriteInStorage] = useState([]);

  const principalFavorite = (item) => {
    setFavorite(item);

    const data = getFavorites();
    setFavoriteInStorage(data);

    return;
  };

  return (
    <div
      key={item.name + item.price}
      className="border shadow-lg rounded-lg hover:scale-105 duration-300"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex-wrap wrap justify-between  px-1 py-2">
        <p className="font-bold text-sm mx-1 my-2">{item.name}</p>
        <p className="flex flex-row-reverse">
          <div className="flex justify-between w-full px-2">
            <span className="bg-rose-500 text-white p-1 rounded-full">
              {` R$ ${item.price.toFixed(2)}`}
            </span>
            <div
              className=""
              type="button"
              onClick={() => principalFavorite(item)}
            >
              {favoriteInStorage?.find(
                (el) => el.name === item.name && el.id === item.id
              ) ? (
                <AiFillHeart size={30} color="red" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default ClothingCard;

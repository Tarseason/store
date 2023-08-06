export const getFavorites = () => {
  const dataInStorage = localStorage.getItem("favorites");
  if (!dataInStorage) {
    const arr = JSON.stringify([]);
    localStorage.setItem("favorites", arr);
    const result = JSON.parse(arr);
    return result;
  } else {
    const favorites = JSON.parse(dataInStorage);
    return favorites;
  }
};

const removeFavorite = (storedData, item) => {
  const result = storedData.filter((el) => el.id !== item.id);
  return result;
};

export const setFavorite = (param) => {
  const inStorage = getFavorites();
  console.log(inStorage, "salve");
  const haveInStorage = inStorage.find((item) => item.id === param.id);

  if (haveInStorage) {
    const newFavorites = removeFavorite(inStorage, param);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  } else {
    const newFavorites = [...inStorage, param];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }
};

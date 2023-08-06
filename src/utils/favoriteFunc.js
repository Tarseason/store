const verifyFavorites = () => {
  let storedData = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!storedData) {
    localStorage.setItem("favorites", []);
  }
};

export const getFavorites = () => {
  const dataInStorage = localStorage.getItem("favorites");
  const favorites = JSON.parse(dataInStorage);
  return favorites;
};

const removeFavorite = (storedData, item) => {
  const result = storedData.filter((el) => el.id !== item.id);
  return result;
};

export const setFavorite = (param) => {
  verifyFavorites();
  const isFavorite = getFavorites(param);
  console.log(isFavorite, "setFavorites");
  const storedData = JSON.parse(localStorage.getItem("favorites")) || [];
  const haveInStorage = storedData.find((item) => item.id === param.id);

  if (haveInStorage) {
    const newFavorites = removeFavorite(storedData, param);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  } else {
    const newFavorites = [...storedData, param];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }
};

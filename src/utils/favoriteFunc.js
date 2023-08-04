const verifyFavorites = () => {
  let storedData = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!storedData) {
    localStorage.setItem("favorites");
  }
};

export const setFavorite = (param) => {
  verifyFavorites();
  const storedData = JSON.parse(localStorage.getItem("favorites")) || [];
  const haveInStorage = storedData.find((item) => item.id === param.id);

  if (haveInStorage) {
    console.log("Esse item nao esta nos Favoritos");
  } else {
    console.log("esse esta nos favoritos", haveInStorage);
  }
  const newFavorites = [...storedData, param];
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const getFavorites = () => {
  const dataInStorage = localStorage.getItem("favorites");
  const favorites = JSON.parse(dataInStorage);
  return favorites;
};

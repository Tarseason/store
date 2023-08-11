export const filterPriceSame = (data, price) => {
  if (!data || !price) return;

  if (price === "$") {
    const result = data.filter((item) => {
      return item.price <= 50;
    });
    return result;
  }

  if (price === "$$") {
    const result = data.filter((item) => {
      return item.price > 50 && item.price <= 80;
    });
    return result;
  }

  if (price === "$$$") {
    const result = data.filter((item) => {
      return item.price > 80 && item.price <= 120;
    });
    return result;
  }

  if (price === "$$$$") {
    const result = data.filter((item) => {
      return item.price > 120;
    });
    return result;
  }
};

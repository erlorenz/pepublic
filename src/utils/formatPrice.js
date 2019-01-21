const formatPrice = integerPrice => {
  const decimalPrice = integerPrice / 100;
  const twoDecimals = decimalPrice.toFixed(2);

  return twoDecimals.toString();
};

export default formatPrice;

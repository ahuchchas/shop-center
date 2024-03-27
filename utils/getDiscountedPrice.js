export function getDiscountedPrice(price, discountPercentage) {
  const discoutedPrice = price - (price * discountPercentage) / 100;

  return discoutedPrice.toFixed(2);
}

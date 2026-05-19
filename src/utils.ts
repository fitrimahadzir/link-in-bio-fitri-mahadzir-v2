export const formatPrice = (price: any) => {
  if (price === undefined || price === null) return '';
  const strPrice = String(price).trim();
  
  if (strPrice === '0' || strPrice.toLowerCase() === 'free' || strPrice.toLowerCase() === 'percuma') {
    return 'Percuma';
  }
  
  if (strPrice.toUpperCase().startsWith('RM')) {
    return strPrice;
  }
  
  return `RM ${strPrice}`;
};

export const isFreeProduct = (product: any) => {
  return product.is_free || product.price === 0 || product.price === '0' || String(product.price).toLowerCase() === 'free' || String(product.price).toLowerCase() === 'percuma';
};

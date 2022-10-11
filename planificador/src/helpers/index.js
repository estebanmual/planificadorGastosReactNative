export const formatearCantidad = cantidad => {
  return (
    '$' +
    Number(cantidad)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
};

export const generarId = () => {
  const random = Math.random().toString(36).substring(2, 11);
  const timestamp = Date.now().toString(36);
  return random + timestamp;
};

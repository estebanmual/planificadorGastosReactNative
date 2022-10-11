export const formatearCantidad = cantidad => {
  return (
    '$' +
    Number(cantidad)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
};

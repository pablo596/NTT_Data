import { useEffect, useState } from 'react';
import { getProductosFinancieros } from '../api';

/**
 * Hook personalizado que se utiliza para obtener una lista de productos financieros desde una fuente de datos.
 * @param {boolean} reload - Un indicador que desencadena la recarga de los productos financieros cuando cambia.
 * @returns {Object} Un objeto que contiene los productos financieros y un indicador de carga (isLoading).
 */
export const useFetchProductosFinancieros = (reload) => {
  const [productosFinancieros, setProductosFinancieros] = useState([]);
  /**
   * Función asincrónica que obtiene los productos financieros de una fuente de datos.
   */
  const getProductosFinancierosData = async () => {
    try {
      const productosFinancierosReceived = await getProductosFinancieros('');

      // Actualiza el estado con los productos financieros obtenidos.
      setProductosFinancieros(productosFinancierosReceived.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Verifica si se debe recargar los productos financieros cuando el valor de `reload` cambia.
    if (reload) {
      getProductosFinancierosData();
    }
    return () => {};
  }, [reload]);
  // Devuelve un objeto con los productos financieros y un indicador de carga (isLoading).
  return {
    productosFinancieros,
    isLoading: false,
  };
};

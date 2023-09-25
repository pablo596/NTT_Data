import { useEffect, useState } from 'react';
import { getProductosFinancieros } from '../api';

export const useFetchProductosFinancieros = (reload) => {
  const [productosFinancieros, setProductosFinancieros] = useState([]);
  const getProductosFinancierosData = async () => {
    const productosFinancierosReceived = await getProductosFinancieros('');

    setProductosFinancieros(productosFinancierosReceived.data);
  };

  useEffect(() => {
    if (reload) {
      getProductosFinancierosData();
    }
    return () => {};
  }, [reload]);

  return {
    productosFinancieros,
    isLoading: false,
  };
};

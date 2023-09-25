import { Navigate, Route, Routes } from 'react-router-dom';
import {
  FormularioProducttoFinancieroPage,
  ProductosFinancierosPage,
} from '../pages';

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/productos-financieros"
          element={<ProductosFinancierosPage />}
        ></Route>
        <Route
          path="/formulario-productos-financieros"
          element={<FormularioProducttoFinancieroPage />}
        ></Route>
        <Route
          path="/formulario-productos-financieros/:idTarjeta/:nameTarjeta/:descriptionTarjeta/:logoTarjeta/:date_releaseTarjeta/:date_revisionTarjeta"
          element={<FormularioProducttoFinancieroPage />}
        ></Route>
        <Route path="/" element={<Navigate to={'/productos-financieros'} />} />
      </Routes>
    </>
  );
};

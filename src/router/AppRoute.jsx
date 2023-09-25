import { Navigate, Route, Routes } from 'react-router-dom';
import {
  FormularioProducttoFinancieroPage,
  ProductosFinancierosPage,
} from '../pages';

/**
 * @returns {JSX.Element} El elemento de React que representa las rutas de la aplicación.
 */
export const AppRoute = () => {
  return (
    <>
      <Routes>
        {/* Ruta para la página de productos financieros */}
        <Route
          path="/productos-financieros"
          element={<ProductosFinancierosPage />}
        ></Route>
        {/* Ruta para la página de formulario de productos financieros (nuevo registro) */}
        <Route
          path="/formulario-productos-financieros"
          element={<FormularioProducttoFinancieroPage />}
        ></Route>
        {/* Ruta predeterminada que redirige a la página de productos financieros */}
        <Route path="/" element={<Navigate to={'/productos-financieros'} />} />
      </Routes>
    </>
  );
};

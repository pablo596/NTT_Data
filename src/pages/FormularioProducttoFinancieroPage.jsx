import { useLocation, useNavigate } from 'react-router-dom';

import { FormularioProductoFinanciero } from '../views';

export const FormularioProducttoFinancieroPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="container">
      <FormularioProductoFinanciero state={state} navigate={navigate} />
    </div>
  );
};

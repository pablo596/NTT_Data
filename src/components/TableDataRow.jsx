import { formatDateDisplay } from '../helpers';

import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

export const TableDataRow = ({
  productoFinanciero,
  eliminarRegistro,
  editarRegistro,
}) => {
  return (
    <tr key={productoFinanciero.id}>
      <td>
        <img
          className="logo_producto_financiero"
          src={productoFinanciero.logo}
          width={100}
        />
      </td>
      <td>{productoFinanciero.name}</td>
      <td>{productoFinanciero.description}</td>
      <td>
        {formatDateDisplay(
          new Date(productoFinanciero.date_release).toUTCString()
        )}
      </td>
      <td>
        {formatDateDisplay(
          new Date(productoFinanciero.date_revision).toUTCString()
        )}
      </td>
      <td>
        <div>
          <Popup
            trigger={
              <button>
                <i className="bx bx-dots-vertical-rounded "></i>
              </button>
            }
            position="bottom center"
          >
            <div className="popup_menu">
              <button onClick={() => editarRegistro()}>Editar</button>
              <button onClick={() => eliminarRegistro(productoFinanciero.id)}>
                Eliminar
              </button>
            </div>
          </Popup>
        </div>
      </td>
    </tr>
  );
};

TableDataRow.propTypes = {
  productoFinanciero: PropTypes.shape({
    id: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    date_release: PropTypes.string,
    date_revision: PropTypes.string,
  }),
  eliminarRegistro: PropTypes.func,
  editarRegistro: PropTypes.func,
};

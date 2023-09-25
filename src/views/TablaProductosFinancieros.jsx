import { useEffect, useState } from 'react';
import { useDebounce, useFetchProductosFinancieros } from '../hooks';

import { useNavigate } from 'react-router-dom';

import { deleteProductosFinancieros } from '../api';
import { TableDataRow, TableHeader } from '../components';

export const TablaProductosFinancieros = () => {
  const navigate = useNavigate();
  const [loadData, setLoadData] = useState(true);
  const { productosFinancieros } = useFetchProductosFinancieros(loadData);
  const [productosFinancierosList, setProductosFinancierosList] = useState([]);
  const [filterPerPage, setFilterPerPage] = useState(5);
  const [totalFilteredPages, setTotalFilteredPages] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedValue = useDebounce(searchInputValue, 500);

  /**
   * Maneja el cambio en el valor de búsqueda.
   * @param {Event} event - El evento de cambio de input.
   */

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  useEffect(() => {
    setProductosFinancierosList(productosFinancieros);

    setTotalFilteredPages([]);
    const auxFilteredPages = [];
    for (
      let i = 5;
      i <= Math.ceil(productosFinancieros.length / 5) * 5;
      i = i + 5
    ) {
      auxFilteredPages.push(i);
    }

    setTotalFilteredPages(auxFilteredPages);
    setLoadData(false);
    return () => {};
  }, [productosFinancieros]);

  useEffect(() => {
    if (searchInputValue || filterPerPage) {
      setProductosFinancierosList(
        productosFinancieros
          .filter((productoFinanciero) => {
            return (
              productoFinanciero.name
                .toLowerCase()
                .includes(searchInputValue.toLowerCase()) ||
              productoFinanciero.description
                .toLowerCase()
                .includes(searchInputValue.toLowerCase())
            );
          })
          .slice(0, filterPerPage)
      );
    } else {
      setProductosFinancierosList(productosFinancieros.slice(0, filterPerPage));
    }
  }, [debouncedValue, filterPerPage]);

  /**
   * Navega a la página de formulario de productos financieros.
   */

  const handleNavigateFormulario = () => {
    navigate('/formulario-productos-financieros');
  };

  /**
   * Elimina un registro de productos financieros.
   * @param {number} id - El ID del registro a eliminar.
   */

  const eliminarRegistro = async (id) => {
    const { status } = await deleteProductosFinancieros(id);
    if (status === 200) {
      alert('Registro eliminado satisfactoriamente');
      setLoadData(true);
    } else {
      alert('Ocurrió un problema, intente nuevamente.');
    }
  };

  return (
    <>
      <div id="head_row">
        <input
          type="text"
          className="input"
          id="input_search"
          placeholder="Search..."
          size={20}
          onChange={handleChange}
        />
        <button className="button" onClick={handleNavigateFormulario}>
          Agregar
        </button>
      </div>
      <div id="container__tabla_productos_financieros">
        <table className="tabla_productos_financieros" cellSpacing={0}>
          <TableHeader />
          <tbody>
            {productosFinancierosList
              .slice(0, filterPerPage)
              .map((productoFinanciero) => (
                <TableDataRow
                  productoFinanciero={productoFinanciero}
                  key={productoFinanciero.id}
                  eliminarRegistro={eliminarRegistro}
                  editarRegistro={() =>
                    navigate(`/formulario-productos-financieros`, {
                      state: productoFinanciero,
                    })
                  }
                />
              ))}
          </tbody>
        </table>
        <div id="extra_information">
          <span>
            {productosFinancieros.length}{' '}
            {productosFinancieros.length === 1 ? 'Resultado' : 'Resultados'}
          </span>
          <select
            name=""
            id="select_pagination"
            value={filterPerPage}
            onChange={(valueChanged) => {
              setFilterPerPage(parseInt(valueChanged.target.value));
            }}
          >
            {totalFilteredPages.map((filteredPage, i) => (
              <option value={filteredPage} key={`${filterPerPage}-${i}`}>
                {filteredPage}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

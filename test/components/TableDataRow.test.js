import { render, screen } from '@testing-library/react';
import { TableDataRow } from '../../src/components';

describe('Pruebas en <TableDataRow/>', () => {
  const productoFinanciero = {
    id: 'trj-crd',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    name: 'Tarjetas de Crédito',
    description: 'Tarjeta de consumo bajo la modalidad de crédito',
    date_release: '2023-02-01',
    date_revision: '2024-02-01',
  };
  const eliminarRegistro = () => {};
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(
      <TableDataRow
        productoFinanciero={productoFinanciero}
        eliminarRegistro={eliminarRegistro}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el URL', () => {
    render(
      <TableDataRow
        productoFinanciero={productoFinanciero}
        eliminarRegistro={eliminarRegistro}
      />
    );

    expect(screen.getByRole('img').src).toBe(productoFinanciero.logo);
  });
});

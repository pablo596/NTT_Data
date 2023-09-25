import { fireEvent, render, screen } from '@testing-library/react';
import { FormularioProductoFinanciero } from '../../src/views';

describe('Pruebas en <FormularioProductoFinanciero/>', () => {
  test('Debe de registrar los datos del formulario si el formulario es válido', () => {
    const id = 'trj-crd';
    const name = 'Tarjetas de Crédito';
    const description = 'Tarjeta de consumo bajo la modalidad de crédito';
    const logo =
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg';
    const date_release = '2023-02-01';
    const date_revision = '2024-02-01';

    render(<FormularioProductoFinanciero />);

    const idInput = screen.getByLabelText('ID');
    const nameInput = screen.getByLabelText('Nombre');
    const descriptionInput = screen.getByLabelText('Descripción');
    const logoInput = screen.getByLabelText('Logo');
    const date_releaseInput = screen.getByLabelText('Fecha de Liberación');
    const date_revisionInput = screen.getByLabelText('Fecha de Revisión');

    const formInput = screen.getByRole('form');

    fireEvent.input(idInput, { target: { value: id } });
    fireEvent.input(nameInput, { target: { value: name } });
    fireEvent.input(descriptionInput, { target: { value: description } });
    fireEvent.input(logoInput, { target: { value: logo } });
    fireEvent.input(date_releaseInput, { target: { value: date_release } });
    fireEvent.input(date_revisionInput, { target: { value: date_revision } });

    fireEvent.submit(formInput);
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {};
  });
});

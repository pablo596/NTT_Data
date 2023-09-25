import { useState } from 'react';
import { useForm } from '../hooks';

import { addOneYear, formatDate } from '../helpers';
import { postProductosFinancieros, putProductosFinancieros } from '../api';
import PropTypes from 'prop-types';
import { TextField } from '../components';

const formData = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: addOneYear(new Date()),
};

const formValidations = {
  id: [
    (value) =>
      value.length >= 3 && value.length <= 10 && value !== null && value !== '',
    'El ID es inválido',
  ],
  name: [
    // (value: string) => isEmpty,
    (value) =>
      value.length >= 5 &&
      value.length <= 100 &&
      value !== null &&
      value !== '',
    'Este campo es requerido!',
  ],
  description: [
    (value) =>
      value.length >= 10 &&
      value.length <= 200 &&
      value !== null &&
      value !== '',
    'Este campo es requerido!',
  ],
  logo: [
    (value) => value.length >= 0 && value !== null && value !== '',
    'Este campo es requerido!',
  ],
  date_release: [
    (value) =>
      value.toString().length >= 0 &&
      value.toString() !== null &&
      value.toString() !== '',
    'Este campo es requerido!',
  ],
  date_revision: [
    (value) =>
      value.toString().length >= 0 &&
      value.toString() !== null &&
      value.toString() !== '',
    'Este campo es requerido!',
  ],
};

/**
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.state - Estado inicial del formulario (para edición).
 * @param {Function} props.navigate - Función de navegación para redirigir a otras páginas.
 * @returns {JSX.Element} El elemento de React que representa el formulario de productos financieros.
 */

// eslint-disable-next-line react/prop-types
export const FormularioProductoFinanciero = ({ state, navigate }) => {
  const {
    formState,
    id,
    name,
    description,
    logo,
    date_release,
    date_revision,
    idValid,
    nameValid,
    descriptionValid,
    logoValid,
    date_releaseValid,
    date_revisionValid,
    onInputChange,
    isFormValid,
    onResetForm,
  } = useForm(state ? state : formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [valuesForForm, setValuesForForm] = useState({
    id: id,
    name: name,
    description: description,
    logo: logo,
    date_release: date_release,
    date_revision: date_revision,
  });

  /**
   * Maneja el envío del formulario.
   * @param {Event} event - El evento de envío del formulario.
   */
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('es 1');
    setFormSubmitted(true);
    console.log('es 2');
    if (!isFormValid) return;
    console.log('es 3');
    if (state?.id) {
      console.log('es 4');
      actualizarRegistro();
    } else {
      enviarRegistro();
      console.log('es 5');
    }
  };

  /**
   * Actualiza un registro de productos financieros.
   */
  const actualizarRegistro = async () => {
    const { status } = await putProductosFinancieros({
      id,
      name,
      description,
      logo,
      date_release: formatDate(valuesForForm.date_release.toUTCString()),
      date_revision: formatDate(valuesForForm.date_revision.toUTCString()),
    });
    if (status === 200) {
      alert('Registro actualizado satisfactoriamente.');
      navigate(-1);
    } else {
      alert('Ocurrió un proble, intente nuevamente.');
    }
  };
  const enviarRegistro = async () => {
    console.log('llega aqui?');
    const { status } = await postProductosFinancieros({
      id,
      name,
      description,
      logo,
      date_release: formatDate(valuesForForm.date_release.toUTCString()),
      date_revision: formatDate(valuesForForm.date_revision.toUTCString()),
    });
    console.log('status', status);
    if (status === 200) {
      alert('Registro Satisfactorio.');
      console.log('llega aqui?');
      navigate(-1);
    } else {
      alert('Ocurrió un proble, intente nuevamente.');
    }
  };
  const onReset = (event) => {
    event.preventDefault();
    onResetForm();
    setFormSubmitted(false);
  };

  const handleChangeDate = (event) => {
    const newDateRelease = new Date(event.target.value);
    const newDateRevision = addOneYear(new Date(event.target.value));

    setValuesForForm({
      ...valuesForForm,
      date_release: newDateRelease,
      date_revision: newDateRevision,
    });
  };

  return (
    <div id="container__formulario">
      <h2>Formulario de Registro</h2>
      <hr />
      <form onSubmit={onSubmit} onReset={onReset} aria-label="form">
        <div id="formulario" className="columns">
          <TextField
            label="ID"
            placeholder=""
            name="id"
            value={formState?.id || state?.id}
            disabled={state?.id ? true : false}
            onChange={onInputChange}
            type="text"
            error={!!idValid && formSubmitted}
            helperText={idValid}
          />

          <TextField
            label="Nombre"
            placeholder=""
            name="name"
            value={formState?.name || state?.name}
            onChange={onInputChange}
            type="text"
            error={!!nameValid && formSubmitted}
            helperText={nameValid}
          />
          <TextField
            label="Descripción"
            placeholder=""
            name="description"
            value={formState?.description || state?.description}
            onChange={onInputChange}
            type="text"
            error={!!descriptionValid && formSubmitted}
            helperText={descriptionValid}
          />

          <TextField
            label="Logo"
            placeholder=""
            name="logo"
            value={formState?.logo || state?.logo}
            onChange={onInputChange}
            type="text"
            error={!!logoValid && formSubmitted}
            helperText={logoValid}
          />
          <TextField
            label="Fecha de Liberación"
            placeholder=""
            value={formatDate(valuesForForm.date_release)}
            name="date_release"
            minimun={formatDate(new Date().toUTCString())}
            onChange={handleChangeDate}
            type="date"
            error={!!date_releaseValid && formSubmitted}
            helperText={date_releaseValid}
          />
          <TextField
            label="Fecha de Revisión"
            placeholder=""
            value={formatDate(valuesForForm.date_revision)}
            name="date_revision"
            onChange={onInputChange}
            type="date"
            error={!!date_revisionValid && formSubmitted}
            helperText={date_releaseValid}
            disabled
          />
        </div>
        <div id="formulario-buttons">
          <button className="button secondary-button" type="reset">
            Reiniciar
          </button>
          <button
            className="button"
            type="submit"
            disabled={formSubmitted && !isFormValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

FormularioProductoFinanciero.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    date_release: PropTypes.string,
    date_revision: PropTypes.string,
  }),
  navigate: PropTypes.any,
};

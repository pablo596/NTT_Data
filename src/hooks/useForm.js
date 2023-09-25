import { useEffect, useMemo, useState } from 'react';

/**
 * Hook personalizado que facilita la gestión del estado de un formulario, las validaciones y la validación general del formulario.
 * @param {Object} initialForm - Un objeto que representa el estado inicial del formulario.
 * @param {Object} formValidations - Un objeto que contiene validadores para cada campo del formulario.
 * @returns {Object} Un objeto que contiene el estado del formulario, funciones para actualizarlo, validaciones y un indicador de validez del formulario.
 */
export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  /**
   * Función para crear y actualizar las validaciones del formulario en función del estado actual.
   */
  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  useEffect(() => {
    createValidators();
  }, [formState]);
  /**
   * Función para determinar si el formulario en su conjunto es válido.
   */
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  /**
   * Función para manejar el cambio en los campos del formulario.
   * @param {Event} event - El evento de cambio del campo de formulario.
   */
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /**
   * Función para reiniciar el formulario al estado inicial.
   */
  const onResetForm = () => {
    setFormState(initialForm);
  };

  // Devuelve un objeto que contiene el estado del formulario, funciones para actualizarlo, validaciones y el indicador de validez del formulario.
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};

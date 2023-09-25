import { useEffect, useState } from 'react';
/**
 * Hook personalizado que aplica un retraso (debounce) a un valor proporcionado antes de actualizarlo.
 * Útil para reducir la frecuencia de actualización en tiempo real en respuesta a cambios rápidos en un valor.
 * @param {any} value - El valor que se desea aplicar el debounce.
 * @param {number} delay - El tiempo en milisegundos que se debe esperar antes de aplicar el valor.
 * @returns {any} El valor debounced, que se actualiza después de que haya pasado el tiempo de retraso.
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Configuración de un temporizador para actualizar el valor después del retraso
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    // Limpiar el temporizador si el valor o el retraso cambian antes de que se active
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Logo</th>
        <th>Nombre</th>
        <th>
          Descripción <i className="bx bxs-info-circle bx-flip-horizontal"></i>
        </th>
        <th>
          Fecha de liberación{' '}
          <i className="bx bxs-info-circle bx-flip-horizontal"></i>
        </th>
        <th>
          Fecha de reestructuración{' '}
          <i className="bx bxs-info-circle bx-flip-horizontal"></i>
        </th>
        <th></th>
      </tr>
    </thead>
  );
};

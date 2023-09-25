import PropTypes from 'prop-types';

export const TextField = ({
  label,
  placeholder,
  type,
  name,
  error,
  helperText,
  disabled,
  value,
  minimun,
  onChange,
}) => {
  return (
    <div className="textfield">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={onChange}
        className={`input input-form ${error ? 'error-message' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        min={minimun}
        lang="en-GB"
      />
      {error ? (
        <span className={`${error ? 'error-message' : ''}`}>{helperText}</span>
      ) : null}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  minimun: PropTypes.string,
  onChange: PropTypes.func,
};

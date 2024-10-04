import { useFormikContext } from 'formik';

const SelectTitleField = ({ name, placeholder, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } = useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <div className="col-span-1">
      <select
        value={value}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        placeholder={placeholder}
        className="contact-input leftRight"
        style={{ border: error && isInputTouched ? '1px dashed #fd9d9d' : '1px dashed #ffffff' }}
        {...rest}
      >
        <option value="">Select title</option>
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
        <option value="Mrs">Mrs</option>
        <option value="Ms">Ms</option>
        <option value="Dr">Dr</option>
        <option value="Engr">Engr</option>
      </select>
      {error && isInputTouched ? (
        <div className="mt-1 text-red-300 text-[13px] font-600 lowercase">{error}</div>
      ) : null}
    </div>
  );
};

export default SelectTitleField;

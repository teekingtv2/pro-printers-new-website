import { useFormikContext } from 'formik';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const InputField = ({ name, placeholder, type = 'text', className, disabled = false, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } = useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="col-span-1">
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          className="contact-input leftRight"
          style={{
            border: error && isInputTouched ? '1px dashed #fd9d9d' : '1px dashed #ffffff',
            height: '150px',
          }}
          autoComplete="off"
          placeholder={placeholder}
          {...rest}
        ></textarea>
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          type={type}
          disabled={disabled}
          className="contact-input leftRight"
          style={{
            border: error && isInputTouched ? '1px dashed #fd9d9d' : '1px dashed #ffffff',
          }}
          autoComplete="off"
          {...rest}
        />
      )}
      {error && isInputTouched ? (
        <div className="mt-1 text-red-300 text-[13px] font-600 lowercase">{error}</div>
      ) : null}
    </div>
  );
};

export default InputField;

import React from "react";
interface InputProps {
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "email" | "password" | "tel" | "url" | "search";
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    name?: string;
    label?: string;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    autoFocus?: boolean;
    max?: number;
    min?: number;
    step?: number;
    isError?: boolean;
    errorMessage?: string;
    [key: string]: any;
  }
const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  placeholder,
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  name,
  label,
  style,
  className,
  id,
  prefix,
  suffix,
  autoFocus = false,
  max,
  min,
  step,
  isError = false,
  errorMessage,
  ...props
}) => {
  return (
    <div className={`input-wrapper ${className}`} style={style}>
      {label && <label htmlFor={id} className="input-label">{label}</label>}
      <div className="input-container flex items-center border rounded-md">
        {prefix && <span className="input-prefix px-2">{prefix}</span>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          autoFocus={autoFocus}
          max={max}
          min={min}
          step={step}
          className={`input-field flex-1 ${
            isError ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
        {suffix && <span className="input-suffix px-2">{suffix}</span>}
      </div>
      {isError && errorMessage && (
        <span className="input-error text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;

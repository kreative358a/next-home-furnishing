// 'use client';
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  size: string;
  value: string;
  inputValue?: string;
  // onChange: React.ChangeEvent<HTMLInputElement>;
  // onChange?: (e: any) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  placeholder?: string;
};

const FormInputHF = ({
  label,
  name,
  type,
  size,
  placeholder,
  onChange,
  value,
}: // ref,
FormInputProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="text-base sm:text-lg capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        // defaultValue={defaultValue || ""}
        placeholder={placeholder || ""}
        className={`input input-bordered ${size} focus:border-none focus:outline-none box-shadow-around-sm-blue bg-blue-700 text-yellow-100`}
        onChange={onChange}
        value={value || ""}
        // onChange={useState(defaultValue)}
        // ref={ref || null}
      />
    </div>
  );
};
export default FormInputHF;

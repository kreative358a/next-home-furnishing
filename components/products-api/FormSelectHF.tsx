type FormSelectHFProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  list: string[] | number[];
  size: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FormSelectHF = ({
  label,
  name,
  list,
  size,
  onChange,
  value,
}: // ref,
FormSelectHFProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="text-base sm:text-lg capitalize">{label}</span>
      </label>

      <select
        name={name}
        id={name}
        className={`select select-bordered ${size} focus:border-none focus:outline-none box-shadow-around-sm-blue bg-blue-700 text-yellow-100`}
        // defaultValue={defaultValue}
        value={value}
        // onChange={useState(defaultValue)}
        onChange={onChange}
        // ref={ref}
      >
        {list.map((item, index) => {
          return (
            <option
              key={index}
              value={item}
              className="bg-blue-700 text-yellow-100"
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelectHF;

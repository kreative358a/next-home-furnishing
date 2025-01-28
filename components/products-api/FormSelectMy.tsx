type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  list: string[] | number[];
  size: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FormSelect = ({
  label,
  name,
  list,
  size,
  value,
  onChange,
}: SelectInputProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="text-base sm:text-lg capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size} focus:border-none focus:outline-none box-shadow-around-sm-blue  bg-blue-700 text-yellow-100`}
        value={value}
        onChange={onChange}
        // defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option
              key={item}
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
export default FormSelect;

// const FormSelect = ({
//   label,
//   name,
//   list,
//   defaultValue,
//   size,
//   value,
//   onChange,
// }) => {
//   return (
//     <div className="form-control">
//       <label htmlFor={name} className="label">
//         <span className="text-base sm:text-lg capitalize">{label}</span>
//       </label>
//       <select
//         name={name}
//         id={name}
//         className={`select select-bordered ${size} focus:border-none focus:outline-none box-shadow-around-sm-blue`}
//         value={value}
//         onChange={onChange}
//         // defaultValue={defaultValue}
//       >
//         {list.map((item) => {
//           return (
//             <option key={item} value={item.replace(" ", "-")}>
//               {item}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };
// export default FormSelect;

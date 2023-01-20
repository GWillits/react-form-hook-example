import { DynamicFieldData } from "@/types/dynamic-form-types";
import { useFormContext } from "react-hook-form";


const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {}
}: DynamicFieldData) => {
  const { register } = useFormContext();
  switch (inputType) {
    case "text":
      return (
        <input
          type="text"
          id={fieldName}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "select": {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case "number":
      return (
        <input
          type="number"
          id={fieldName}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    default:
      return <input type="text" />;
  }
};

export default DynamicControl
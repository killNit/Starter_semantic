import { useState } from "react";

export const useFormInput = (initialValue, name) => {
  const [value, setValue] = useState(initialValue);
  return {
    label: name,
    required: "required",
    placeholder:`Enter ${name}`,
    onChange: (e) => setValue(e.target.value),
    value: value,
  };
};

export default useFormInput;
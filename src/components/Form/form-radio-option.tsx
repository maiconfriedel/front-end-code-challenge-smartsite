import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormRadioOptionProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  value: string;
  label: string;
}

export function FormRadioOption({ name, value, label }: FormRadioOptionProps) {
  const { register } = useFormContext();

  return (
    <div className="mb-2">
      <input type="radio" value={value} {...register(name)} />
      <label className="ml-2" htmlFor="morning">
        {label}
      </label>
    </div>
  );
}

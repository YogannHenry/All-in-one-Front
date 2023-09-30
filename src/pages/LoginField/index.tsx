import { ChangeEvent, useId, useState } from 'react';

interface FieldProps {
  name: string;
  placeholder: string;
  [prop: string]: unknown;
}

/*
  On a besoin
    - un name pour identifier le champ
    - un placeholder pour l'animation / label

  on a pas besoin
    - value on le gère ici → useState
    - onChange (idem)

  on ne s'occupe pas
    - des autres props, on les déverse
*/

function Field({ name, placeholder, ...props }: FieldProps) {
  const [value, setValue] = useState('');

  const inputId = useId();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="form-control">
      <label htmlFor={inputId} className="label " >
        <span className="label-text">{placeholder}</span>
      </label>
      <input
        name={name}
        value={value}
        id={inputId}
        onChange={handleChange}
        placeholder={placeholder}
        className="input input-bordered "
        {...props}
      />
    </div>
  );
}

export default Field;

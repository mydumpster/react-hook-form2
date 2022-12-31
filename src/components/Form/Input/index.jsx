export const Input = ({ id, label, type, register, placeholder, disabled }) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} disabled={disabled} />
    </fieldset>
  );
};

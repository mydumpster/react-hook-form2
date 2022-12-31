export const Input = ({ id, label, type, register, placeholder }) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </fieldset>
  );
};

import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  
  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        type="text"
        label="Nome: "
        placeholder="Digite o seu nome"
        register={register("name")}
      />
      <Input
        id="email"
        type="email"
        label="Email: "
        placeholder="Digite o seu e-mail"
        register={register("email")}
      />
      <Input
        id="password"
        type="password"
        label="Senha: "
        placeholder="Crie a sua senha"
        register={register("password")}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

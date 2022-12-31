import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

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
      {errors.name && <p>{errors.name.message}</p>}

      <Input
        id="email"
        type="email"
        label="Email: "
        placeholder="Digite o seu e-mail"
        register={register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Input
        id="password"
        type="password"
        label="Senha: "
        placeholder="Crie a sua senha"
        register={register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Cadastrar</button>
    </form>
  );
};

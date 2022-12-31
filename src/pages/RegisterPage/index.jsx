import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../api";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    // para setar valores padrão:
    //
    // defaultValues: {
    //   name: "Batatinha",
    //   email: "",
    //   password: "",
    // },
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      // console.log("response ", response);
      toast.success(response.statusText);
    } catch (error) {
      // console.log("error ", error);
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    const { passwordConfirmation, ...rest } = data;
    await userRegister(rest);
    reset();
    // para resetar com valores específicos:
    //
    // reset({
    //   name: "Batatinha",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        type="text"
        label="Nome: "
        placeholder="Digite o seu nome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <Input
        id="email"
        type="email"
        label="Email: "
        placeholder="Digite o seu e-mail"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Input
        id="password"
        type="password"
        label="Senha: "
        placeholder="Crie a sua senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <Input
        id="passwordConfirmation"
        type="password"
        label="Confirme a senha: "
        placeholder="Confirme a sua senha"
        register={register("passwordConfirmation")}
        disabled={loading}
      />
      {errors.passwordConfirmation && (
        <p>{errors.passwordConfirmation.message}</p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};

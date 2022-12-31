import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório').min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: yup.string().required('O email é obrigatório').email('Digite um email válido'),
    password: yup.string().required('A senha é obrigatória').min(8, "A senha deve ter no mínimo 8 caracteres")
});
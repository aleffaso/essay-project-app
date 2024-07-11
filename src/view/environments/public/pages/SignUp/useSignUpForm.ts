import { useFormWithZod } from '@hooks/useFormWithZod';
import { z } from 'zod';

const schema = () =>
  z.object({
    firstName: z
      .string({
        required_error: 'O primeiro nome é obrigatório',
        invalid_type_error: 'Caracter inválido'
      })
      .min(1, 'O nome é obrigatório'),
    lastName: z
      .string({
        required_error: 'O sobrenome nome é obrigatório',
        invalid_type_error: 'Caracter inválido'
      })
      .min(1, 'O sobrenome é obrigatório'),
    isActive: z.boolean().nullish().optional(),
    permissions: z.array(z.string()).nullish().optional(),
    email: z
      .string({
        required_error: 'O e-mail é obrigatório',
        invalid_type_error: 'Caracter inválido'
      })
      .trim()
      .email({ message: 'E-mail inválido' })
      .min(1, 'O e-mail é obrigatório'),
    password: z
      .string({
        required_error: 'A senha é obrigatória',
        invalid_type_error: 'Caracter inválido'
      })
      .min(1, 'A senha é obrigatória')
  });

export type SignUpFormModel = z.infer<ReturnType<typeof schema>>;

export const useSignUpForm = () => {
  const signUpSchema = schema();
  const { form, rule } = useFormWithZod(signUpSchema);
  return {
    form,
    rule
  };
};

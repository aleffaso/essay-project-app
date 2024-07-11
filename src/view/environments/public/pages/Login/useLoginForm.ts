import { useFormWithZod } from '@hooks/useFormWithZod';
import { z } from 'zod';

const schema = () =>
  z.object({
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

export type LoginFormModel = z.infer<ReturnType<typeof schema>>;

export const useLoginForm = () => {
  const loginSchema = schema();
  const { form, rule } = useFormWithZod(loginSchema);
  return {
    form,
    rule
  };
};

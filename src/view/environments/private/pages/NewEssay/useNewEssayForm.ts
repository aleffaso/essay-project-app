import { useFormWithZod } from '@hooks/useFormWithZod';
import { z } from 'zod';

const schema = () =>
  z.object({
    specification: z
      .string({
        required_error: 'A especificação é obrigatória',
        invalid_type_error: 'Caracter inválido'
      })
      .min(1, 'A especificação é obrigatória'),
    title: z
      .string({
        required_error: 'O título é obrigatório',
        invalid_type_error: 'Caracter inválido'
      })
      .min(1, 'O título é obrigatório'),
    text: z.string().nullish().optional(),
    uploadedLink: z.string().nullish().optional(),
    tag: z.string().nullish().optional(),
    status: z.string().nullish().optional(),
    updatesCount: z.number().nullish().optional(),
    updates: z.object({
      annotations: z.string().nullish().optional(),
      corrections: z.string().nullish().optional(),
      comments: z.string().nullish().optional(),
      grade: z.number().nullish().optional()
    }),
    author: z.object({
      id: z.string().nullish().optional(),
      firstName: z.string().nullish().optional(),
      lastName: z.string().nullish().optional(),
      email: z.string().nullish().optional(),
      isActive: z.boolean().nullish().optional()
    })
  });

export type EssayFormModel = z.infer<ReturnType<typeof schema>>;

export const useEssayForm = () => {
  const essaySchema = schema();
  const { form, rule } = useFormWithZod(essaySchema);
  return {
    form,
    rule
  };
};

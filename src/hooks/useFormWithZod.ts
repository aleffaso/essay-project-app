import { Form, FormInstance } from 'antd';
import { Rule } from 'antd/lib/form';
import { z } from 'zod';
type UseValidationSchema<T> = z.Schema<T>;

export const useFormWithZod = <T>(
  schema: UseValidationSchema<T>
): { form: FormInstance<T>; rule: Rule } => {
  const [form] = Form.useForm();

  const rule = {
    async validator(rule: any) {
      const fields = form.getFieldsValue();
      const result = await schema.safeParseAsync(fields);
      if (result.success) return;

      const rawIssues = result.error.issues;
      const issues = rawIssues.filter((issue) => issue.path.join('.') === rule.field);
      const message = issues[0]?.message;

      if (message) throw new Error(message);
    }
  };
  return { form, rule };
};

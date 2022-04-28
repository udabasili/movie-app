import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { ZodType, ZodTypeDef } from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import styles from './form.module.css'

type FormProps<Values, Schema> = {
  initialValues: Values;
  children: React.ReactNode;
  schema: Schema;
  onSubmit: (values: Values) => void;
};
export const CustomForm =<Values, Schema extends ZodType<unknown, ZodTypeDef, unknown>>(props: FormProps<Values, Schema>) => {
  const { initialValues, schema, children, onSubmit} = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        onSubmit(values)
      }}
    >
      <Form className={styles.formContainer}>
        {children}
       
      </Form>
    </Formik>
  );
};

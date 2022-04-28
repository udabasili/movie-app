import React, { ChangeEvent } from "react";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField/TextField";
import { ErrorMessage, Field } from "formik";
import styles from './input.module.css';

type CustomInputProps = {
  label: string;
  variant: "standard" | "outlined" | "filled";
  id: string;
  name: string;
  type: "text" | "number";
} & Partial<HTMLInputElement>;
export const CustomInput = (props: CustomInputProps) => {
	
 	const { label, variant, id, name,  type, ...otherProps} = props;
	return (
		<div className={styles.formGroup}>
			<label htmlFor={name} className={styles.label} >{label}</label>
			<Field name={name} type={type} className={styles.input} {...otherProps}/>
			<ErrorMessage name={name} className={styles.errorMessage} />
		</div>
	);
};

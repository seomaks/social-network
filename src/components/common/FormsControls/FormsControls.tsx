import classes from "./FormsControls.module.css";
import React from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched,error},children}) => {
  const hasError = touched && error
  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : " ")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props
  return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}



// import classes from "./FormsControls.module.css";
//
// const FormControl = ({input, meta, child, ...props}: any) => {
//   const hasError = meta.touched && meta.error
//   return (
//     <div className={classes.formControl + " " + (hasError ? classes.error : " ")}>
//       <div>
//         {props.children}
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }
//
// export const Textarea = (props: any) => {
//   const {input, meta, child, ...restProps} = props
//   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }
//
// export const Input = (props: any) => {
//   const {input, meta, child, ...restProps} = props
//   return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }
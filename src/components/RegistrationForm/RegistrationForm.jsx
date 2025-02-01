//Sign Up Page 2 Розробник 2: Сторінки Автентифікації
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';
//вставить иконки
//import { ReactComponent as OpenEyeIcon } from '../../images/icons/eye-slash.svg';
//import { ReactComponent as ClosedEyeIcon } from '../../images/icons/eye.svg';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const RegistrationFormSchema = Yup.object({
    email: Yup.string()
      .required('Email is required.')
      .min(8, 'Too short!')
      .max(64, 'Too long!'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Too short!')
      .max(64, 'Too long!'),
    repeatPassword: Yup.string()
      .required('Repeat password is required.')
      .min(8, 'Too short!')
      .max(64, 'Too long!'),
  });

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.formTitle}>Sign Up</h2>
        <div className={css.formFrame}>
          <label className={css.fieldTitle}>Enter your email</label>
          <Field name="email" className={css.formField} placeholder="E-mail" />
        </div>
        <ErrorMessage
          name="email"
          component="span"
          className={css.errorMessage}
        />
        <div className={css.formFrame}>
          <label className={css.fieldTitle}>Enter your password</label>
          <Field
            name="password"
            className={css.formField}
            placeholder="Password"
          />
        </div>
        <ErrorMessage
          name="password"
          component="span"
          className={css.errorMessage}
        />
        <div className={css.formFrame}>
          <label className={css.fieldTitle}>Repeat password</label>
          <Field
            name="repeatPassword"
            type="password"
            className={css.formField}
            placeholder="Repeat password"
          />
        </div>
        <ErrorMessage
          name="repeatPassword"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.registerBtn}>
          <p className={css.registerBtnText}>Sign Up</p>
        </button>
        <p className={css.text}>
          <Link to="/login" className={css.link}>
            Sign in
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

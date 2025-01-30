import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    name: '',
    password: '',
  };

  const RegistrationFormSchema = Yup.object({
    email: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    password: Yup.string()
      .required('This field is required!')
      .min(8, 'Too short!')
      .max(50, 'Too long!'),
  });

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
      >
        <Form className={css.form}>
          <h2 className={css.formTitle}>Register</h2>
          <label className={css.fieldTitle}>Name</label>
          <Field
            name="name"
            className={css.formField}
            placeholder="Enter your name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
          <label className={css.fieldTitle}>Email</label>
          <Field
            name="email"
            className={css.formField}
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMessage}
          />
          <label className={css.fieldTitle}>Password</label>
          <Field
            name="password"
            type="password"
            className={css.formField}
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorMessage}
          />
          <button type="submit" className={css.registerBtn}>
            Register
          </button>
          <p className={css.text}>
            You already have account?
            <Link to="/login" className={css.link}>
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

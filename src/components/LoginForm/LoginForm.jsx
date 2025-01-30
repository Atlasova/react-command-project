import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './LoginForm.module.css';
import * as Yup from 'yup';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginFormSchema = Yup.object({
    email: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
    password: Yup.string()
      .required('This field is required!')
      .min(3, 'Too short!')
      .max(50, 'Too long!'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        <Form className={css.form}>
          <h2 className={css.formTitle}>Login</h2>
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
          <button type="submit" className={css.loginBtn}>
            Login
          </button>
          <p className={css.text}>
            You don`t have account?
            <Link to="/register" className={css.link}>
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

//Sign In Page 3 Розробник 3: Процес Входу
//import { useDispatch, useSelector } from 'react-redux';
//import { logIn } from '../../redux/auth/operations';
//import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ReactComponent as OpenEyeIcon } from '../../images/icons/eye-slash.svg';
import { ReactComponent as ClosedEyeIcon } from '../../images/icons/eye.svg';
import css from './AuthForm.module.css';

const AuthForm = ({ formTitle, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    ...(formTitle === 'Register' && { repeatPassword: '' }),
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than 64 characters'),
    ...(formTitle === 'Register' && {
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Repeat password is required'),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h1 className={css.formTitle}>{formTitle}</h1>
          <div className={css.formControl}>
            <div className={css.stack}>
              <label className={css.formLabel} htmlFor="unique-id1">
                Email
              </label>
              <Field
                id="unique-id1"
                className={`${css.input} ${
                  errors.email && touched.email ? css.errorBorder : ''
                } ${errors.email && touched.email ? css.errorInput : ''}`}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errormessage}
              />
            </div>

            <div className={css.stack}>
              <label className={css.formLabel} htmlFor="unique-id2">
                Password
              </label>
              <div
                className={`${css.inputBox} ${
                  errors.password && touched.password ? css.errorBorder : ''
                }`}
              >
                <Field
                  id="unique-id2"
                  className={`${css.inputpassword} ${
                    errors.password && touched.password ? css.errorInput : ''
                  }`}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                />
                <div
                  className={css.iconeye}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    cursor: 'pointer',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                >
                  {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                </div>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css.errormessage}
              />
            </div>

            {formTitle === 'Register' && (
              <div className={css.stack}>
                <label className={css.formLabel} htmlFor="unique-id3">
                  Repeat Password
                </label>
                <div
                  className={`${css.inputBoxRep} ${
                    errors.repeatPassword && touched.repeatPassword
                      ? css.errorBorder
                      : ''
                  }`}
                >
                  <Field
                    id="unique-id3"
                    className={`${css.inputpassword} ${
                      errors.repeatPassword && touched.repeatPassword
                        ? css.errorInput
                        : ''
                    }`}
                    name="repeatPassword"
                    type={showRepPassword ? 'text' : 'password'}
                    placeholder="Repeat your password"
                  />
                  <div
                    className={css.iconeye}
                    onClick={() => setShowRepPassword(!showRepPassword)}
                    style={{
                      cursor: 'pointer',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                  >
                    {showRepPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                  </div>
                </div>
                <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className={css.errormessage}
                />
              </div>
            )}

            <button className={css.button} type="submit">
              {formTitle === 'Login' ? 'Login' : 'Register'}
            </button>

            <div className={css.wraplink}>
              {formTitle === 'Login' ? (
                <>
                  <Link to="/signup" className={css.signup}>
                    <p className={css.signupText}>Register</p>
                  </Link>
                  <Link to="/forgot-password" className={css.forgotPassword}>
                    <p className={css.signupText}>Forgot password?</p>
                  </Link>
                </>
              ) : (
                <Link to="/signin" className={css.signin}>
                  <p className={css.signinText}>Login</p>
                </Link>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;

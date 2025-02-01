import AuthForm from '../../components/AuthForm/AuthForm';
//import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './AuthPage.module.css';

const RegistrationPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.mainstr}>
          <AuthForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;

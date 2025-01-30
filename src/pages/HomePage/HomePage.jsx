import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>
        Hello! Welcome to your personal Contact Book!
      </h1>
      <p className={css.subtitle}>
        This contact book is designed to help you keep track of your personal
        and professional connections. It is a place to store important details
        and organize your contacts.
      </p>
      <p className={css.subtitle}>To get started, Register or Log in...</p>
    </>
  );
};

export default HomePage;

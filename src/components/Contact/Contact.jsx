import { useDispatch } from 'react-redux';
import { FaSquarePhone, FaUserLarge } from 'react-icons/fa6';
import css from './Contact.module.css';
import { deleteContacts } from '../../redux/contacts/operations';
import { toast, Toaster } from 'react-hot-toast';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContacts(id));
      toast.success(`Contact ${name} deleted successfully!`);
    } catch (e) {
      console.log(e.message);
      toast.error('Failed to delete contact. Please try again.');
    }
  };

  return (
    <div className={css.contentContainer}>
      <div className={css.content}>
        <p className={css.contactName}>
          <span className={css.userIcon}>
            <FaUserLarge size={16} />
          </span>
          {name}
        </p>
        <p className={css.contactPhone}>
          <span className={css.userIcon}>
            <FaSquarePhone size={16} />
          </span>
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
      <Toaster position="top-center" />
    </div>
  );
};

export default Contact;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.name}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          {contact.name}
        </div>
        <div className={styles.number}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          {contact.number}
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)} className={styles.button}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;

import styles from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ filter, handleSearch }) => {
  return (
    <>
      <p className={styles.desc}>Find contact by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleSearch}
        className={styles.input}
      />
    </>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBox;

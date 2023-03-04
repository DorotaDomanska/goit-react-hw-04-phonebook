import { ContactListItem } from './ContactListItem';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ myFilteredContacts, onDelete }) => (
  <ul className={css.list}>
    <ContactListItem
      myFilteredContacts={myFilteredContacts}
      onDelete={onDelete}
    />
  </ul>
);

ContactListItem.propTypes = {
  myFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

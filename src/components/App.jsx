import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = (name, number) => {
    const id = nanoid();
    setContacts(contacts.concat({ name, number, id }));
  };

  const handleDelete = contactId => {
    const currentContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(currentContacts);
  };

  const handleInput = text => {
    setFilter(text);
  };

  useEffect(() => {
    const list = localStorage.getItem('contacts-list');
    if (!list) return;

    try {
      setContacts(JSON.parse(list));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const contactsListStringified = JSON.stringify(contacts);
    localStorage.setItem('contacts-list', contactsListStringified);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        padding: '0px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm myContacts={contacts} onFormSubmit={handleSubmit} />
      <h2 className={css.header}>Contacts</h2>
      <Filter onFilter={handleInput} />
      <ContactList
        myFilteredContacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
};

ContactForm.propTypes = {
  myContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  myFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

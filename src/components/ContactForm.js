import { useState } from 'react';
import css from './Phonebook.module.css';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { myContacts, onFormSubmit } = props;

  const handleChange = evt => {
    const { name } = evt.target;
    if (name === 'name') {
      setName(evt.target.value);
    }
    if (name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const onButtonSubmit = evt => {
    evt.preventDefault();

    const sameName = myContacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
    sameName
      ? alert(`${name} is already in contacts.`)
      : onFormSubmit(name, number);
  };

  return (
    <form className={css.form} onSubmit={onButtonSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

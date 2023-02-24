import css from './Phonebook.module.css';

export const ContactListItem = props => {
  const { onDelete, myFilteredContacts } = props;

  const handleDelete = evt => {
    const contactId = evt.target.id;

    onDelete(contactId);
  };

  return (
    <div>
      {myFilteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button id={id} className={css.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

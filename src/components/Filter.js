import css from './Phonebook.module.css';

export const Filter = props => {
  const handleInputChange = evt => {
    const text = evt.target.value;
    const { onFilter } = props;

    onFilter(text);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" name="filter" onInput={handleInputChange}></input>
    </label>
  );
};

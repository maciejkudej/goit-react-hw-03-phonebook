import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ filter }) => {
  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filter}
      />
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
export default Filter;

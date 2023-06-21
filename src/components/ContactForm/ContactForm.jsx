import React, { Component } from 'react';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeForm = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addContacts(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.container}>
        <form onSubmit={this.submitForm}>
          <p className={css.title}>Name</p>
          <input
            className={css.input}
            placeholder="Jacob Mercer"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeForm}
            value={this.state.name}
          />
          <p className={css.title}>Number</p>
          <input
            className={css.input}
            placeholder=" 227-91-26"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.changeForm}
            value={this.state.number}
          />
          <button type="submit" className={css.button__submit}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;

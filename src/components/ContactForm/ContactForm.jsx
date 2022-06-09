import { Component } from 'react'
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  handleChange = (e) => {
    const {name, value} = e.currentTarget
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.reset()
  }
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
  render() {
    const {name, number} = this.state;
    return (
    <>
        <form className={s.form} autoComplete="off" onSubmit={this.handleSubmit}>
          <label className={s.field} htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.field} htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
          <button className={s.btnForm} type="submit">Add contact</button>
      </form>
    
    </>
  )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default  ContactForm
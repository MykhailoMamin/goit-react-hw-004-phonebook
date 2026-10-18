import { Component } from "react";
import { nanoid } from "nanoid";
import css from './App.module.css';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component { 
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const storageContacts = localStorage.getItem("contacts")
    if (storageContacts !== null) {
      this.setState({
        contacts: JSON.parse(storageContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  handleChange = evt => {
    const keyName = evt.target.name
    this.setState({
      [keyName]: evt.target.value,
    })
  }

  onAddContact = (contact) => {
    const id = nanoid();
    const name = contact.name;
    const contacts = this.state.contacts;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: id,
    }

    this.setState((state) => ({
      contacts: [...state.contacts].concat(newContact),
    }))  
  }

  onDeleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onDeleteContact={this.onDeleteContact} />
      </div>
    )
  }
}
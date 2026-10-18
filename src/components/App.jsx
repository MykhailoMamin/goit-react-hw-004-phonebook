import { nanoid } from "nanoid";
import css from './App.module.css';
import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const storageContacts = localStorage.getItem("contacts")
        if (storageContacts !== null) {
            setContacts(JSON.parse(storageContacts))
        }
    }, [])

    useEffect(() => {
         localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])

    const handleChange = evt => {
        setFilter(evt.target.value);
    }

    const onAddContact = contact => {
        const id = nanoid()
        const name = contact.name;

        if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }
        const newContact = {
            ...contact,
            id: id,
        }
        setContacts(prev => [...prev, newContact]);
    }

    const onDeleteContact = id => {
        setContacts(prev => prev.filter(item => item.id !== id))
    }

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={onAddContact} />
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={handleChange} />
            <ContactList contacts={contacts} filter={filter} onDeleteContact={onDeleteContact}/>
        </div>
    )
}   
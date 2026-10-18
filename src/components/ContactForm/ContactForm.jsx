import { useState } from "react";
import css from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = evt => {
        const keyName = evt.target.name;

        if (keyName === "name") {
            setName(evt.target.value);
        } else if (keyName === "number") {
            setNumber(evt.target.value);
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const contact = {
            name,
            number,
        }
        onAddContact(contact)
        setName('');
        setNumber('');
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                Name 
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={css.label}>
                Number
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    required
                />
            </label>
            <button className={css.button} type="submit">
                Add contact
            </button>
        </form>
    )
}
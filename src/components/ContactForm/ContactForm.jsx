import { Component } from "react";
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const keyName = evt.target.name;

        this.setState({
            [keyName]: evt.target.value,
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        const { onAddContact } = this.props;
        const { name, number } = this.state;

        const contact = {
            name: name,
            number: number,
        };

        onAddContact(contact);

        this.setState(() => ({
            name: '',
            number: '',
        }));
    };

    render() {
        return (
            <form
                className={css.form}
                onSubmit={this.handleSubmit}
            >
                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </label>

                <label className={css.label}>
                    Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                    />
                </label>

                <button
                    className={css.button}
                    type="submit"
                >
                    Add contact
                </button>
            </form>
        );
    }
}
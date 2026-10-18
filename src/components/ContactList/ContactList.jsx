import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    return (
        <ul className={css.list}>
            {contacts
                .filter(item =>
                    item.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map(item => (
                    <li className={css.item} key={item.id}>
                        {item.name}: {item.number}

                        <button
                            className={css.button}
                            type="button"
                            onClick={() => onDeleteContact(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
        </ul>
    );
};
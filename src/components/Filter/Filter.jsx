import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
    return (
        <input
            className={css.filter}
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
        />
    );
};
import styles from "./DarkModeToggle.module.css";

export const DarkModeToggle = ({ handleChange, isChecked }) => {
    return (
        <div className={styles.toggleContainer}>
            <input
                type="checkbox"
                id="check"
                className={styles.toggle}
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check"></label>
        </div>
    )
}
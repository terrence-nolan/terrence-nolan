import styles from './Toggle.module.css';
import {useEffect, useState} from "react";

export const Toggle = ({handleChange, isChecked: propIsChecked, theme}) => {
    const [isChecked, setIsChecked] = useState(theme === "dark");

    useEffect(() => {
        setIsChecked(theme === "dark");
    }, [theme]);

    console.log("theme", theme);
    console.log("isChecked", isChecked);

    return (
        <div className={styles.toggleContainer}>
            <input
                type="checkbox"
                id="check"
                className={styles.toggle}
                onChange={handleChange}
                checked={isChecked || propIsChecked}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}
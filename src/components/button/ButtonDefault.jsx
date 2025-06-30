
import styles from "./Button.module.css";

export const ButtonDefault = ({ children }) => {
  return (
    <button className={styles.btn}>
			{children}
		</button>
  );
}
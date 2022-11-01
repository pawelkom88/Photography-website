import styles from "./button.module.css";

export default function Button({ children, className = "", line = false }) {
  return (
    <button className={`${styles.button}  ${line ? styles.line : ""} ${className}`}>
      {children}
    </button>
  );
}

import styles from "./button.module.css";

export default function Button({children, style}) {
  return <button className={`${styles.button} ${style}`}>{children}</button>;
}

import styles from "./backdrop.module.css";
export default function Backdrop({ children, setToggleModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        setToggleModal(false);
      }}>
      {children}
    </div>
  );
}

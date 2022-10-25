import ContactIcon from "../contact-icon/ContactIcon";
import styles from "./footer.module.css";

export default function Footer({ onHover, matches }) {
  const overlayColor = onHover && !matches ? "white" : "grey";

  return (
    <footer className={styles.footer}>
      <p className={overlayColor}>
        Discover the collections of modern, captivating <br />
        and uniquely beautiful photographs.
      </p>
      {!matches && <ContactIcon onHover={onHover} />}
    </footer>
  );
}

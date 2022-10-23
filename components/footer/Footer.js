import ContactIcon from "../contact-icon/ContactIcon";
import styles from "./footer.module.css";

export default function Footer({onHover}) {
  const overlayColor = onHover ? "white" : "grey";

  return (
    <footer className={styles.footer}>
      <p className={overlayColor}>
        Discover the collections of modern, captivating <br />
        and uniquely beautiful photographs.
      </p>
      <ContactIcon onHover={onHover} />
    </footer>
  );
}

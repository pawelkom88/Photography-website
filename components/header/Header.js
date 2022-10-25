import Button from "../button/Button";
import Logo from "../logo/Logo";
import styles from "./header.module.css";
import Hamburger from "../hamburger/Hamburger";

export default function Header({ onHover, matches }) {
  const overlayColor = onHover && !matches ? "white" : "grey";

  return (
    <header className={`${overlayColor} ${styles.header}`}>
      <Logo />
      <div>{!matches ? <Button style={overlayColor}>PORTFOLIO</Button> : <Hamburger />}</div>
    </header>
  );
}

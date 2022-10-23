import Button from "../button/Button";
import Logo from "../logo/Logo";
import styles from "./header.module.css";

export default function Header({onHover}) {
  const overlayColor = onHover ? "white" : "grey";

  return (
    <header className={`${overlayColor} ${styles.header}`}>
      <Logo />
      <div>
        <Button style={overlayColor}>PORTFOLIO</Button>
      </div>
    </header>
  );
}

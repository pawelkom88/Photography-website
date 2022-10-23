import Link from "next/link";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <Link href="/">
        <a>KAMILA JARCZAK</a>
      </Link>
    </h1>
  );
}

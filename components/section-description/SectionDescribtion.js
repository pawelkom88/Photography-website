import Link from "next/link";
import Button from "../button/Button";
import styles from "./section-description.module.css";

export default function SectionDescribtion({ title }) {
  return (
    <section className={`${styles.container} container`}>
      <article className={styles.article}>
        <span className={styles.featuring}>FEATURING</span>
        <br />
        <br />
        <h3 className={styles.heading}>{title}</h3>
        <br />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, qui. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quod, illum? Distinctio eius quas non deserunt illum
          dolorem inventore laudantium vel!
        </p>
        <br />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, qui.
        </p>
        <br />
        <Link href="/portfolio">
          <a>
            <Button line={true}>PORTFOLIO</Button>
          </a>
        </Link>
      </article>
    </section>
  );
}

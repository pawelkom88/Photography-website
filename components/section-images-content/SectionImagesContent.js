import styles from "./section-images-content.module.css";

export default function SectionImagesContent({ heading, content }) {
  return (
    <article className={styles.right}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.text}>{content}</p>
    </article>
  );
}

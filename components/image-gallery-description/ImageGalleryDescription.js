import styles from "./image-gallery-description.module.css";

export default function ImageGalleryDescription({ description }) {
  return (
    <div className={styles.description}>
      <div className={styles.content}>
        <span>{description}</span>;
      </div>
    </div>
  );
}

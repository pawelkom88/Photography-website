import { useEffect } from "react";
import styles from "../../layout/overlay/overlay.module.css";

export default function BackgroundImage({ onHover, position }) {
  useEffect(() => {
    const bgImages = Array.from(document.querySelectorAll(".bg-image"));

    bgImages.forEach((img, i) => {
      if (onHover && position === i) {
        img.classList.add(`${styles.on}`);
        img.classList.remove(`${styles.off}`);
      } else {
        img.classList.add(`${styles.off}`);
        img.classList.remove(`${styles.on}`);
      }
    });
  }, [onHover, position]);

  return (
    <>
      <div className={`bg-image ${styles["bg-image1"]} overlay`}></div>
      <div className={`bg-image ${styles["bg-image2"]} overlay`}></div>
      <div className={`bg-image ${styles["bg-image3"]} overlay`}></div>
      <div className={`bg-image ${styles["bg-image4"]} overlay`}></div>
      <div className={`bg-image ${styles["bg-image5"]} overlay`}></div>
      <div className={`bg-image ${styles["bg-image6"]} overlay`}></div>
    </>
  );
}

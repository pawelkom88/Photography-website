import { useEffect, useState } from "react";
import styles from "../../layout/overlay/overlay.module.css";

export default function BackgroundImage({ onHover, url: [image] }) {
  // const [showHighlight, setShowHighlight] = useState(false);

  // useEffect(() => {
  //   const bgImage = document.querySelector(".bg-image");
  //   if (onHover) {
  //     bgImage.classList.add(`${styles.on}`);
  //     bgImage.classList.remove(`${styles.off}`);
  //   } else {
  //     bgImage.classList.add(`${styles.off}`);
  //     bgImage.classList.remove(`${styles.on}`);
  //   }
  // }, [onHover]);

  let imageOverlay = onHover ? styles.on : styles.off;

  return (
    <div
      className={`${imageOverlay} overlay`}
      style={{
        backgroundImage: `${image?.link}`,
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
      }}></div>
  );
}

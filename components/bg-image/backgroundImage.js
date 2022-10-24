import { useEffect, useState } from "react";
import styles from "../../layout/overlay/overlay.module.css";

export default function BackgroundImage({ onHover, url: [image] }) {
  // const [showHighlight, setShowHighlight] = useState(false);

  // useEffect(() => {
  //   if (onHover) {
  //     setShowHighlight(true);
  //     setTimeout(() => {
  //       setShowHighlight(false);
  //     }, 1100);
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

import styles from "../../layout/overlay/overlay.module.css";

export default function backgroundImage({onHover, url}) {
  const imageOverlay = onHover ? styles.on : styles.off;

  return (
    <div
      className={`${imageOverlay} overlay`}
      style={{
        backgroundImage: `${url}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
  );
}

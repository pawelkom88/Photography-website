import styles from "../../layout/overlay/overlay.module.css";

export default function backgroundImage({ onHover, url }) {
  const imageOverlay = onHover ? styles.on : styles.off;
  const [image] = url;

  return (
    <div
      className={`${imageOverlay} overlay`}
      style={{
        backgroundImage: `${image?.link}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>
  );
}

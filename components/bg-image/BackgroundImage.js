import { useEffect } from "react";
import Image from "next/image";
import { sectionData } from "@helpers/helpers";
import styles from "@layout/overlay/overlay.module.css";

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
      {sectionData.map(({ id, link, linkName }) => {
        return (
          <div key={id} className="bg-image overlay">
            <Image
              src={link.slice(4, -1)}
              layout="fill"
              objectFit="cover"
              alt={`${linkName} photo`}
              loading="eager"
              quality={50}
            />
          </div>
        );
      })}
    </>
  );
}

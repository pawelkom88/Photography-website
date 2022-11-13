import Image from "next/image";
import { sectionData } from "@helpers/helpers";
import styles from "@layout/overlay/overlay.module.css";

export default function BackgroundImage({ onHover, position }) {
  return (
    <>
      {sectionData.map(({ id, link, category }, index) => {
        const categoryBgImage = onHover && position === index ? styles.on : styles.off;

        return (
          <div key={id} className={`${categoryBgImage} bg-image overlay`}>
            <Image
              src={link.slice(4, -1)}
              layout="fill"
              objectFit="cover"
              alt={`${category} photo`}
              loading="eager"
              quality={50}
            />
          </div>
        );
      })}
    </>
  );
}

import SectionHero from "@components/section/SectionHero";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import SectionImages from "@components/section-images/SectionImages";
import Marquee from "react-fast-marquee";

// styles
import styles from "@styles/marquee.module.css";

// helpers
import { sectionData } from "@helpers/helpers";

export default function Portrait({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {sectionData.map(({ id, linkName, link, video, photosDescription }) => {
        if (linkName === "Portraits") {
          return (
            <div key={id}>
              <SectionHero section={linkName} imageSrc={link.slice(4, -1)} videoSrc={video} />
              <SectionDescribtion title={linkName} />
              <SectionImages
                heading={linkName}
                photosDescription={photosDescription}
                category={linkName}
              />
              <Marquee style={{ marginTop: "7rem" }} className={styles.marquee} speed={60}>
                {linkName}
              </Marquee>
              <Marquee
                style={{ marginBottom: "6rem" }}
                className={styles.marquee}
                direction="right"
                speed={60}>
                {linkName}
              </Marquee>
            </div>
          );
        }
      })}
    </>
  );
}

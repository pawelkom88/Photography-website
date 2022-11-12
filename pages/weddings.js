import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import SectionImages from "@components/section-images/SectionImages";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import Marquee from "react-fast-marquee";

// styles
import styles from "@styles/marquee.module.css";

// helpers
import { sectionData } from "../helpers/helpers";

export default function Weddings({ isOpen, setIsOpen }) {
  const sectionDetails = sectionData.filter(section => section.category === "Weddings");

  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {sectionDetails.map(({ id, category, link, video, photosDescription }) => {
        return (
          <div key={id}>
            <SectionHero section={category} imageSrc={link.slice(4, -1)} videoSrc={video} />
            <SectionDescribtion title={category} />
            <SectionImages
              heading={category}
              photosDescription={photosDescription}
              category={category}
            />
            <Marquee style={{ marginTop: "7rem" }} className={styles.marquee} speed={60}>
              {category}
            </Marquee>
            <Marquee
              style={{ marginBottom: "6rem" }}
              className={styles.marquee}
              direction="right"
              speed={60}>
              {category}
            </Marquee>
          </div>
        );
      })}
    </>
  );
}

import { useEffect } from "react";

// components
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

export default function Events({ isOpen, setIsOpen, setCategory, data }) {
  const [{ category, link, video, photosDescription }] = sectionData.filter(
    section => section.category === "Events and Festivals"
  );

  useEffect(() => {
    setCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      <SectionHero section={category} imageSrc={link.slice(4, -1)} videoSrc={video} />
      <SectionDescribtion title={category} />
      <SectionImages
        data={data}
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
    </>
  );
}

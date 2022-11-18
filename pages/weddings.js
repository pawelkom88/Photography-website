import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// component
import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import SectionImages from "@components/section-images/SectionImages";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import Modal from "@components/modal/Modal";
import Marquee from "react-fast-marquee";

// styles
import styles from "@styles/marquee.module.css";

// helpers
import dataJSON from "@helpers/data";

export default function Weddings({ setCategory, data, toggleModal, setToggleModal }) {
  const [{ category, link, video, photosDescription, content, poster }] = dataJSON.filter(
    section => section?.category === "Weddings"
  );

  useEffect(() => {
    setCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence>
        {toggleModal && <Modal setToggleModal={setToggleModal}>{data && data.error}</Modal>}
      </AnimatePresence>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger />
        </Header>
      </div>
      <SectionHero
        section={category}
        imageSrc={link.slice(4, -1)}
        videoSrc={video}
        poster={poster}
      />
      <SectionDescribtion title={category} />
      {data?.photos ? (
        <SectionImages
          data={data}
          heading={category}
          photosDescription={photosDescription}
          category={category}
          content={content}
        />
      ) : (
        ""
      )}
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

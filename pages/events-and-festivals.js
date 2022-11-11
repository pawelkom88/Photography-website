import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import SectionImages from "@components/section-IMAGES/SectionImages";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";

// helpers
import { sectionData } from "../helpers/helpers";

export default function Events({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {sectionData.map(({ id, linkName, link, video, photosDescription }) => {
        if (linkName === "Events and Festivals") {
          return (
            <div key={id}>
              <SectionHero section={linkName} imageSrc={link.slice(4, -1)} videoSrc={video} />
              <SectionDescribtion title={linkName} />
              <SectionImages
                heading={linkName}
                photosDescription={photosDescription}
                category={linkName}
              />
            </div>
          );
        }
      })}
    </>
  );
}

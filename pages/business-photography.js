import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";

// helpers
import { sectionData } from "@helpers/helpers";

export default function Business({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {sectionData.map(({ id, linkName, link, video }) => {
        if (linkName === "Business Photography") {
          return (
            <div key={id}>
              <SectionHero
                key={id}
                section={linkName}
                imageSrc={link.slice(4, -1)}
                videoSrc={video}
              />
              <SectionDescribtion title={linkName} />
            </div>
          );
        }
      })}
    </>
  );
}

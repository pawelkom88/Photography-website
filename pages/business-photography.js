import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";

// helpers
import { urls } from "@helpers/helpers";

export default function Business({ isOpen, setIsOpen }) {
  console.log(isOpen);
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {urls.map(({ id, linkName, link, video }) => {
        if (linkName === "Properties and Interiors") {
          return (
            <SectionHero
              key={id}
              section={linkName}
              imageSrc={link.slice(4, -1)}
              videoSrc={video}
            />
          );
        }
      })}
      <SectionDescribtion title={urls[2].linkName} />
    </>
  );
}

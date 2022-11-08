import SectionHero from "@components/section/SectionHero";
import SectionDescribtion from "@components/section-description/SectionDescribtion";
import SectionImages from "@components/section-images/SectionImages";
import Logo from "@components/logo/Logo";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";

// helpers
import { urls } from "../helpers/helpers";

export default function Weddings({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
      </div>
      {urls.map(({ id, linkName, link, video }) => {
        if (linkName === "Weddings") {
          return (
            <div key={id}>
              <SectionHero section={linkName} imageSrc={link.slice(4, -1)} videoSrc={video} />
              <SectionDescribtion title={urls.linkName} />
              <SectionImages src={link.slice(4, -1)} alt={linkName} />
            </div>
          );
        }
      })}
    </>
  );
}

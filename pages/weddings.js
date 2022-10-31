// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";

import Link from "next/link";
import SectionHero from "../components/section/SectionHero";
import SectionDescribtion from "../components/section-description/SectionDescribtion";
import Logo from "../components/logo/Logo";
import Header from "../layout/header/Header";
import Button from "../components/button/Button";
import Hamburger from "../components/hamburger/Hamburger";

// styles

export default function Weddings({ mediaQueries }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <div>
            {!mediaQueries ? (
              <Link href="/portfolio">
                <a>
                  <Button>PORTFOLIO</Button>
                </a>
              </Link>
            ) : (
              <Hamburger />
            )}
          </div>
        </Header>
      </div>
      <SectionHero
        section="Weddings"
        imageSrc="/assets/images/w1.webp"
        videoSrc="/assets/videos/wedding_video.mp4"
      />
      <SectionDescribtion title="Wedding" />
    </>
  );
}

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

// helpers
import { urls } from "../helpers/helpers";

export default function Events({ mediaQueries }) {
  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <div>
            {!mediaQueries ? (
              <Link href="/about">
                <a>
                  <Button>ABOUT</Button>
                </a>
              </Link>
            ) : (
              <Hamburger />
            )}
          </div>
        </Header>
      </div>
      <SectionHero
        section={urls[3].linkName}
        imageSrc={urls[3].link.slice(4, -1)}
        videoSrc={urls[3].video}
      />
      <SectionDescribtion title={urls[3].linkName} />
    </>
  );
}

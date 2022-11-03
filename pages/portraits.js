import Link from "next/link";
import SectionHero from "components/section/SectionHero";
import Logo from "components/logo/Logo";
import Header from "layout/header/Header";
import Button from "components/button/Button";
import Hamburger from "components/hamburger/Hamburger";
import SectionDescribtion from "components/section-description/SectionDescribtion";

// helpers
import { urls } from "../helpers/helpers";

export default function Portrait({ mediaQueries }) {
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
        section={urls[1].linkName}
        imageSrc={urls[1].link.slice(4, -1)}
        videoSrc={urls[1].video}
      />
      <SectionDescribtion title={urls[1].linkName} />
    </>
  );
}

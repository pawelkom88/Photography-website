// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";

import Link from "next/link";
import SectionHero from "../components/section/SectionHero";
import Logo from "../components/logo/Logo";
import Header from "../layout/header/Header";
import Button from "../components/button/Button";
import Hamburger from "../components/hamburger/Hamburger";

// styles

export default function Portrait({ mediaQueries }) {
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
        section="Portraits"
        imageSrc="/assets/images/p1.webp"
        videoSrc="/assets/videos/portrait_video.mp4"
      />
      <section className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum consequatur
        quibusdam quod molestiae quae deleniti voluptatibus, reiciendis obcaecati quaerat dicta iure
        tenetur at adipisci nostrum delectus, inventore consectetur accusamus nisi deserunt
        consequuntur maiores necessitatibus quas. Excepturi doloremque libero officiis?
      </section>
    </>
  );
}

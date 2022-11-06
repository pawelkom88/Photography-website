// hooks
import Link from "next/link";

// components
import Header from "@layout/header/Header";
import Button from "@components/button/Button";
import Hamburger from "@components/hamburger/Hamburger";
import Logo from "@components/logo/Logo";
import GridImage from "@components/grid-image/GridImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// helpers
import { gridImages, screenSizes } from "helpers/helpers";

export default function Portfolio({ mediaQueries }) {
  const [mobile, tablet, desktop] = screenSizes.map(({ res, columnNum }) => {
    return { [res]: columnNum };
  });

  return (
    <div className="container">
      <Header>
        <Logo />
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
      <main style={{ marginTop: "2rem" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
          <Masonry gutter="20px">
            {gridImages.map(image => {
              return <GridImage key={image.id} image={image} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
}

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
import { screenSizes } from "helpers/helpers";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.pexels.com/v1/search?query=nature", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Portfolio({ mediaQueries, data: { photos }, isOpen, setIsOpen }) {
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
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
      </Header>

      {/* componetn */}
      <input type="text" />
      {/* componetn */}

      <main style={{ marginTop: "2rem" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
          <Masonry gutter="20px">
            {photos.map(image => {
              return <GridImage key={image.id} image={image} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
}

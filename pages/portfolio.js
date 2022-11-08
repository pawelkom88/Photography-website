// hooks
import { useState } from "react";
import useFetch from "@hooks/useFetch";
import Link from "next/link";

// components
import Header from "@layout/header/Header";
import Button from "@components/button/Button";
import Hamburger from "@components/hamburger/Hamburger";
import Logo from "@components/logo/Logo";
import GridImage from "@components/grid-image/GridImage";
import Spinner from "@components/spinner/Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// helpers
import { screenSizes } from "helpers/helpers";
import SearchBox from "@components/search-box/SearchBox";

export default function Portfolio({ mediaQueries, isOpen, setIsOpen }) {
  const [category, setCategory] = useState("");

  // comment
  const [mobile, tablet, desktop] = screenSizes.map(({ res, columnNum }) => {
    return { [res]: columnNum };
  });
  const { data, loading } = useFetch(
    `https://api.pexels.com/v1/search?query=${category || "people"}`
  );

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
      <SearchBox setCategory={setCategory} />
      <main style={{ marginTop: "2rem" }}>
        {loading && <Spinner />}
        <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
          <Masonry gutter="20px">
            {data &&
              data.photos.map(image => {
                return <GridImage key={image.id} image={image} />;
              })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
}

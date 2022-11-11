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
import styles from "@styles/main.module.css";

// helpers
import { screenSizes } from "helpers/helpers";
import SearchBox from "@components/search-box/SearchBox";

export default function Portfolio({ mediaQueries, isOpen, setIsOpen }) {
  const [category, setCategory] = useState("");

  const { data, loading, error } = useFetch(
    `https://api.pexels.com/v1/search?query=${category || "people"}`
  );
  
  // create dynamic breakpoints for grid
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
      <SearchBox setCategory={setCategory} />
      <main className={`${loading ? styles.center : ""} ${styles.main}`}>
        {/* When error */}
        {error && <p>An error has occured</p>}

        {/* While fetching photos */}
        {loading && <Spinner />}

        {/* When a request has no response     */}
        {data && !data?.photos?.length && !data.error && (
          <p style={{ textAlign: "center" }}>No photos found. Please try again.</p>
        )}

        {/* When rate exceeded */}
        {data && data.error === "Rate limit exceeded" && (
          <p style={{ textAlign: "center" }}>{data.error} Try again later</p>
        )}

        <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
          <Masonry gutter="20px">
            {data &&
              !error &&
              data?.photos?.map(image => {
                return <GridImage key={image.id} image={image} />;
              })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
}

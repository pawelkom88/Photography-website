// hooks
import useFetch from "@hooks/useFetch";
import { useState } from "react";
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

export default function Portfolio({ mediaQueries, isOpen, setIsOpen }) {
  const [category, setCategory] = useState("");
  const [userInput, setUserInput] = useState("");
  // comment
  const [mobile, tablet, desktop] = screenSizes.map(({ res, columnNum }) => {
    return { [res]: columnNum };
  });
  // const { data, loading } = useFetch(
  //   `https://api.pexels.com/v1/search?query=${category || "people"}`
  // );

  function handleCategory() {
    setUserInput(e.target.value);
  }

  function handleSubmit() {
    e.preventDefault();
    setCategory();
    setUserInput("");
  }

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
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleCategory} />
        <Button>Submit</Button>
      </form>
      {/* componetn */}

      <main style={{ marginTop: "2rem" }}>
        {/* <div>{loading && "Loading..."}</div>
        <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
          <Masonry gutter="20px">
            {data &&
              data.photos.map(image => {
                return <GridImage key={image.id} image={image} />;
              })}
          </Masonry>
        </ResponsiveMasonry> */}
      </main>
    </div>
  );
}

// hooks
import { Suspense, lazy } from "react";

// components
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import Logo from "@components/logo/Logo";
import Spinner from "@components/spinner/Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "@styles/main.module.css";
import { ErrorBoundary } from "react-error-boundary";

// helpers
import { screenSizes } from "helpers/helpers";
import SearchBox from "@components/search-box/SearchBox";

export default function Portfolio({ setNumOfPages, setCategory, data }) {
  const GridImage = lazy(() => import("@components/grid-image/GridImage"));

  // create dynamic breakpoints for grid
  const [mobile, tablet, desktop] = screenSizes.map(({ res, columnNum }) => {
    return { [res]: columnNum };
  });

  return (
    <div className="container">
      <Header>
        <Logo />
        <Hamburger />
      </Header>
      <SearchBox setCategory={setCategory} setNumOfPages={setNumOfPages} />
      <main className={`${styles.main}`}>
        {/* component ? */}
        {data && data.photos.length === 0 && (
          <p style={{ textAlign: "center" }}>Could not find any photos is invalid {category}</p>
        )}

        <ErrorBoundary fallback={"An error has occured. Try again later"}>
          <Suspense fallback={<Spinner />}>
            <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
              <Masonry gutter="20px">
                {data ? (
                  data.photos.map(image => {
                    return <GridImage key={image.id} image={image} />;
                  })
                ) : (
                  <></>
                )}
              </Masonry>
            </ResponsiveMasonry>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

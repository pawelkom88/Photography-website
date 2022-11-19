// hooks
import { Suspense, lazy, memo } from "react";
import { AnimatePresence } from "framer-motion";

// components
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import Logo from "@components/logo/Logo";
import Spinner from "@components/spinner/Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "@components/modal/Modal";

// helpers
import { screenSizes } from "helpers/helpers";
import SearchBox from "@components/search-box/SearchBox";

// styles
import styles from "@styles/main.module.css";

const MemoizedSearchBox = memo(SearchBox);

export default function Portfolio({
  setNumOfPhotos,
  setCategory,
  data,
  toggleModal,
  setToggleModal,
}) {
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
      <MemoizedSearchBox setCategory={setCategory} setNumOfPhotos={setNumOfPhotos} />
      <main className={`${styles.main}`}>
        <AnimatePresence>
          {toggleModal && (
            <Modal setToggleModal={setToggleModal}>{(data && data?.error) || data?.code}</Modal>
          )}
        </AnimatePresence>
        {data && !data?.error && !data?.photos?.length && (
          <p style={{ textAlign: "center" }}>Bad query. Try again</p>
        )}
        <Suspense fallback={<Spinner />}>
          {data && (
            <ResponsiveMasonry columnsCountBreakPoints={{ ...mobile, ...tablet, ...desktop }}>
              <Masonry gutter="20px">
                {data?.photos?.map(image => (
                  <GridImage key={image.id} image={image} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </Suspense>
      </main>
    </div>
  );
}

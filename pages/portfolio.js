// hooks
import Link from "next/link";

// components
import Header from "../layout/header/Header";
import Button from "../components/button/Button";
import Hamburger from "../components/hamburger/Hamburger";
import Logo from "../components/logo/Logo";
import GridImage from "../components/grid-image/GridImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// helpers
import { screenSize, posts } from "../helpers/helpers";

export default function Portfolio({ mediaQueries }) {
  return (
    <div className="container">
      <Header>
        <Logo />
        <div>
          {!mediaQueries ? (
            <Link href="/">
              <a>
                <Button>????</Button>
                {/* categories ? */}
              </a>
            </Link>
          ) : (
            <Hamburger />
          )}
        </div>
      </Header>
      <main>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {posts.map(post => {
              return <GridImage key={post.id} image={post} />;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
}

import Head from "next/head";
import { NextSeo } from "next-seo";

export default function PageSEO(props) {
  const {
    pageTitle,
    pageDescription,
    canonical,
    url,
    OpenGraphTitle,
    OpenGraphDescription,
    openGraphImageUrl,
  } = props;

  return (
    <Head>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        openGraph={{
          url: { url },
          title: { OpenGraphTitle },
          description: { OpenGraphDescription },
          images: { url: { openGraphImageUrl } },
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </Head>
  );
}

import SectionImagesContent from "@components/section-images-content/SectionImagesContent";
import Image from "next/image";
import useMatchMedia from "@hooks/useMatchMedia";
import SectionGallery from "@components/section-gallery/SectionGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { screenSize } from "helpers/helpers";
import styles from "./section-image.module.css";
import "swiper/css";

export default function SectionImages({ data, heading, photosDescription, content }) {
  const { matches } = useMatchMedia(screenSize);
  console.log(data && data);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {matches ? (
          <>
            <Swiper
              style={{
                height: "50vh",
              }}>
              {data?.photos?.map(({ id, src, alt }) => {
                return (
                  <SwiperSlide key={id}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={src.large}
                      alt={alt}
                      placeholder="blur"
                      blurDataURL={src.tiny}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        ) : (
          <SectionGallery photosDescription={photosDescription} data={data} />
        )}
      </div>
      <SectionImagesContent heading={heading} content={content} />
    </section>
  );
}

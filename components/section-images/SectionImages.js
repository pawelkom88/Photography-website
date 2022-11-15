import Image from "next/image";
import { useEffect, useState } from "react";
import useMatchMedia from "@hooks/useMatchMedia";
import SectionGallery from "@components/section-gallery/SectionGallery";
import ImageGalleryDescription from "@components/image-gallery-description/ImageGalleryDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { screenSize } from "helpers/helpers";
import styles from "./section-image.module.css";
import "swiper/css";

export default function SectionImages({ data, heading, photosDescription }) {
  const { matches } = useMatchMedia(screenSize);
  const [selected, setSelected] = useState(0);

  const [{ description }] = photosDescription.filter(({ id }) => id === selected);

  useEffect(() => {
    if (matches) {
      return;
    }

    function isActive() {
      setSelected(prevNum => prevNum + 1);

      if (selected >= data?.photos.length - 1) {
        setSelected(0);
      }
    }

    const timer = setTimeout(isActive, 6000);

    return () => clearTimeout(timer);
  }, [selected, data?.photos?.length, matches]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {matches ? (
          <>
            <Swiper
              style={{
                width: "500px",
                height: "300px",
                border: "1px solid red",
              }}
              spaceBetween={50}
              slidesPerView={3}>
              {data &&
                data?.photos?.map(({ id, src, alt }) => {
                  <SwiperSlide key={id}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={src.large}
                      alt={alt}
                      placeholder="blur"
                      blurDataURL={src.tiny}
                    />
                  </SwiperSlide>;
                })}
              {/* <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
            <ImageGalleryDescription description={description} />
          </>
        ) : (
          <>
            <SectionGallery data={data} selected={selected} />
            <ImageGalleryDescription description={description} />
          </>
        )}
      </div>
      <article className={styles.right}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, alias! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos nisi dicta necessitatibus esse tempora
          labore repudiandae exercitationem temporibus neque sint?
        </p>
      </article>
    </section>
  );
}

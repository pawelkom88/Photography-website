import Image from "next/images";

export default function SectionImages({ src, alt }) {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.images}>
          <Image src={src} alt={alt} />
          <Image src={src} alt={alt} />
          <Image src={src} alt={alt} />
          <Image src={src} alt={alt} />
        </div>
        <div className={styles.description}>
          <p className={styles.content}>dummy text - will be dynamic</p>
        </div>
      </div>
      <article className={styles.right}>
        <h3 className={styles.heading}>Heading</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, alias!
        </p>
      </article>
    </section>
  );
}

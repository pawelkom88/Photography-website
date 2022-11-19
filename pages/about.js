// components
import Image from "next/image";
import Header from "@layout/header/Header";
import Hamburger from "@components/hamburger/Hamburger";
import Logo from "@components/logo/Logo";
import styles from "@styles/about.module.css";

export default function About({}) {
  return (
    <div className="container">
      <Header>
        <Logo />
        <Hamburger />
      </Header>
      <main className={styles.main}>
        <div className={styles.profile}>
          <Image width={500} height={800} src="/assets/images/about.webp" alt="joe deo photo" />
        </div>

        <article className={styles.about}>
          <h3 className={styles.heading}>The photographer</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem
            consequuntur perspiciatis! Culpa, facere perferendis. Dignissimos incidunt inventore qui
            est?
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit sunt ratione esse
            tempora distinctio, quas itaque modi et delectus tenetur amet adipisci nisi cum, dolorem
            totam iure eos laboriosam sit eaque officiis illo quae porro veniam. Error, quaerat
            explicabo.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem
            consequuntur perspiciatis! Culpa, facere perferendis. Dignissimos incidunt inventore qui
            est?
          </p>
        </article>
      </main>
    </div>
  );
}

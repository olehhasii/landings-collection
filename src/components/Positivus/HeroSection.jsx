import { useState, useEffect } from "react";

import styles from "./PositivusStyle.module.scss";
import heroImg from "../../assets/Positivus/hero.png";

const images = import.meta.glob("../../assets/Positivus/logos/*.{png,jpg,jpeg,svg}");
const imageNames = ["amazon", "dribble", "hubspot", "netflix", "notion", "zoom"];

const HeroSection = () => {
  const [imageSrcs, setImageSrcs] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(images).map(async (path) => {
          const src = await images[path]();
          return { src: src.default, path };
        })
      );
      setImageSrcs(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including
          SEO, PPC, social media marketing, and content creation.
        </p>
        <button>Book a consultation</button>
      </div>
      <div className={styles.hero_illustration}>
        <img src={heroImg} alt="illustration" />
      </div>
      <div className={styles.hero_logos}>
        {imageSrcs.map((image, index) => (
          <img key={index} src={image.src} alt={imageNames[index]} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

import BaseButton from "../../Buttons/BaseButton";
import styles from "./BeautyLandingContentStyle.module.scss";
import rectangle1 from "../../../assets/BeautyLanding/1.png";
import rectangle2 from "../../../assets/BeautyLanding/2.png";
import rectangle3 from "../../../assets/BeautyLanding/3.png";
import rectangle4 from "../../../assets/BeautyLanding/4.png";
import rectangle5 from "../../../assets/BeautyLanding/5.png";
import rectangle6 from "../../../assets/BeautyLanding/6.png";
import rectangle7 from "../../../assets/BeautyLanding/7.png";
import rectangle8 from "../../../assets/BeautyLanding/8.png";

const BeautyLandingContent = () => {
  const imagesList = [
    {
      id: 1,
      src: rectangle1,
      alt: "Rectangle 1",
    },
    {
      id: 2,
      src: rectangle2,
      alt: "Rectangle 2",
    },
    {
      id: 3,
      src: rectangle3,
      alt: "Rectangle 3",
    },
    {
      id: 4,
      src: rectangle4,
      alt: "Rectangle 4",
    },
    {
      id: 5,
      src: rectangle5,
      alt: "Rectangle 5",
    },
    {
      id: 6,
      src: rectangle6,
      alt: "Rectangle 6",
    },
    {
      id: 7,
      src: rectangle7,
      alt: "Rectangle 7",
    },
    {
      id: 8,
      src: rectangle8,
      alt: "Rectangle 8",
    },
  ];

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.content_heading}>Discover the beauty around the world</h1>
        <p className={styles.content_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
          Et integer facilisi eget diam.
        </p>
        <BaseButton btnText="Explore" btnClassName={styles.content_btn} />
      </div>
      <div className={styles.grid}>
        {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} className={styles.grid_image} />
        ))}
      </div>
    </>
  );
};

export default BeautyLandingContent;

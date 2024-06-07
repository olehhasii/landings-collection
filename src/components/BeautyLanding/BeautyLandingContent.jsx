import BaseButton from "../Buttons/BaseButton";
import styles from "./BeautyLandingContentStyle.module.scss";
import rectangle1 from "../../assets/BeautyLanding/1.png";
import rectangle2 from "../../assets/BeautyLanding/2.png";
import rectangle3 from "../../assets/BeautyLanding/3.png";
import rectangle4 from "../../assets/BeautyLanding/4.png";
import rectangle5 from "../../assets/BeautyLanding/5.png";
import rectangle6 from "../../assets/BeautyLanding/6.png";
import rectangle7 from "../../assets/BeautyLanding/7.png";
import rectangle8 from "../../assets/BeautyLanding/8.png";
import natureLeft from "../../assets/BeautyLanding/nature_left.png";
import natureRight from "../../assets/BeautyLanding/nature_right.png";
import bottom1 from "../../assets/BeautyLanding/bottom1.png";
import bottom2 from "../../assets/BeautyLanding/bottom2.png";
import bottom3 from "../../assets/BeautyLanding/bottom3.png";

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
      <div className={styles.second}>
        <div className={styles.second_wrapper}>
          <div className={styles.second_content}>
            <h2 className={styles.second_content_heading}>Discover the beauty around the world</h2>
            <p className={styles.second_content_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.
            </p>
            <BaseButton btnText="Get Started" btnClassName={styles.second_content_btn} />
          </div>
          <div className={styles.second_sideimages}>
            <img src={natureLeft} alt="narute left" className={styles.second_sideimages_left} />
            <img src={natureRight} alt="right left" className={styles.second_sideimages_right} />
          </div>
        </div>
        <div className={styles.second_bottomimages}>
          <div className={styles.second_bottomimages_block}>
            <span>01</span>
            <img src={bottom1} alt="bottom 1" />
          </div>
          <div className={styles.second_bottomimages_block}>
            <span>02</span>
            <img src={bottom2} alt="bottom 2" />
          </div>
          <div className={styles.second_bottomimages_block}>
            <span>03</span>
            <img src={bottom3} alt="bottom 3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyLandingContent;

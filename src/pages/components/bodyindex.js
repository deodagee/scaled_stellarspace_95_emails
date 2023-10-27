import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/bodyindex.module.css";
import { useState, useRef, useEffect } from "react";

function BodyIndex() {

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const [promoVisible, setpromoVisible] = useState(true);
  const promoCloseButtonClick = () => {
    setpromoVisible(false);
  };

  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      circle.setAttribute("fill", "white");
      circle.setAttribute("fill-opacity", "1");

      const radiusAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      radiusAnimation.setAttribute("attributeName", "r");
      radiusAnimation.setAttribute("values", "5%;55%");
      radiusAnimation.setAttribute("dur", "3s");
      radiusAnimation.setAttribute("repeatCount", "indefinite");

      const opacityAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      opacityAnimation.setAttribute("attributeName", "fill-opacity");
      opacityAnimation.setAttribute("values", "0.4;0");
      opacityAnimation.setAttribute("dur", "3s");
      opacityAnimation.setAttribute("repeatCount", "indefinite");

      circle.appendChild(radiusAnimation);
      circle.appendChild(opacityAnimation);

      return () => {
        circle.removeChild(radiusAnimation);
        circle.removeChild(opacityAnimation);
      };
    }
  }, []); // 



  return (
    <>
      <div className={styles.projects_page_whole2}>
        <ol className={styles.projects_page_whole2_wrapper}>
        <li className={styles.promo_wrapper}>
        <span className={styles.promo_message_first_body} style={{ display: promoVisible ? 'inline-flex' : 'none' }}>
                  <div>
                  <h1>I am currently expirementing with Cloudflare and Vercel&apos;s CDN configurations. Some Videos or Images may take their time loading because of the file size. If you want to report an issue, please go to the contact page and fill me in. I&apos;ll be glad to assist or review the matter. Thank you!</h1>
                  </div>
                  <div>
                  <button className={styles.close_button} onClick={promoCloseButtonClick}><div>
                    <Image
                      className={styles.close_button_image}
                      alt="closebutton"
                      width={100}
                      height={100}
                      src={"/closebutton.png"}
                    >
                    </Image>
                  </div>
                    <div>
                      <p>
                        Close
                      </p>
                    </div>
                  </button>
                  </div>
                </span>
                </li>


          <li className={styles.header_butt}>
            <span>
              <div className={styles.avatar_image_list_item_and_name_and_emails_item}>

                <div className={`${styles.avatar_image_list_item} ${styles.avatar_image_list_item_deo}`}>
                  <svg className={styles.svg_image_deo} width={70} height={70} viewBox="0 0 320 320">
                    <circle ref={circleRef} cx="50%" cy="50%" fill="gray" fillOpacity="0.5"></circle>
                  </svg>
                </div>
                <div className={styles.name_and_emails_item}>
                  <span>
                    <p className={styles.name}>Astrum Stellar</p>
                  </span>
                  <span className={styles.emails}>
                    <p>deo_singiza@hotmail.com </p>
                    <p>astrumstellar@gmail.com </p>
                    <p>astrular@astrumstellar.com </p>
                    <p className={styles.phone_number}>(519)-965-9128</p>
                  </span>
                </div>
              </div>
            </span>
            
            <span>
              <button className={styles.button}><Link href={"/contact"} className={styles.link}>Contact Me</Link></button>
            </span>
          </li>


          <li className={styles.credentials}>
            <span className={styles.credentials_wrapper}>
                  <div className={styles.visualstudio_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/visualstudio.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.photoshop_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/photoshop.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.soundcloud_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/soundcloud.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.upwork_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/upwork.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.prisma_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/prisma.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.fl_studio_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/flstudio.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  <div className={styles.sql_logo}>
                    <Image
                      className={styles.credentials_image}
                      width={50}
                      height={50}
                      alt=""
                      src="/sql.jpg"
                      onLoad={handleImageLoad}
                    >
                    </Image>
                  </div>
                  </span>
                </li>
                

          <li className={styles.top_title}>
            <div className={styles.title_wrapper}>
              <h1>Featured</h1>
              <span className={styles.split_bar}></span>
              <h1>Certificates</h1>
            </div>
            <div className={styles.rolling_image_tags}></div>
          </li>

          <li className={styles.middle_sqaure_tabs}>
            <div className={styles.middle_sqaure_tabs_wrapper}>

              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Search Engine Optimization</p>
              </div>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Search Engine Optimization</p>
              </div>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={50}
                  height={50}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Search Engine Optimization</p>
              </div>
              <div className={styles.icons_and_text3}>
                <h1>Exceptional Digital Choices</h1>
                <p>
                  I&apos;ve crafted some projects here for you to take a look
                  at and decide which ones suits your personal preference.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.middle_sqaure_tabs}>
            <div className={styles.middle_sqaure_tabs_wrapper2}>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Video Editing and Production</p>
              </div>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Content Writing</p>
              </div>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Social Media Marketing</p>
              </div>
              <div className={styles.icons_and_text}>
                <Image
                  className={styles.icons}
                  width={100}
                  height={100}
                  src={"/chip.png"}
                  alt="image"
                />
                <p>Pay Per Click</p>
              </div>
            </div>
          </li>
          {/* Rest of your code for latest projects and testimonials */}
        </ol>
      </div>
    </>
  );
}

export default BodyIndex;

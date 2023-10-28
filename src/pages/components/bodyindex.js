import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/bodyindex.module.css";
import { useState, useRef, useEffect } from "react";

function BodyIndex() {
  useEffect(() => {
    // Access the body element and set overflow-x to hidden
    document.body.style.overflowX = 'hidden';

    // Clean up the effect (optional)
    return () => {
      document.body.style.overflowX = ''; // Reset overflow-x when the component is unmounted
    };
  }, []);
  
  const togglePopup = () => {
    const popup = document.getElementById("popup");
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }

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
            <div className={styles.credentials_wrapper}>
              <div className={styles.logos}>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/visualstudio.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/photoshop.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/soundcloud.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/upwork.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/prisma.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/flstudio.jpg"
                >
                </Image>
                <Image
                  className={styles.credentials_image}
                  width={100}
                  height={100}
                  alt=""
                  src="/sql.jpg"
                >
                </Image>
              </div>
            </div>
          </li>




          <li className={styles.top_main_header_and_paragraphs}>

            <span className={styles.top_main_header}>
              <div>
                <h1 className={styles.top_main_header_header1}>Stellar Space Plans</h1>
              </div>
              <div>
                <h2 className={styles.top_main_header_header2}>Deals That Make Sense</h2>
              </div>
              <div>
                <Link className={styles.contact_page_link} href={'/contact'}><h2 className={styles.top_main_header_button}>Contact</h2></Link>
              </div>
            </span>

            <span className={styles.top_main_paragraphs}>
              <div className={styles.top_main_paragraphs_item}>
                <Image
                  className={styles.top_main_icons_target}
                  width={50}
                  height={50}
                  alt=""
                  src="/target.png"
                />
                <p className={styles.top_main_header_paragraph1}>Picking and Choosing</p>
                <p className={styles.top_main_header_paragraph2}>For Individuals and Businesses alike, if you need help picking a plan, send a request through the <Link className={styles.contact_page_link} href={"/contact"}>Contact</Link> page. Otherwise choose a plan, and click on &quot;Get Started&quot; to send me an order. This is not a payment gate; please allow  1-2 business days for a reply first, so we can get started.</p>
              </div>
              <div className={styles.top_main_paragraphs_item}>
                <Image
                  className={styles.top_main_icons_chip}
                  width={50}
                  height={50}
                  alt=""
                  src="/chip.png"
                />
                <p className={styles.top_main_header_paragraph1}>Payments</p>
                <p className={styles.top_main_header_paragraph2}>You don&apos;t pay anything until we&apos;ve got your plans sorted out. This means that until you have the rough design in your hands, you don&apos;t have to worry about spending a dime. Click <button onClick={togglePopup}> <p className={styles.contact_page_link}> Rough Designs</p></button> for more information.</p>

                {/* Popup */}
                <span id="popup" className={styles.popup}>
                  <span className={styles.popupContent}>
                    Rough Design: It consists of a visual blueprint, depicting the basic elements, design and layout of the project. With stellarspace, your rough design comes free of charge. You may request html, javascript , css, png, pdf, doc, .blend , .wav, mp3, type files and more. Please alow up to 3 business days for a rough design to be send out back to you.
                  </span>
                  <button onClick={togglePopup}> <p className={styles.button_toggle_close_paragraph}>Close </p></button>
                </span>
              </div>
              <div className={styles.top_main_paragraphs_item}>
                <Image
                  className={styles.top_main_icons_mountain}
                  width={50}
                  height={50}
                  alt=""
                  src="/mountain.png"
                />
                <p className={styles.top_main_header_paragraph1}>Premium plans</p>
                <p className={styles.top_main_header_paragraph2}> <Link className={styles.contact_page_link} href={"/entreprise"}> Premium </Link> plans for those that need more. Cover yourself with at least 8GB of ram space.</p>
              </div>
              <div className={styles.top_main_paragraphs_item}>
                <Image
                  className={styles.top_main_icons_features}
                  width={50}
                  height={50}
                  alt=""
                  src="/gears.png"
                />
                <p className={styles.top_main_header_paragraph1}>Features</p>
                <p className={styles.top_main_header_paragraph2}>Get all the features listed, and more. Please send any special requests through the <Link className={styles.contact_page_link} href={"/contact"}>contact</Link> page. Thank You kindly.</p>
              </div>
            </span>
          </li>







          <li className={styles.middle_sqaure_tabs}>
            
          <div className={styles.top_title}>
            <span className={styles.title_wrapper}>
              <h1>Featured</h1>
              <span className={styles.split_bar}></span>
              <h1>Certificates</h1>
            </span>
            <div className={styles.rolling_image_tags}></div>
          </div>

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
              <div className={styles.icons_and_text_nude}>
                <h1>Exceptional Digital Choices</h1>
                <p>
                  I&apos;ve crafted some projects here for you to take a look
                  at and decide which ones suits your personal preference.
                </p>
              </div>
            </div>
          </li>

          <li className={styles.middle_sqaure_tabs}>

                      <div className={styles.top_title}>
            <span className={styles.title_wrapper}>
              <h1>Featured</h1>
              <span className={styles.split_bar}></span>
              <h1>Certificates</h1>
            </span>
            <div className={styles.rolling_image_tags}></div>
          </div>
          
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
        </ol>
      </div>
    </>
  );
}

export default BodyIndex;

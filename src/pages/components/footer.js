import React from "react";
import Image from "next/image";
import styles from "../../styles/components/footer.module.css";
import Link from "next/link";

function Footer() {
  return (


    <div className={styles.footer}>
      <div className={styles.wrapper}>

      <ul className={styles.separatorLine1}></ul>

        <ol className={styles.sections}>

          <ul>
          <li className={styles.section}>
            <div className={styles.avatarContact}>
              <Image
                alt="Astrum Stellar"
                className={styles.avatar}
                width={44}
                height={44}
                src={"/logored.png"}
              />
              <p className={styles.astrumBottomName}>Astrum Stellar</p>
              <button className={styles.contactButton}>
                <p className={styles.contactParagraph}>Contact</p>
              </button>
            </div>
          </li>
          </ul>

          <ul className={styles.list_sections}>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Tools</div>
              <ul className={styles.list}>
                <Link href={"https://openai.com/"}>
                <li className={styles.item}>Open Ai</li></Link>
                <Link href={"https://www.blender.org/"}>
                <li className={styles.item}>Blender 3D</li></Link>
                <Link href={"https://visualstudio.microsoft.com/vs/professional/"}>
                <li className={styles.item}>Visual Studio</li></Link>
                <Link href={"https://www.image-line.com/fl-studio/"}>
                <li className={styles.item}>Fl Studio</li></Link>
              </ul>
            </div>
          </li>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Page Links</div>
              <ul className={styles.list}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>Contact</li>
                <li className={styles.item}>Pricing</li>
                <li className={styles.item}>Source Code</li>
              </ul>
            </div>
          </li>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Other Links</div>
              <ul className={styles.list}>
                <li className={styles.item}>Front End</li>
                <li className={styles.item}>Back End</li>
                <li className={styles.item}>Databases</li>
                <li className={styles.item}>Audio Mixing</li>
              </ul>
            </div>
          </li>
        </ul>
        </ol>

        <ul className={styles.separatorLine1}></ul>

        <ol className={styles.iconsAndCopy}>
          <li className={styles.iconWrapper}>
            <Image
              alt="Upwork"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/upwork.jpg"}
            />
            <Image
              alt="Dribbble"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/dribble.jpg"}
            />
            <Image
              alt="Indeed"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/indeed.jpg"}
            />
            <Image
              alt="SoundCloud"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/soundcloud.jpg"}
            />
          </li>
          <li className={styles.copyRight}>
            <p>© Astrumstellar | Stellarspace | Deo Singiza</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/projectspage2.module.css";

function ProjectsPage2Component() {
  return (
    <>
      <div className={styles.projects_page_whole2}>
        <ol className={styles.projects_page_whole2_wrapper}>
        <li className={styles.header_butt}>
            <span>
                <h1 className={styles.title}></h1>
                <h1>Welcome to my projects page, this is my work. Some of the pages are not fully functional so please be patient with the ever so often changing ui.</h1>
            </span>
            <span>
                <button className={styles.button}><Link href={"/contact"} className={styles.link}>Contact Me</Link></button>
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

export default ProjectsPage2Component;

import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/figmadashboardui.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";




function FigmaDashboardUi () {

    const [videoLoaded, setvideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setvideoLoaded(true);
    };

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(error => {
                // Handle autoplay error (e.g., user interaction required)
                console.error('Autoplay error:', error);
            });
        }
    }, []);

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    
        return () => {
          document.body.style.overflowX = ''; 
        };
      }, []);

    return (
        <>
            <div className={styles.projects_page_whole}>
                <div className={styles.projects_page_wrapper}>

                    <div className={styles.list_div}>
                        <ol className={styles.title_and_title_description}>
                            <Image
                                className={styles.logored}
                                alt=""
                                width={100}
                                height={100}
                                src={"/logored.png"}></Image>
                            <li className={styles.title1}><p><h1>Figma Templates<span className={styles.title_brother}> Figma </span></h1></p></li>
                            <li className={styles.description_list_element}>
                                <p>
                                    Details
                                </p>
                            </li>

                            <li className={styles.buttons_list_element}>
                                <button className={styles.contact_button}><Link href={"/contact"}>Contact Page</Link></button>
                                <button className={styles.see_more_button}><Link href={"/"}>Home Page</Link></button>
                            </li>
                        </ol>
                    </div>

                    <div className={styles.categories_wrapper}>
                        <ol className={styles.list2}>
                            <li className={styles.titles_group}>
                                <span>
                                    <Image
                                        className={styles.chevron}
                                        alt="chevron"
                                        src={'/chevron.png'}
                                        width={100}
                                        height={100}
                                    ></Image>
                                    <h1>Info</h1>
                                </span>
                                <span>
                                    <Image
                                        className={styles.chevron}
                                        alt="chevron"
                                        src={'/chevron.png'}
                                        width={100}
                                        height={100}
                                    ></Image>
                                    <h2>Figma</h2>
                                </span>
                                <span>
                                    <Image
                                        className={styles.chevron}
                                        alt="chevron"
                                        src={'/chevron.png'}
                                        width={100}
                                        height={100}
                                    ></Image>
                                    <p>Artist</p>
                                </span>

                            </li>
                            <li className={styles.title}>
                                <h1>
                                Original Designs | Copyright 
                                </h1>
                                <Image
                                    className={styles.mid_page_image}
                                    alt="figmadashboardui"
                                    height={1000}
                                    width={1000}
                                    src={"/figmadashboard.png"}>

                                </Image>
                            </li>
                        </ol>
                        
                        
                    </div>

                    <div>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Site Info</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <h2>Details</h2>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>Figma Templates | User Interfaces</p>
                            </li>
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_paragraph}>
                                <p>2023-10-20</p>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>Project<span className={styles.darkened}>Free To Use</span></p>
                            </li>

                            <li className={styles.bottom_link_list_element}>
                        <Link
                            className={styles.bottom_link}
                            href={"https://www.figma.com/community/file/1315109983225451896/dashboard-design-free-to-use-https-astrumstellar-com"}>
                            <p>Go To Figma</p>

                        </Link>
                    </li>
                            
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>StellarSpace | Astrum Stellar</h1>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p></p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FigmaDashboardUi;
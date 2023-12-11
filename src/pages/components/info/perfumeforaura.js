import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/perfumeforaura.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PerfumeForAuraPage from "../../info/perfumeforaura";



function PerfumeForAura() {

    
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
                            <li className={styles.title1}><p><h1>Pays De Poésie Parfumée<span className={styles.title_brother}> 3D Render</span></h1></p></li>
                            <li className={styles.description_list_element}>
                                <p>
                                    Details And Specs
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
                                    <h1>Site Info</h1>
                                </span>
                                <span>
                                    <Image
                                        className={styles.chevron}
                                        alt="chevron"
                                        src={'/chevron.png'}
                                        width={100}
                                        height={100}
                                    ></Image>
                                    <h2>Developer Info</h2>
                                </span>
                                <span>
                                    <Image
                                        className={styles.chevron}
                                        alt="chevron"
                                        src={'/chevron.png'}
                                        width={100}
                                        height={100}
                                    ></Image>
                                    <p>Github</p>
                                </span>

                            </li>
                            <li className={styles.title}>
                                <h1>
                                    Real Time Chat App | Login Features | Add A Friend | Decline And Accept Requests | Chat Live
                                </h1>
                                <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/perfumeforaura.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/perfume2stills.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/perfumeprocess480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                            </li>
                            

                        </ol>
                        
                    </div>



                    <li className={styles.bottom_link_list_element}>
                        <Link
                            className={styles.bottom_link}
                            href={"https://www.cycles-renderer.org/"}>
                            <p>Made With The Cycles Render Engine</p>

                        </Link>
                    </li>
                </div>
            </div>

        </>
    )
}

export default PerfumeForAura;

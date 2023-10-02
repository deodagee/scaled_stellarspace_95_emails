import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/projects.module.css"
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image"
import Loading from './loading';


function Projects() {

    const [isCssLoaded, setIsCssLoaded] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsCssLoaded(true);
      }, 2000);
    }, []);
  

    const videoRef = useRef(null);

    const [videoLoaded, setvideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setvideoLoaded(true);
    };

    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(error => {
                // Handle autoplay error (e.g., user interaction required)
                console.error('Autoplay error:', error);
            });
        }
    }, []);



    return (

        <>

{!isCssLoaded && <Loading />} {/* Show loading screen while CSS is not loaded */}
      {isCssLoaded && (

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
                            <li className={styles.title1}><p><h1>Projects and Upcoming<span className={styles.title_brother}> Plans</span></h1></p></li>
                            <li className={styles.description_list_element}>
                                <p>
                                    Some Current Projects Here At StellarSpace 
                                </p>
                            </li>

                            <li className={styles.buttons_list_element}>
                                <button className={styles.contact_button}><Link href={"/contact"}>Contact Page</Link></button>
                                <button className={styles.see_more_button}><Link href={"/projects_more_page"}>More Projects</Link></button>
                            </li>
                        </ol>


                        <ol className={styles.list2}>
                            <li className={styles.title}>
                                <h1>
                                    Category: Branding
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>Client Name: Prefers Not To Say</p>
                            </li>
                            <li className={styles.video_list_element}>
                                <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                    className={styles.video_tag}>
                                    <source
                                        src={'/logopaperwhite.mp4'}
                                        type={"video/mp4"}>
                                    </source>
                                </video>
                            </li>
                            <li>
                                <span><Image
                                    className={styles.arrow}
                                    alt=""
                                    width={15}
                                    height={15}
                                    src={"/forwardarrow.png"}></Image></span>
                            </li>
                        </ol>


                        <ol className={styles.list2}>
                            <li className={styles.title}>
                                <h1>
                                    Category: Ui/Ux
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>Client Name: Prefers Not To Say</p>
                            </li>
                            <li className={styles.video_list_element}>
                                <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                    className={styles.video_tag}>
                                    <source
                                        src={'/logopaperwhite.mp4'}
                                        type={"video/mp4"}>
                                    </source>
                                </video>
                            </li>
                            <li>
                                <span><Image
                                    className={styles.arrow}
                                    alt=""
                                    width={15}
                                    height={15}
                                    src={"/forwardarrow.png"}></Image></span>
                            </li>
                        </ol>


                        
                        <ol className={styles.list2}>
                            <li className={styles.title}>
                                <h1>
                                    Category: 3D Animation
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>Client Name: Prefers Not To Say</p>
                            </li>
                            <li className={styles.video_list_element}>
                                <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                    className={styles.video_tag}>
                                    <source
                                        src={'/logopaperwhite.mp4'}
                                        type={"video/mp4"}>
                                    </source>
                                </video>
                            </li>
                            <li>
                                <span><Image
                                    className={styles.arrow}
                                    alt=""
                                    width={15}
                                    height={15}
                                    src={"/forwardarrow.png"}></Image></span>
                            </li>
                        </ol>



                        <ol className={styles.list2}>
                            <li className={styles.title}>
                                <h1>
                                    Category: Press Kit
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>Client Name: Prefers Not To Say</p>
                            </li>
                            <li className={styles.video_list_element}>
                                <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                    className={styles.video_tag}>
                                    <source
                                        src={'/logopaperwhite.mp4'}
                                        type={"video/mp4"}>
                                    </source>
                                </video>
                            </li>
                            <li>
                                <span><Image
                                    className={styles.arrow}
                                    alt=""
                                    width={15}
                                    height={15}
                                    src={"/forwardarrow.png"}></Image></span>
                            </li>
                        </ol>


                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>
                    </div>

                </div>
            </div>
            )}

        </>
    )

}

export default Projects 
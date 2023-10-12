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
                                    <button className={styles.see_more_button}><Link href={"/services"}>Services </Link></button>
                                </li>
                            </ol>

                            <div className={styles.categories_wrapper}>
                                <ol className={styles.list2}>
                                    <li className={styles.title}>
                                        <h1>
                                            Category: Ui/Ux
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Real Time Chat App</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"https://chatappbydeo.vercel.app/login"}>https://chatappbydeo.vercel.app/login</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Public</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/chatapp.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/chatappdetails'}>
                                            <h1 className={styles.view_link_header}>View App Details</h1>
                                        </Link>
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
                                            Category: Branding
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>

                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>
                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/logogreytonetriple.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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

                                    <span className={styles.description_list_element_wrapper}>

                                        <li className={styles.description_list_element}>
                                            <p>Product Modeling</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"/projects"}> Not Availabe Yet</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Status:<span className={styles.description_list_element_right_side}> Upcoming</span></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}> Public</span></p>
                                        </li>
                                    </span>
                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/bottleblender.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>

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
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )

}

export default Projects 
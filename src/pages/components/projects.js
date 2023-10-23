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

    const categoriesWrapperStyles = {
        paddingRight: "50px",
        paddingLeft: "50px",
        width: '100vw',
        overflowX: 'auto',
        overflowY: 'hidden',
        gridTemplateRows: 'repeat(1, 1fr)',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        marginBottom: '20px',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
        WebkitScrollbar: {
            width: '0', // Safari and Chrome
        }
    };
    


    return (

        <>

            {!isCssLoaded && <Loading />} {/* Show loading screen while CSS is not loaded */}
            {isCssLoaded && (

                <div className={styles.projects_page_whole}>
                    <div className={styles.projects_page_wrapper}>

                        <div className={styles.list_div}>

                            <ol className={styles.section_top}>
                                <li className={styles.section_top_list_item1}>
                                    <Image

                                        className={styles.cocacola}
                                        width={50}
                                        height={50}
                                        quality={100}
                                        alt=""
                                        src="/Deo.jpg"

                                    >
                                    </Image>
                                    <h1 className={styles.top_title1}>
                                        <li className={styles.title1}><p><h1>Projects and Upcoming<span className={styles.title_brother}> Plans</span></h1></p></li>
                                    </h1>
                                    <h1 className={styles.top_title2}>
                                        Some Current Projects Here At StellarSpace
                                    </h1>

                                    <span className={styles.buttons_list_element}>
                                        <button className={styles.contact_button}><Link href={"/contact"}>Contact Page</Link></button>
                                        <button className={styles.see_more_button}><Link href={"/services"}>Services </Link></button>
                                    </span>
                                    <Link href={"/"}>
                                        <p className={styles.home_button}>Home
                                        </p>
                                    </Link>
                                </li>
                            </ol>


                            <div style={categoriesWrapperStyles}>
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
                                            Category: Ui/Ux
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Coffee Shop App For Day Skippers</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"https://coffee-shop-beta-swart.vercel.app"}>https://coffeeshop-astrumstellar.vercel.app/</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Public</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/coffeepls.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/coffeeappdetails'}>
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

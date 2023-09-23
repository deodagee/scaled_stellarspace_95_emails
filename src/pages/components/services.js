import React, { useEffect, useRef } from 'react';
import { Image } from "@chakra-ui/react";
import styles from "../../styles/components/services.module.css";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';



function Services() {


    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setVideoLoaded(true);
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
                <Head>
          <Link rel="stylesheet" href={"/styles/components/services.module.css"} />
        </Head>
            <div className={styles.services_page_whole}>
                <div className={styles.services_page_wrapper}>
                    <div>
                        <Image
                            className={styles.cocacola}
                            width={50}
                            height={50}
                            quality={100}
                            alt=""
                            src="/cocacola2.png"
                            onLoad={handleImageLoad}
                        >
                        </Image>
                    </div>

                    <div className={styles.video_and_image}>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>From Blender</p>
                            </li>
                            
                            <li className={styles.title_bottom_img_or_video}>
                                <video ref={videoRef} autoPlay loop muted playsInline className={styles.video_loop_tag} onLoad={handleVideoLoad}>

                                    <source src="/stitchvideo4.mp4" type="video/mp4" />
                                </video>
                            </li>
                        </ol>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>To High Def Renders</p>
                            </li>
                            <li className={styles.title_bottom_img_or_video}>

                            <div className={styles.desert_eagle_div}>
                                <Image
                                    className={styles.deserteagle}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    alt=""
                                    src="/deserteagle.png"
                                    onLoad={handleImageLoad}
                                >
                                </Image>
                                </div>
                            </li>
                        </ol>

                    </div>
                    <div className={styles.video_and_image}>

<ol className={styles.title_and_image_wrap}>
    <li className={styles.title_wrap}>
        <p>3D In Depth Modeling</p>
    </li>
    
    <li className={styles.title_bottom_img_or_video}>
        <video ref={videoRef} autoPlay loop muted playsInline className={styles.video_loop_tag2} onLoad={handleVideoLoad}>

            <source src="/boxbuild.mp4" type="video/mp4" />
        </video>
    </li>
</ol>

<ol className={styles.title_and_image_wrap}>
    <li className={styles.title_wrap}>
        <p>For Product Designs And More</p>
    </li>
    <li className={styles.title_bottom_img_or_video}>

    <div className={styles.desert_eagle_div}>
        <Image
            className={styles.deserteagle}
            width={100}
            height={50}
            quality={100}
            alt=""
            src="/blackbox.png"
            onLoad={handleImageLoad}
        >
        </Image>
        </div>
    </li>
</ol>

</div>
                </div>
            </div>
        </>
    )
}

export default Services;

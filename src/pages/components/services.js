import React, { useEffect, useRef } from 'react';
import { Image } from "@chakra-ui/react";
import styles from "../../styles/components/services.module.css";
import { useState } from "react";
import Link from "next/link";


function Services() {


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


    return (
        <>
            <div className={styles.services_page_whole}>
                <div className={styles.services_page_wrapper}>
                    <div>
                        <Image
                            className={styles.cocacola}
                            width={50}
                            height={50}
                            quality={100}
                            alt="logo"
                            src="/cocacola2.png"
                        >
                        </Image>
                    </div>

                    <div className={styles.video_and_image}>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>From Blender</p>
                            </li>
                            
                            <li className={styles.title_bottom_img_or_video}>
                                <video ref={videoRef} autoPlay loop muted playsInline className={styles.video_loop_tag}>

                                    <source src="/stitchvideo4.mp4" type="video/mp4" />
                                </video>
                            </li>
                        </ol>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>To High Def Renders</p>
                            </li>
                            <li className={styles.title_bottom_img_or_video}>
                                <Image
                                    className={styles.deserteagle}
                                    width={495}
                                    height={270}
                                    quality={100}
                                    alt="logo"
                                    src="/deserteagle.png"
                                >
                                </Image>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;

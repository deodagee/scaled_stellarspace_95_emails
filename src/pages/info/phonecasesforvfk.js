import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/phonecasesforvfk.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";




function PhoneCases () {

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
                            <li className={styles.title1}><p><h1>Product Modeling<span className={styles.title_brother}> Hard Surface Modeling </span></h1></p></li>
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
                                    <h2>Render Engine</h2>
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
                                Geometry Nodes | Cycles | Client request
                                </h1>
                                <Image
                                    className={styles.mid_page_image}
                                    alt="vfk"
                                    height={1000}
                                    width={1000}
                                    src={"/vfk2.png"}>

                                </Image>
                            </li>
                        </ol>
                        
                    </div>

                    <li className={styles.vfkimages_list_item}>
                            <div>
                                    <Image
                                    alt="vfk"
                                    width={500}
                                    height={500}
                                    src={"/vfk3.png"}
                                    className={styles.vfkimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="vfk"
                                    width={500}
                                    height={500}
                                    src={"/vfk4.jpg"}
                                    className={styles.vfkimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="vfk"
                                    width={500}
                                    height={500}
                                    src={"/vfk5.jpg"}
                                    className={styles.vfkimages}>
                                    </Image>
                                </div>
                            
                            </li>

                    <div className={styles.videosection}>
                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/vfkvideo.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
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
                                <p>Product Modeling | Vectors | 3D</p>
                            </li>
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Cycles Render Engine</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <h2><span> <p>Frame Count :</p><p>5</p></span></h2>
                                
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>2023-11-25</p>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>Project<span className={styles.darkened}>closed</span></p>
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

export default PhoneCases;
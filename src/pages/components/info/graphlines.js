import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/graphlines.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";




function GraphLines () {

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
                            <li className={styles.title1}><p><h1>3D Animation<span className={styles.title_brother}> Infographic Modeling</span></h1></p></li>
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
                                Geometry Nodes | Cycles | Timeline
                                </h1>
                                <Image
                                    className={styles.mid_page_image}
                                    alt="graphlines"
                                    height={1000}
                                    width={1000}
                                    src={"/graphlinesv1.jpg"}>

                                </Image>
                            </li>

                            <li className={styles.iphoneimages_list_item}>
                            <div>
                                    <Image
                                    alt="graphlines"
                                    width={300}
                                    height={300}
                                    src={"/graphlinesv2.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="graphlines"
                                    width={300}
                                    height={300}
                                    src={"/graphlinesv3.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="graphlines"
                                    width={300}
                                    height={300}
                                    src={"/graphlinesv4.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                            
                            </li>
                        </ol>
                        
                    </div>

                    <div className={styles.videosection}>
                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/graphlines.mp4'}
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
                                <p>Infographics Modeling | Vectors | 3D</p>
                            </li>
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Cycles Render Engine</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <h2><span> <p>Frame Count :</p><p>120</p></span></h2>
                                
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>Frame Count is directly related to the price you will be paying for 3D renders. Each frame comes at it&apos;s own<span className={styles.darkened}>price</span>.</p>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>This project costs 145 <span className={styles.darkened}>frames</span></p>
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

export default GraphLines;
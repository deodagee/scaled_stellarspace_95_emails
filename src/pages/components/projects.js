import React, {useEffect, useRef} from "react";
import styles from "../../styles/components/projects.module.css"
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

function Projects() {

    const videoRef = useRef(null);

    const [videoLoaded, setvideoLoaded] = useState (false);
    const handleVideoLoad = () => {
        setvideoLoaded (true);
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

            <div className={styles.projects_page_whole}>
                <div className={styles.projects_page_wrapper}>


                    <div className={styles.list_div}>

                        <ol className={styles.title_and_title_description}>
                            <li className={styles.title}><p><h1>Projects and Upcoming<span className={styles.title_brother}> Plans</span></h1></p></li>
                            <li className={styles.description_list_element}>
                                <p>
                                    Here you can view most of my current projects. For a detailed list of all my work please carefully visit all the links provided for each section. Some projects that are visible through portals such as reddit, LinkedIn, or others may require you to have an account with them in order to bypass some security features to view personal account details. Send any of your questions to the <Link
                                        href={"/"}>Contact Page</Link> and I will respond asap or within three business days if the waiting list is long. Usually 1 business day is the target. Thank you.
                                </p>
                            </li>

                            <li className={styles.buttons_list_element}>
                                <button className={styles.contact_button}>Contact Page</button>
                                <button className={styles.see_more_button}>More Projects</button>
                            </li>
                        </ol>


                        <ol className={styles.list2}>
                            <li className={styles.video_list_element}>
                            <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                             className={styles.video_tag}>
                            <source
                            src={'/logopaperwhite.mp4'} 
                            type={"video/mp4"}>
                            </source>
                            </video>
                            </li>
                        </ol>

                        <ol className={styles.list3}>
                            <li className={styles.title}></li>
                            <li></li>

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

        </>
    )

}

export default Projects 
import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/oreodeo.module.css"
import Image from "next/image";
import { useEffect } from "react";



function OreoDeo () {

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
                            <li className={styles.title1}><p><h1>3D Animation<span className={styles.title_brother}>Product Modeling</span></h1></p></li>
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
                                Oreo Cookie Scene | Blast to the Past | Curb the Need 
                                </h1>
                                <Image
                                    className={styles.mid_page_image}
                                    alt="cofeeshopimages"
                                    height={1000}
                                    width={1000}
                                    src={"/oreodeov1.jpg"}>

                                </Image>
                            </li>

                            <li className={styles.iphoneimages_list_item}>
                            <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/oreodeov2.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/oreodeov3.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/oreodeov.jpg"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                            
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
                                <p>Product Modeling | Oreos | 3D</p>
                            </li>
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Cycles Render Engine</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <h2>Frame Count</h2>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>Frame Count is directly related to the price you will be paying for 3D renders. Ech frame comes at it&apos;s own<span className={styles.darkened}>price</span>.</p>
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

export default OreoDeo;

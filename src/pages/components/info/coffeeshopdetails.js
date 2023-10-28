import React from "react";
import Link from "next/link";
import styles from "../../../styles/components/info/chatappdetails.module.css"
import Image from "next/image";
import { useEffect } from "react";



function Coffeeshopdetailspage() {

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
                            <li className={styles.title1}><p><h1>Online Coffee Shop<span className={styles.title_brother}>Web App</span></h1></p></li>
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
                                Online Coffee Shop | Login | Menu system | maps api | Orders and omline pay 
                                </h1>
                                <Image
                                    className={styles.mid_page_image}
                                    alt="cofeeshopimages"
                                    height={1000}
                                    width={1000}
                                    src={"/coffeepls.png"}>

                                </Image>
                            </li>

                            <li className={styles.iphoneimages_list_item}>
                            <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/coffeeshopiphone1.png"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/coffeeshopiphone3.png"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/coffeeshopiphone2.png"}
                                    className={styles.iphoneimages}>
                                    </Image>
                                </div>
                                <div>
                                    <Image
                                    alt="cofeeshopimages"
                                    width={300}
                                    height={300}
                                    src={"/coffeeshopiphone4.png"}
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
                                <p>Coffee Shop Web App</p>
                            </li>
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Developer options</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <h2>Details</h2>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p>To clone a repository and work with its files, start by opening your terminal or command prompt and navigate to the desired directory using the <span className={styles.darkened}>&apos;cd&apos; </span> command. Clone the repository by typing <span className={styles.darkened}>&apos;git clone &apos; repository_url &apos; </span>  in the terminal, replacing <span className={styles.darkened}>&apos; repository_url &apos; </span> with the actual URL. After cloning, change directory to the newly cloned repository. To copy a file, use <span className={styles.darkened}> &apos;cp file_to_copy_path destination_path&apos; </span>or <span className={styles.darkened}> &apos;cp -r directory_to_copy_path destination_path&apos; </span>for directories. For duplicating the entire repository, navigate to the parent directory and use <span className={styles.darkened}>&apos;cp -r cloned_repository_name new_repository_name&apos; </span>. Remember, for keeping your local copy up-to-date with the original repository, use <span className={styles.darkened}>&apos;git pull origin master&apos;</span> . After making changes, commit them using <span className={styles.darkened}> &apos;git add .&apos; </span>, <span className={styles.darkened}>&apos;git commit -m &apos;&apos;Your commit message here&apos;&apos; &apos; </span>, and <span className={styles.darkened}> &apos;git push origin master&apos; </span>. This process ensures you have a duplicate copy and the ability to manage files effectively.</p>
                            </li>
                            
                        </ol>
                        <ol className={styles.blog_part}>
                            <li className={styles.blog_part_title}>
                                <h1>Github</h1>
                            </li>
                            <li className={styles.blog_part_title2}>
                                <Link
                                    href={"https://github.com/deodagee/coffee-shop-beta"}>
                                    <h2>Link:https://github.com/deodagee/coffee-shop-beta</h2>
                                </Link>
                            </li>
                            <li className={styles.blog_part_paragraph}>
                                <p></p>
                            </li>
                        </ol>
                    </div>

                    <li className={styles.bottom_link_list_element}>
                        <Link
                            className={styles.bottom_link}
                            href={"https://coffeeshop-astrumstellar.vercel.app/"}>
                            <p>Link:</p>
                            <p>https://coffeeshop-astrumstellar.vercel.app//</p>

                        </Link>
                    </li>
                </div>
            </div>

        </>
    )
}

export default Coffeeshopdetailspage;
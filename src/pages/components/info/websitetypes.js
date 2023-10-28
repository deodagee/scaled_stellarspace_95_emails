import React from "react";
import styles from "../../../styles/components/websitetypes.module.css"
import Image from "next/image";
import Link from "next/link";

function WebsiteTypes() {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    
        return () => {
          document.body.style.overflowX = ''; 
        };
      }, []);
    return (

        <>
            <div className={styles.website_types_whole}>

                <div className={styles.website_types_wrapper}>


                    <ol className={styles.list_wrapper_first}>
                        <li className={styles.list_element_first}>
                        <Image 
                    className={styles.logo_image}
                    alt=""
                    src={"/logored.png"}
                    width={100}
                    height={100}> 
                    </Image>

                            <h1 className={styles.title_element}>Types of Websites</h1>
                        </li>
                    </ol>

                    <ol className={styles.list_wrapper}>
                        <li className={styles.list_element_second}>
                            <h2 className={styles.name}><Link href={"/static"}>Static Websites</Link></h2>
                        </li>

                        <ol className={styles.descriptions_list_wrapper}>
                            <li className={styles.list_element_third}>
                                <p>They consist of fixed web pages stored on a web server. Unlike dynamic websites that are generated on-the-fly, static sites don&apos;t change content based on user interactions. They are quick to load, secure, and cost-effective, making them great for simple online presences like portfolios, blogs, or informational websites.</p>
                                <p>SSR (Server-Side Rendering): When we talk about Server-Side Rendering (SSR), we mean the process where a web server generates a web page for a user&apos;s browser every time they visit a website. In dynamic websites, SSR allows for real-time content updates and personalized user experiences. </p>
                            </li>

                        </ol>
                    </ol>

                    <ol className={styles.list_wrapper}>
                        <li className={styles.list_element_second}>
                            <h2 className={styles.name}><Link
                            href={"/dynamic"}
                            >Dynamic Websites</Link></h2>
                        </li>

                        <ol className={styles.descriptions_list_wrapper}>

                            <li className={styles.list_element_third}>
                                <p>Dynamic websites are like interactive and ever-changing storybooks on the internet. Unlike static websites, dynamic sites generate content on-the-fly in response to user interactions. They use databases, server-side scripts, and various technologies to create personalized experiences. When you visit a dynamic website, it&apos;s akin to opening a book where the content adapts based on your preferences and actions, offering real-time updates and interactive features.</p>
                            </li>
                        </ol>
                    </ol>

                    <ol className={styles.list_wrapper}>
                        <li className={styles.list_element_second}>
                            <h2 className={styles.name}><Link
                            href={"/ecommerce"}
                            >Ecommerce Websites</Link></h2>
                        </li>

                        <ol className={styles.descriptions_list_wrapper}>

                            <li className={styles.list_element_third}>
                                <p>E-commerce websites are digital marketplaces where buying and selling happen online. They&apos;re like bustling virtual shopping malls, where businesses showcase their products or services, and customers can browse, select items, and make purchases, all from the comfort of their devices. E-commerce sites integrate secure payment gateways, product catalogs, and shopping carts, allowing users to explore a vast array of products, compare prices, and complete transactions with just a few clicks. These websites revolutionize the way we shop, bringing the entire retail experience to our fingertips.</p>
                            </li>
                        </ol>
                    </ol>

                </div>
            </div>

        </>
    )
}
export default WebsiteTypes;
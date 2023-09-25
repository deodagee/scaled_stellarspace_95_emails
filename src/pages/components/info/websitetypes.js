import React from "react";
import styles from "../../../styles/components/websitetypes.module.css"
import Image from "next/image";
import Link from "next/link";

function WebsiteTypes() {

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
                                <p>Since static Web pages contain fixed code, the content of each page does not change unless it is manually updated by the webmaster. This works well for small websites, but it can make large sites with hundreds or thousands of pages difficult to maintain. Therefore, larger websites typically use dynamic pages, which can be updated by simply modifying a database record. Static sites that contain a lot of pages are often designed using templates. This makes it possible to update several pages at once, and also helps provide a consistent layout throughout the site.</p>
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
                                <p>Most large websites are dynamic since they are easier to maintain than static websites. This is because static pages each contain unique content, meaning they must be manually opened, edited, and published whenever a change is made. Dynamic pages, on the other hand, access information from a database. Therefore, to alter the content of a dynamic page, the webmaster may only need to update a database record. This is especially helpful for large sites that contain hundreds or thousands of pages. It also makes it possible for multiple users to update the content of a website without editing the layout of the pages.Dynamic websites that access information from a database are also called database-driven websites.</p>
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
                                <p>Business to Business<span>(B2B) is when one business purchases goods or services from another business. A business selling to a government or other organization, while not strictly B2B, is also considered B2B e-commerce.</span></p>
                                <p>Consumer to Consumer<span>(C2C) is when one person sells something to another person, facilitated by a website or other Internet service. Auction sites like eBay were the earliest forms of C2C e-commerce, and sites like Etsy now allow individuals offering products and services to find customers easily.</span></p>
                                <p>Consumer-to-Business<span></span>(C2B) e-commerce is where an individual sells a product (or, more often, a service) to a business. One common form of this is freelance contract work, like a photographer licensing an image to a stock photo agency or a developer creating a custom application for a business.</p>
                            </li>
                        </ol>
                    </ol>

                </div>
            </div>

        </>
    )
}
export default WebsiteTypes;
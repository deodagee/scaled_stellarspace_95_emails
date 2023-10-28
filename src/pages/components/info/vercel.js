import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import styles from "../../../styles/components/info/faq.module.css"
import { useEffect } from "react";

function Threedrenderspage() {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
    
        return () => {
          document.body.style.overflowX = ''; 
        };
      }, []);

    return (

        <>

            <div className={styles.faq_page_whole}>
                <div className={styles.faq_page_whole_wrapper}>

                    <ol className={styles.section_top}>

                        <li className={styles.section_top_list_item1}>
                            <h1 className={styles.top_title1}>
                                FAQ
                            </h1>
                        </li>

                        <li className={styles.section_top_list_item2}>
                            <h1 className={styles.top_title2}>Vercel?</h1>
                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                        <li className={styles.section_bottom_title1}>
                            <h1 className={styles.top_title}>Vercel</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <span>
                                <p>
                                    Vercel is an exceptional platform for deploying a variety of websites, from personal blogs and portfolios to robust e-commerce sites and dynamic web applications. Its versatility in handling different types of websites makes it a top choice for developers across various domains.
                                </p>
                            </span>

                            <span>
                                <p>

                                    One of Vercel&apos;s standout features is its robust testing capabilities. Before deploying a website, I can leverage Vercel&apos;s preview deployments to thoroughly test its functionality and design in a real-world environment. Vercel creates isolated staging environments for each branch, allowing me to conduct rigorous testing without affecting the live site. This ensures that any issues, such as broken links or misaligned elements, can be identified and resolved before the website goes live, guaranteeing a smooth user experience.
                                </p>
                            </span>
                            <span>
                                <p>

                                    Additionally, Vercel simplifies the management of databases by providing seamless integration with various database providers. Whether I&apos;m using PostgreSQL, MongoDB, or MySQL, Vercel allows me to securely connect my web application to the database of my choice. It provides environment variables and configuration options, ensuring that sensitive database credentials are kept safe while allowing for smooth communication between the web application and the database server.
                                </p>
                            </span>
                            <span>
                                <p>

                                    In summary, Vercel&apos;s ability to deploy a wide range of websites, coupled with its robust testing features and seamless database integration, makes it an indispensable tool for developers. Whether I&apos;m launching a simple blog or a complex web application with a sophisticated database backend, Vercel provides the reliability and efficiency needed to ensure a successful deployment and an excellent user experience.
                                </p>
                            </span>
                        </li>
                        <li className={styles.faq_source_button_item}>
                            <span>
                                <Image
                                    className={styles.forward_arrow}
                                    alt="arrow"
                                    width={100}
                                    height={100}
                                    src={"/forwardarrow.png"}>

                                </Image>
                            </span><span>
                                <button className={styles.source_button}><Link href={"/"}>Written By: Deo Singiza</Link></button>
                            </span>

                        </li>
                    </ol>

                </div>
            </div>

        </>

    )
}

export default Threedrenderspage;
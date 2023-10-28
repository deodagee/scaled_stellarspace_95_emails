import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/components/info/faq.module.css"


function FaqPage() {

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
                            <h1 className={styles.top_title2}>
                                Frequently Asked questions
                            </h1>
                        </li>

                        <Link href={"/"}>
                                    <p className={styles.domain_link}>Home
                                    </p>
                                </Link>
                    </ol>
                    <ol className={styles.section_bottom} >
                        <li>
                            <h1 className={styles.section_bottom_title1}>
                                Frequently Asked questions
                            </h1>
                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                        <li>
                            <Link
                                href={"/info/privatedomains"}>
                                <h2 className={styles.section_bottom_paragraph_item}>
                                    What Are Private Domains?
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/info/applicationinterfaces"}>
                                <h2 className={styles.section_bottom_paragraph_item}>
                                    What is An Application Interface?
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/info/threedrenders"}>
                                <h2 className={styles.section_bottom_paragraph_item}>
                                    Where Can I get Copyright on Graphic Designs?
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/info/hostgatorvercel"}>
                                <h2 className={styles.section_bottom_paragraph_item}>
                                    Where Will My Website Be Hosted?
                                </h2>
                            </Link>
                        </li>
                        
                    </ol>

                </div>
            </div>
        </>
    )
}

export default FaqPage;
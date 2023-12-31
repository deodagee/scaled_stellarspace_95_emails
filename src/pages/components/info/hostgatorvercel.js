import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import styles from "../../../styles/components/info/faq.module.css"
import { useEffect } from "react";

function HostgatorVercel() {
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
                            <Image

                                className={styles.cocacola}
                                width={50}
                                height={50}
                                quality={100}
                                alt=""
                                src="/Deo.jpg"

                            >
                            </Image>
                            <h1 className={styles.top_title1}>
                                FAQ
                            </h1>
                        </li>
                        <li className={styles.section_top_list_item2}>
                            <h1 className={styles.top_title2}>Hosting As A Service</h1>
                        </li>
                        <li className={styles.section_top_list_item3}>
                            <span>
                                <h2 className={styles.top_title3}>What Are the Different Options Out There?
                                </h2>
                            </span>
                            <span>
                                <j1 className={styles.top_title3}>Why StellarSpace?</j1>
                            </span>
                        </li>

                    </ol>

                    <ol className={styles.section_bottom}>
                        <li className={styles.section_bottom_title1}>
                            <h1 className={styles.top_title}>Hosting As A Service</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>
                                Hosting as a Service is a cloud computing solution that provides individuals and businesses with the capability to host their applications, websites, or data on servers owned and maintained by a third-party provider. Instead of investing in and managing physical servers, users can access virtualized resources over the internet. HaaS offers several advantages, including scalability, as users can easily adjust their hosting resources based on their needs, ensuring efficient use of computing power. It also provides reliability and security, with data often stored in redundant, geographically diverse locations to prevent data loss. Moreover, users benefit from 24/7 technical support and maintenance, freeing them from the complexities of server management and allowing them to focus on their core activities. This service model offers flexibility and convenience, making it an attractive option for businesses of all sizes looking for a reliable and hassle-free hosting solution.
                            </p>
                        </li>
                        <li className={styles.section_bottom_title1}>
                            <h1 className={styles.top_title}>
                                What Are the Different Options Out There?
                            </h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>Several reputable hosting service providers, such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, and smaller companies like Bluehost and SiteGround, offer Hosting as a Service. While these services provide efficient and reliable hosting solutions, their costs can add up, especially for clients who also require design services. Hosting fees often depend on the level of resources needed, such as storage, bandwidth, and processing power, and these costs can escalate as a website or application grows. Clients seeking design services in addition to hosting may find themselves facing a significant financial commitment. Design services, which include website or application development, graphic design, and user experience optimization, require skilled professionals and can further strain a client&apos;s budget. It&apos;s essential for clients to carefully consider their hosting needs, explore cost-effective plans, and balance them with the expenses of design services to create a well-rounded online presence without breaking the bank. Seeking a balance between hosting affordability and design quality is crucial to ensure a cost-effective and visually appealing digital presence.</p>
                        </li>
                        <li className={styles.section_bottom_title1}>
                            <h1>Why StellarSpace?</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>For website development compared to platforms like WordPress, Wix, and Squarespace, I can compare. Unlike templated sites, I offer customized front-end designs tailored specifically to your brand, ensuring a unique and engaging user experience. My expertise extends beyond basic front-end work; I handle complex back-end development, integrating advanced server features, secure login systems, and seamless payment gateways. By entrusting the entire project to me, you receive a cohesive, professionally crafted website without the hassle of managing multiple parties. Moreover, my services come at exceptionally low fees, unmatched by any competition. With me, you not only save costs but also get a top-notch, fully functional website that stands out from the crowd, delivering exceptional value for your investment.</p>
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
                            </span>
                            <span>
                                <button className={styles.source_button}><Link href={"https://www.ibm.com/topics/api"}>Source</Link></button>
                            </span>
                        </li>
                    </ol>

                </div>
            </div>

        </>

    )
}

export default HostgatorVercel;
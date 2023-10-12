import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/components/info/faq.module.css"

function ApisPage() {


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
                            <h2 className={styles.top_title2}>Application Interfaces</h2>
                        </li>
                        <li className={styles.section_top_list_item3}>
                            <span>
                                <h2 className={styles.top_title3}>
                                    So What Are They?
                                </h2>
                            </span>
                            <span>
                                <h2 className={styles.top_title3}>How an API works</h2>
                            </span>
                            <span>
                                <Link href={"/"}>
                                    <p className={styles.domain_link}>Home
                                    </p>
                                </Link>
                            </span>
                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                        <li className={styles.section_bottom_title1}>
                            <h1>Application Interfaces</h1>
                        </li>

                        <li className={styles.section_bottom_paragraph_item}>
                            <p>
                                An API, or application programming interface, is a set of defined rules that enable different applications to communicate with each other. It acts as an intermediary layer that processes data transfers between systems, letting companies open their application data and functionality to external third-party developers, business partners, and internal departments within their companies.
                                The definitions and protocols within an API help businesses connect the many different applications they use in day-to-day operations, which saves employees time and breaks down silos that hinder collaboration and innovation. For developers, API documentation provides the interface for communication between applications, simplifying application integration.
                            </p>
                        </li>
                        <li className={styles.section_bottom_title}>
                            <h1>
                                So What Are They?
                            </h1>
                        </li>

                        <li className={styles.section_bottom_paragraph_item}>
                            <p>APIs simplify software development and innovation by enabling applications to exchange data and functionality easily and securely.</p>
                        </li>

                        <li className={styles.section_bottom_list_item3}>
                            <h1 className={styles.section_bottom_title}>How an API works</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <span>
                                <p>A simple way to understand how APIs work is to look at a common example of third-party payment processing. When a user purchases a product on an ecommerce site, they may be prompted to “Pay with Paypal” or another type of third-party system. This function relies on APIs to make the connection.</p></span>
                            <span>
                                <p>When the buyer clicks the payment button, an API calls to retrieve information. This is also known as a request. This request is processed from an application to the web server via the API&apos;s Uniform Resource Identifier (URI) and includes a request verb, headers, and sometimes, a request body.</p>
                            </span>
                            <span>
                                <p>After receiving a valid request from the product webpage, the API makes a call to the external program or web server, in this case, the third-party payment system.</p></span>
                            <span>
                                <p>The server sends a response to the API with the requested information.</p></span>
                            <span>
                                <p>The API transfers the data to the initial requesting application, here the product website.</p>
                            </span>
                            <span>
                                <p>While the data transfer will differ depending on the web service being used, the requests and responses all happen through an API. There is no visibility on the user interface, meaning APIs exchange data within the computer or application, and appear to the user as a seamless connection.</p>
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
                            </span>
                            <span>
                                <button className={styles.source_button}><Link href={"https://www.ibm.com/topics/api"}>Source</Link></button>
                            </span>
                        </li>
                    </ol>

                </div>
            </div >

        </>

    )
}

export default ApisPage;
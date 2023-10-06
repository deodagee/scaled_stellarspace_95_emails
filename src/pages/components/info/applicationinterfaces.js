import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import styles from "../../../styles/components/info/applicationinterfaces.module.css"

function ApisPage() {


    return (

        <>

            <div className={styles.api_page_whole}>
                <div className={styles.api_page_wrapper}>



                    <ol className={styles.section_top}>
                        <li className={styles.section_top_list_item1}>
                        <h1  className={styles.top_title1}>
                                FAQ 
                            </h1>
                            <div className={styles.top_titles}>
                            <h1 className={styles.top_title}>Application Interfaces</h1>
                            <h1  className={styles.top_title}>
                                So What Are They? 
                            </h1>
                            <h1 className={styles.top_title}>How an API works</h1>
                            </div>

                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                    <li className={styles.section_bottom_list_item1}>
                    <h1 className={styles.top_title}>Application Interfaces</h1>

                            <p>
                                An API, or application programming interface, is a set of defined rules that enable different applications to communicate with each other. It acts as an intermediary layer that processes data transfers between systems, letting companies open their application data and functionality to external third-party developers, business partners, and internal departments within their companies.
                                The definitions and protocols within an API help businesses connect the many different applications they use in day-to-day operations, which saves employees time and breaks down silos that hinder collaboration and innovation. For developers, API documentation provides the interface for communication between applications, simplifying application integration.
                            </p>
                        </li>
                    <li className={styles.section_bottom_list_item2}>
                    <h1  className={styles.top_title}>
                                So What Are They? 
                            </h1>
                            <p>APIs simplify software development and innovation by enabling applications to exchange data and functionality easily and securely.</p>
                        </li>
                        <li className={styles.section_bottom_list_item3}>
                        <h1 className={styles.top_title}>How an API works</h1>
                            <p>A simple way to understand how APIs work is to look at a common example of third-party payment processing. When a user purchases a product on an ecommerce site, they may be prompted to “Pay with Paypal” or another type of third-party system. This function relies on APIs to make the connection.</p>
                            <p>When the buyer clicks the payment button, an API calls to retrieve information. This is also known as a request. This request is processed from an application to the web server via the API&apos;s Uniform Resource Identifier (URI) and includes a request verb, headers, and sometimes, a request body.</p>
                            <p>After receiving a valid request from the product webpage, the API makes a call to the external program or web server, in this case, the third-party payment system.</p>
                            <p>The server sends a response to the API with the requested information.</p>
                            <p>The API transfers the data to the initial requesting application, here the product website.</p>
                            <p>While the data transfer will differ depending on the web service being used, the requests and responses all happen through an API. There is no visibility on the user interface, meaning APIs exchange data within the computer or application, and appear to the user as a seamless connection.</p>
                        </li>
                        <li className={styles.section_bottom_list_item5}>
                            <Button className={styles.source_button}><Link href={"https://www.ibm.com/topics/api"}>Source</Link></Button>
                            <Image
                            className={styles.forward_arrow}
                            alt="arrow"
                            width={10}
                            height={10}
                            src={"/forwardarrow.png"}>

                            </Image>
                        </li>
                    </ol>

                </div>
            </div>

        </>

    )
}

export default ApisPage;
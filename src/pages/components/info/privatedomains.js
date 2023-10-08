import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import styles from "../../../styles/components/info/privatedomains.module.css"

function ApisPage() {


    return (

        <>

            <div className={styles.api_page_whole}>
                <div className={styles.api_page_wrapper}>

                    <ol className={styles.section_top}>

                        <li className={styles.section_top_list_item1}>
                            <h1 className={styles.top_title1}>
                                FAQ
                            </h1>
                            <div className={styles.top_titles}>
                                <h1 className={styles.top_title}>What is a domain name?</h1>
                                <h1 className={styles.top_title}>
                                    Who manages domain names?
                                </h1>
                                <h1 className={styles.top_title}>What is the difference between a domain name and a URL?</h1>
                                <h1 className={styles.top_title}>What are the parts of a domain name?</h1>
                                <h1 className={styles.top_title}>How to keep a domain name secure</h1>

                            </div>

                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                        <li className={styles.section_bottom_list_item1}>
                            <h1 className={styles.top_title}>What is a domain name?</h1>
                            <p>
                                A domain name is a unique, easy-to-remember address used to access websites, such as &lsquo;google.com&lsquo;, and &lsquo;facebook.com&lsquo;. Users can connect to websites using domain names thanks to the DNS system. More ellaborately, it  is a string of text that maps to an alphanumeric IP address, used to access a website from client software. In plain English, a domain name is the text that a user types into a browser window to reach a particular website. For instance, the domain name for Google is &lsquo;google.com&lsquo;.

                                The actual address of a website is a complex numerical IP address (e.g. 192.0.2.2), but thanks to DNS, users are able to enter human-friendly domain names and be routed to the websites they are looking for. This process is known as a DNS lookup.
                            </p>
                            <p>Search for an available domain name:<Link className={styles.domain_link} href={"https://www.hostgator.com/domains"}>Hostgator Domain Search</Link>
                            </p>

                        </li>
                        <li className={styles.section_bottom_list_item2}>
                            <h1 className={styles.top_title}>
                                Who manages domain names?
                            </h1>
                            <p>Domain names are all managed by domain registries, which delegate the reservation of domain names to registrars. Anyone who wants to create a website can register a domain name with a registrar, and there are currently over 300 million registered domain names.</p>
                        </li>
                        <li className={styles.section_bottom_list_item3}>
                            <h1 className={styles.top_title}>What is the difference between a domain name and a URL?</h1>
                            <p>A uniform resource locator (URL), sometimes called a web address, contains the domain name of a site as well as other information, including the protocol and the path. For example, in the URL &lsquo;https://cloudflare.com/learning/&lsquo;, &lsquo;cloudflare.com&lsquo; is the domain name, while &lsquo;https&lsquo; is the protocol and &lsquo;/learning/&lsquo; is the path to a specific page on the website.</p>
                        </li>
                        <li className={styles.section_bottom_list_item3}>
                            <h1 className={styles.top_title}>What are the parts of a domain name?</h1>
                            <p>Domain names are typically broken up into two or three parts, each separated by a dot. When read right-to-left, the identifiers in domain names go from most general to most specific. The section to the right of the last dot in a domain name is the top-level domain (TLD). These include the &lsquo;generic&lsquo; TLDs such as &lsquo;.com&lsquo;, &lsquo;.net&lsquo;, and &lsquo;.org&lsquo;, as well as country-specific TLDs like &lsquo;.uk&lsquo; and &lsquo;.jp&lsquo;.

                                To the left of the TLD is the second-level domain (2LD) and if there is anything to the left of the 2LD, it is called the third-level domain (3LD). Let&apos;s look at a couple of examples:</p>
                            <p>For Google&apo;s US domain name, &lsquo;google.com&lsquo;:

                                <p>&lsquo;.com&lsquo; is the TLD (most general)</p>
                                <p> &lsquo;google&lsquo; is the 2LD (most specific)</p>
                                But for Google UK’s domain name, ‘google.co.uk’:

                                <p>&lsquo;.com&lsquo; is the TLD (most general)</p>
                                <p> &lsquo;.co&lsquo;* is the 2LD</p>
                                <p> &lsquo;google&lsquo; is the 3LD (most specific)</p>
                                *In this case, the 2LD indicates the type of organization that registered the domain (.co in the UK is for sites registered by companies).
                                </p>
                        </li>
                        <li className={styles.section_bottom_list_item3}>
                            <h1 className={styles.top_title}>How to keep a domain name secure</h1>

                            <p>Once a domain name has been registered with a registrar, that registrar is in charge of notifying the registrant when their domain is about to expire and giving them the chance to renew, ensuring they do not lose their domain name. In some cases, registrars will prey on their users&apos; expired domain names by buying those domains the second they expire and then selling them back to the original registrant at an exorbitant price. It is important to choose an honest and trustworthy registrar to avoid these kinds of predatory practices.</p>
                        </li>
                        <li className={styles.section_bottom_list_item5}>
                            <Button className={styles.source_button}><Link href={"https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/"}>Source</Link></Button>
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
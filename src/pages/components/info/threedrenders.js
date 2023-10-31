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
                            <h1 className={styles.top_title2}>3D Renders</h1>
                        </li>
                        <li className={styles.section_top_list_item3}>
                            <span>
                                <h2 className={styles.top_title3}>As A Service
                                </h2>
                            </span>
                            <span>
                                <h2 className={styles.top_title3}>
                                    <h1 className={styles.top_title3}>How About Copyright Use?</h1>
                                </h2>
                            </span>
                        </li>
                    </ol>

                    <ol className={styles.section_bottom}>
                        <li className={styles.section_bottom_title1}>
                            <h1>3d Renders</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>
                                3D rendering is the process of generating realistic or stylized two-dimensional images or animations from three-dimensional models. These renders are widely used in fields like architecture, product design, and entertainment, providing a visual representation of objects or scenes that might be difficult or expensive to create in reality. Powerful 3D rendering software such as Autodesk 3ds Max, Blender, and V-Ray are employed in this process, allowing designers to manipulate light, textures, and camera angles to create lifelike images or dynamic animations. By harnessing these tools, intricate and immersive visualizations can be crafted, aiding professionals in conveying their ideas and concepts with unparalleled realism and precision.
                            </p>
                        </li>
                        <li className={styles.section_bottom_title1}>
                            <h1>
                                As A Service
                            </h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>3D rendering as a service offers clients a plethora of benefits in the modern digital landscape. Firstly, it provides a cost-effective solution, eliminating the need for clients to invest heavily in expensive hardware and software, while still ensuring high-quality, visually appealing renders. Additionally, outsourcing 3D rendering saves clients valuable time and resources, allowing them to focus on their core business activities. Professional rendering services also guarantee expertise, ensuring that the final output meets industry standards and client expectations. With the rapid advancement of technology, these services often incorporate cutting-edge tools and techniques, resulting in stunningly realistic visualizations that can be pivotal in marketing strategies, architectural presentations, or product design. Ultimately, 3D rendering as a service empowers clients to showcase their ideas, products, and concepts with captivating visual content, driving engagement and leaving a lasting impression on their audience.</p>
                        </li>

                        <li className={styles.section_bottom_title1}>
                            <h1 className={styles.top_title}>How About Copyright Use?</h1>
                        </li>
                        <li className={styles.section_bottom_paragraph_item}>
                            <p>Utilizing free-use images can be a brilliant alternative for those who prefer not to hire a designer, especially in the context of copyright concerns. With an abundance of high-quality, royalty-free images available online, individuals and businesses can access a vast library of visuals without worrying about copyright infringement. However, the key lies not just in the availability of these images, but also in the strategic planning of their integration. A well-thought-out user interface (UI) design can seamlessly incorporate these images into a platform, ensuring a cohesive and visually appealing user experience. By understanding the aesthetics, theme, and tone of the platform, one can select free images that align with these factors, enhancing the overall design without compromising on legal or creative integrity. This approach not only saves costs but also allows for flexibility and creativity in designing a visually stunning platform.</p>
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

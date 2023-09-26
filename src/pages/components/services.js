import React, { useEffect, useRef } from 'react';
import { Image } from "@chakra-ui/react";
import styles from "../../styles/components/services.module.css";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';



function Services() {


    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(error => {
                // Handle autoplay error (e.g., user interaction required)
                console.error('Autoplay error:', error);
            });
        }
    }, []);


    return (
        <>
            <Head>
                <Link rel="stylesheet" href={"/styles/components/services.module.css"} />
            </Head>
            <div className={styles.services_page_whole}>
                <div className={styles.services_page_wrapper}>
                    <div>
                        <Image
                            className={styles.cocacola}
                            width={50}
                            height={50}
                            quality={100}
                            alt=""
                            src="/cocacola2.png"
                            onLoad={handleImageLoad}
                        >
                        </Image>
                    </div>

                    <div className={styles.video_and_image}>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>From Blender</p>
                            </li>

                            <li className={styles.title_bottom_img_or_video}>
                                <video ref={videoRef} autoPlay loop muted playsInline className={styles.video_loop_tag}>

                                    <source src="/stitchvideo4.mp4" type="video/mp4" />
                                </video>
                            </li>
                        </ol>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>To High Def Renders</p>
                            </li>
                            <li className={styles.title_bottom_img_or_video}>

                                <div className={styles.desert_eagle_div}>
                                    <Image
                                        className={styles.deserteagle}
                                        width={100}
                                        height={50}
                                        quality={100}
                                        alt=""
                                        src="/deserteagle.png"
                                        onLoad={handleImageLoad}
                                    >
                                    </Image>
                                </div>
                            </li>
                        </ol>

                    </div>
                    <div className={styles.video_and_image}>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>3D In Depth Modeling</p>
                            </li>

                            <li className={styles.title_bottom_img_or_video}>
                                <video ref={videoRef} autoPlay loop muted playsInline className={styles.video_loop_tag2} >

                                    <source src="/boxbuild.mp4" type="video/mp4" />
                                </video>
                            </li>
                        </ol>

                        <ol className={styles.title_and_image_wrap}>
                            <li className={styles.title_wrap}>
                                <p>For Product Designs And More</p>
                            </li>
                            <li className={styles.title_bottom_img_or_video}>

                                <div className={styles.desert_eagle_div}>
                                    <Image
                                        className={styles.deserteagle}
                                        width={100}
                                        height={50}
                                        quality={100}
                                        alt=""
                                        src="/blackbox.png"
                                        onLoad={handleImageLoad}
                                    >
                                    </Image>
                                </div>
                            </li>
                        </ol>

                    </div>

                    <ol className={styles.list3}>
                            <li className={styles.title}>
                                <h1>
                                    Main Services
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>A comprehensive list of all services offered here at Stellarspace</p>
                            </li>
                            <li>
                            <span><Image
                                className={styles.arrow}
                                alt=""
                                width={15}
                                height={15}
                                src={"/forwardarrow.png"}></Image></span> 
                            </li>
                        </ol>

                    <ol className={styles.list4}>

                        <li className={styles.list4_list_item}>
                            <span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={30}
                                    height={25}></Image>
                            </span>
                            <span className={styles.list4_title}><h1><Link href={"/branding_service"}>Branding and Business</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.branding_logo}
                                    src="/branding.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>

                            <span className={styles.paragraph_and_link}>
                                <span >
                                    <p className={styles.list4_title_paragraph}>
                                        Branding as a service (BaaS) is a strategic offering that provides businesses with comprehensive solutions to establish, enhance, and maintain their brand identity. This service encompasses a range of creative and marketing expertise, including logo design, brand messaging, visual identity development, and brand strategy. BaaS providers collaborate closely with clients to ensure their brand conveys a compelling story, resonates with their target audience, and maintains consistency across all touchpoints, from websites and social media to physical materials. By offering a holistic approach to branding, BaaS empowers businesses to build strong, memorable, and authentic brand identities that differentiate them in competitive markets.
                                    </p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>

                        </li>
                        <li className={styles.list4_list_item}><span>
                            <Image
                                className={styles.teallogo}
                                src="/teallogo.png"
                                alt=''
                                width={30}
                                height={25}></Image>
                        </span>
                            <span className={styles.list4_title}>
                                <h1><Link href={"/front_end_back_end_service"}>Front End/Back End Dev</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.front_end_logo}
                                    src="/frontend.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>
                            <span className={styles.paragraph_and_link}>
                                <span>
                                    <p className={styles.list4_title_paragraph}>Frontend and Backend Development as a Service (FEDaaS and BEDaaS) are specialized offerings in the field of software development. Frontend development focuses on creating the user interface and user experience of a website or application.

                                        On the other hand, Backend Development as a Service (BEDaaS) deals with the server-side logic and infrastructure of a software application. BEDaaS providers develop and maintain the backend systems that handle data storage, processing, and communication with the frontend. This includes server architecture, databases, APIs, and other critical components that enable the application to function seamlessly.</p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>


                        </li>
                        <li className={styles.list4_list_item}><span>
                            <Image
                                className={styles.teallogo}
                                src="/teallogo.png"
                                alt=''
                                width={30}
                                height={25}></Image>
                        </span>
                            <span className={styles.list4_title}><h1><Link href={'/ui_ux_service'}>Ui/Ux (User Interface/Experience)</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.uiux}
                                    src="/uiux.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>
                            <span className={styles.paragraph_and_link}>
                                <span>
                                    <p className={styles.list4_title_paragraph}>
                                        User Interface and Experience as a Service is a specialized offering in the realm of design and development. It provides businesses with access to expert designers and developers who craft seamless and engaging digital experiences for their customers. UI/UX focuses on creating visually appealing interfaces that prioritize user-friendliness and accessibility. It also delves into user research and testing to ensure that the design aligns with user preferences and needs. By taking advantage of UI/UX services, businesses can enhance their digital products, optimize customer satisfaction, and ultimately boost their competitive edge in the digital landscape. This service streamlines the design process, making it easier for companies to deliver exceptional user experiences across websites, applications, and other digital platforms.
                                    </p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>


                        </li>
                        <li className={styles.list4_list_item}><span>
                            <Image
                                className={styles.teallogo}
                                src="/teallogo.png"
                                alt=''
                                width={30}
                                height={25}></Image>
                        </span>
                            <span className={styles.list4_title}><h1><Link href={"/modeling_service"}>Advanced 3D modeling</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.modeling_logo}
                                    src="/modeling.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>
                            <span className={styles.paragraph_and_link}>
                                <span>
                                    <p className={styles.list4_title_paragraph}>
                                        Advanced 3D modeling leverages cutting-edge techniques and specialized software, often harnessing the power of Unreal Engine. Unreal Engine, a leading game engine developed by Epic Games, is integral to achieving stunning levels of realism and interactivity in 3D models. It enables the creation of highly detailed and visually captivating environments, characters, and assets for a wide range of applications. Through the integration of Unreal Engine, advanced 3D modelers can harness real-time rendering, physics simulations, and dynamic lighting to bring their creations to life, whether it&apos;s for gaming, architectural visualization, virtual reality experiences, or immersive simulations. This combination of advanced 3D modeling techniques and the capabilities of Unreal Engine leads to the development of visually stunning and interactive 3D content that pushes the boundaries of digital artistry and immersion.
                                    </p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>


                        </li>
                        <li className={styles.list4_list_item}><span>
                            <Image
                                className={styles.teallogo}
                                src="/teallogo.png"
                                alt=''
                                width={30}
                                height={25}></Image>
                        </span>
                            <span className={styles.list4_title}><h1><Link href={"/audio_service"}>Audio | Coprights | Mixing | Mastering</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.audio_logo}
                                    src="/audio.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>
                            <span className={styles.paragraph_and_link}>
                                <span>
                                    <p className={styles.list4_title_paragraph}>
                                        Audio Copyrighting involves legally protecting musical works, granting creators exclusive rights and safeguarding their intellectual property.
                                        Composing is the creative process of crafting original music or soundtracks for various media, enhancing storytelling through melodies and arrangements.
                                        Mixing is the technical and artistic blending of audio tracks to create a polished and balanced sound.
                                        Mastering is the final step in audio production, optimizing sound quality and ensuring consistency for distribution on different platforms.
                                        Note: You can negotiate copyright credits with me on any project, I aim to be fair, not to take your credits. This is a privilege I offer all my clients, you are free to choose to take all credits under your name for a higher fee, or choose to split royalties with me. Prices disclosed at the <Link href={"/audiopricing.js"}>Audio Pricing</Link> Page.
                                    </p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>



                        </li>
                        <li className={styles.list4_list_item}><span>
                            <Image
                                className={styles.teallogo}
                                src="/teallogo.png"
                                alt=''
                                width={30}
                                height={25}></Image>
                        </span>
                            <span className={styles.list4_title}><h1><Link href={"/video_editing_service"}>Video Compositing | Editing</Link></h1></span>
                            <span>
                                <Image
                                    className={styles.sony_alpha_logo}
                                    src="/sonyalph.png"
                                    alt=''
                                    width={150}
                                    height={20}></Image>
                            </span>

                            <span className={styles.paragraph_and_link}>
                                <span>
                                    <p className={styles.list4_title_paragraph}>Video Compositing and Editing as a Service is a specialized offering in the field of video production. It involves the skillful blending of various visual elements and the meticulous editing of video footage to create a seamless and engaging final product. Compositing entails integrating diverse video clips, special effects, animations, and graphics to craft compelling narratives or promotional content. Video editors, armed with creativity and technical expertise, trim, arrange, and enhance footage, adding transitions, music, and sound effects to deliver a polished and professional video. This service empowers businesses to tell their stories effectively, captivate audiences, and elevate their brand presence through visually stunning and impactful video content.</p>
                                </span>
                                <span className={styles.arrow_and_link}><span
                                    className={styles.link}
                                ><Link
                                    href={'/branding'}
                                ><p className={styles.see_more_link}>See More</p></Link></span><span><Link
                                    href={'/branding'}><Image
                                        className={styles.arrow2}
                                        alt=""
                                        width={15}
                                        height={15}
                                        src={"/forwardarrow.png"}></Image></Link></span> </span>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Services;

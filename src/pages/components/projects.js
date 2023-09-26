import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/projects.module.css"
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image"

function Projects() {

    const videoRef = useRef(null);

    const [videoLoaded, setvideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setvideoLoaded(true);
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

            <div className={styles.projects_page_whole}>
                <div className={styles.projects_page_wrapper}>


                    <div className={styles.list_div}>

                        <ol className={styles.title_and_title_description}>
                        <Image
                                className={styles.logored}
                                alt=""
                                width={100}
                                height={100}
                                src={"/logored.png"}></Image>
                            <li className={styles.title}><p><h1>Projects and Upcoming<span className={styles.title_brother}> Plans</span></h1></p></li>
                            <li className={styles.description_list_element}>
                                <p>
                                    Here you can view most of my current projects. For a detailed list of all my work please carefully visit all the links provided for each section. Some projects that are visible through portals such as reddit, LinkedIn, or others may require you to have an account with them in order to bypass some security features to view personal account details. Send any of your questions to the <Link
                                        href={"/"}>Contact Page</Link> and I will respond asap or within three business days if the waiting list is long. Usually 1 business day is the target. Thank you.
                                </p>
                            </li>

                            <li className={styles.buttons_list_element}>
                                <button className={styles.contact_button}><Link href={"/contact"}>Contact Page</Link></button>
                                <button className={styles.see_more_button}><Link href={"/projects_more_page"}>More Projects</Link></button>
                            </li>
                        </ol>


                        <ol className={styles.list2}>
                            <li className={styles.video_list_element}>
                                <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                    className={styles.video_tag}>
                                    <source
                                        src={'/logopaperwhite.mp4'}
                                        type={"video/mp4"}>
                                    </source>
                                </video>
                            </li>
                        </ol>

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
                            <span><Link
                                href={'/branding'}><Image
                                className={styles.arrow}
                                alt=""
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> 
                            </li>
                        </ol>

                        <ol className={styles.list4}>
                            <li className={styles.list4_list_item}>
                                <span>
                                    <Image
                                        className={styles.teallogo}
                                        src="/teallogo.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
                                </span>
                                <span className={styles.list4_title}><h1><Link href={"/branding_service"}>Branding and Business</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.branding_logo}
                                        src="/branding.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                </span>

                            </li>
                            <li className={styles.list4_list_item}><span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={100}
                                    height={100}></Image>
                            </span>
                                <span className={styles.list4_title}>
                                    <h1><Link href={"/front_end_back_end_service"}>Front End/Back End Dev</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.front_end_logo}
                                        src="/frontend.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                                                </span> 


                            </li>
                            <li className={styles.list4_list_item}><span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={100}
                                    height={100}></Image>
                            </span>
                                <span className={styles.list4_title}><h1><Link href={'/ui_ux_service'}>Ui/Ux (User Interface/Experience)</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.uiux}
                                        src="/uiux.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                </span> 


                            </li>
                            <li className={styles.list4_list_item}><span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={100}
                                    height={100}></Image>
                            </span>
                                <span className={styles.list4_title}><h1><Link href={"/modeling_service"}>Advanced 3D modeling</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.modeling_logo}
                                        src="/modeling.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                </span> 


                            </li>
                            <li className={styles.list4_list_item}><span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={100}
                                    height={100}></Image>
                            </span>
                                <span className={styles.list4_title}><h1><Link href={"/audio_service"}>Audio | Coprights | Mixing | Mastering</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.audio_logo}
                                        src="/audio.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                </span> 



                            </li>
                            <li className={styles.list4_list_item}><span>
                                <Image
                                    className={styles.teallogo}
                                    src="/teallogo.png"
                                    alt=''
                                    width={100}
                                    height={100}></Image>
                            </span>
                                <span className={styles.list4_title}><h1><Link href={"/video_editing_service"}>Video Compositing | Editing</Link></h1></span>
                                <span>
                                    <Image
                                        className={styles.sony_alpha_logo}
                                        src="/sonyalph.png"
                                        alt=''
                                        width={100}
                                        height={100}></Image>
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
                                width={100}
                                height={100}
                                src={"/forwardarrow.png"}></Image></Link></span> </span>
                                </span>
                            </li>
                        </ol>



                        <ol className={styles.list3}>
                            <li className={styles.title}>
                                <h1>
                                    1080 to 4k Rendering
                                </h1>
                            </li>
                            <li className={styles.description_list_element}>
                                <p>Uitilzing Unreal Engine&apos;s rendering capabalities through Blender for professionals toolkit.</p>
                            </li>

                        </ol>

                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>

                        <ol className={styles.list3}>
                        </ol>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Projects 
import styles from "../../styles/projects.module.css"
import Link from "next/link";
import Image from "next/image"
import Loading from './loading';
import { useEffect, useRef, useState } from "react";


function Projects() {

    useEffect(() => {
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = '';
        };
    }, []);

    const [isCssLoaded, setIsCssLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsCssLoaded(true);
        }, 2000);
    }, []);



    const [videoLoaded, setvideoLoaded] = useState(false);
    const handleVideoLoad = () => {
        setvideoLoaded(true);
    };

    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(error => {
                // Handle autoplay error (e.g., user interaction required)
                console.error('Autoplay error:', error);
            });
        }
    }, []);

    const categoriesWrapperStyles = {
        borderWidth: "2px",
        borderColor: "white",
        boxShadow: "white 0px 0px 3px",
        backgroundImage: "url('blenderhardsurface.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        background: "linear-gradient(to bottom, #0b1916, #0b1916dd, #0b191680, )",
        paddingLeft: "0",
        marginLeft: "25px",
        width: '100vw',
        borderRadius: "7px",
        overflowX: 'auto',
        overflowY: 'hidden',
        gridTemplateRows: 'repeat(3, 1fr)',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        marginBottom: '20px',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
        WebkitScrollbar: {
            width: '0', // Safari and Chrome
        }
    };



    return (

        <>

            {!isCssLoaded && <Loading />} {/* Show loading screen while CSS is not loaded */}
            {isCssLoaded && (

                <div className={styles.projects_page_whole}>
                    <div className={styles.projects_page_wrapper}>

                        <div className={styles.list_div}>

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
                                        <li className={styles.title1}><p><h1>Projects and Upcoming<span className={styles.title_brother}> Plans</span></h1></p></li>
                                    </h1>
                                    <h1 className={styles.top_title2}>
                                        Some Current Projects Here At StellarSpace
                                    </h1>

                                    <span className={styles.buttons_list_element}>
                                        <button className={styles.contact_button}><Link href={"/contact"}>Contact Page</Link></button>
                                        <button className={styles.see_more_button}><Link href={"/services"}>Services </Link></button>
                                    </span>
                                    <Link href={"/"}>
                                        <p className={styles.home_button}>Home
                                        </p>
                                    </Link>
                                </li>
                            </ol>
                            <div style={{ width: 198.94, height: 25.34, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)', boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.50)', borderRadius: 8, border: '1px white solid', position:'relative', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>

                                <div style={{ position:'center', display:'inline-flex', alignItems:'center', justifyContent:'center',  fontSize: 10, fontFamily: 'arial', fontWeight: '300', color:'white', wordWrap: 'break-word' }}>Scroll To The Right To View More</div>
                            </div>

                            <div style={categoriesWrapperStyles}>

                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Ui/Ux
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Real Time Chat App</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"https://chatappbydeo.vercel.app/login"}>https://chatappbydeo.vercel.app/login</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Public</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/chatapp480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/chatappdetails'}>
                                            <h1 className={styles.view_link_header}>View App Details</h1>
                                        </Link>
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

                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: 3D Renders
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Perfume Bottle Design For Aura</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Aura</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/perfumeforaura.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/perfumeforaura'}>
                                            <h1 className={styles.view_link_header}>View Project</h1>
                                        </Link>
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



                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Ui/Ux
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Coffee Shop App For Day Skippers</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"https://coffee-shop-beta-swart.vercel.app"}>https://coffeeshop-astrumstellar.vercel.app/</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Public</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/coffeepls480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/coffeeshopdetails'}>
                                            <h1 className={styles.view_link_header}>View App Details</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Ui/Ux
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>
                                            <p>Figma Templates</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"https://www.figma.com/community/file/1315109983225451896/dashboard-design-free-to-use-https-astrumstellar-com"}>Figma Template By Deo Singiza</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}>Public</span></p>
                                        </li>
                                    </span>

                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={300}
                                            height={300}
                                            src={"/figmadashboard.png"}></Image></span>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/figmadashboardui'}>
                                            <h1 className={styles.view_link_header}>View Ui Details</h1>
                                        </Link>
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




                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: 3D Renders
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>

                                        <li className={styles.description_list_element}>
                                            <p> 3D Model Request</p>
                                        </li>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable </span></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}> From Freelancer.com</span></p>
                                        </li>
                                    </span>

                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={200}
                                            height={200}
                                            src={"/goldbanyan1.jpg"}></Image></span>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/banyantree'}>
                                            <h1 className={styles.view_link_header}>View Project</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Logos
                                        </h1>
                                    </li>


                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable </span></p>
                                        </li>
                                        <li className={styles.description_list_element}>

                                            <p>Client: <span className={styles.description_list_element_right_side}> </span> Allstars</p>
                                        </li>
                                    </span>

                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={300}
                                            height={300}
                                            src={"/allstars.jpg"}></Image></span>
                                    </li>

                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/allstars'}>
                                            <h1 className={styles.view_link_header}>View Project</h1>
                                        </Link>
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



                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: UI / UX
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Mobile & Desktop Design</p>
                                        </li>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                        <li className={styles.description_list_element}>

                                            <p>Client:<span className={styles.description_list_element_right_side}> Sharp Quiz</span></p>
                                        </li>
                                    </span>

                                    <span><Image
                                        className={styles.projectimages}
                                        alt=""
                                        width={300}
                                        height={300}
                                        src={"/hardquiz.jpg"}></Image></span>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Product Modeling
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/chocolatedopaminereel480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>

                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/chocolatedopaminemain'}>
                                            <h1 className={styles.view_link_header}>View gallery</h1>
                                        </Link>
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

                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Product Modeling
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable</span></p>
                                        </li>
                                    </span>
                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={75}
                                            height={75}
                                            src={"/oreodeov1.jpg"}></Image></span>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/oreos'}>
                                            <h1 className={styles.view_link_header}>View Gallery</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: 3D Infographic
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/graphlines480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/graphlines'}>
                                            <h1 className={styles.view_link_header}>View Gallery</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Product Modeling
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}>Viewable</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/vfkvideo480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/phonecasesforvfk'}>
                                            <h1 className={styles.view_link_header}>View Gallery</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Logos
                                        </h1>
                                    </li>


                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Viewable </span></p>
                                        </li>
                                        <li className={styles.description_list_element}>

                                            <p>Client: <span className={styles.description_list_element_right_side}> </span> Checkmate Collision</p>
                                        </li>
                                    </span>

                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={300}
                                            height={300}
                                            src={"/checkmatecollision2.png"}></Image></span>
                                    </li>

                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/checkmatecollision'}>
                                            <h1 className={styles.view_link_header}>View Project</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: Logos
                                        </h1>
                                    </li>


                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Logo Design</p>
                                        </li>


                                        <li className={styles.description_list_element}>

                                            <p>Client: <span className={styles.description_list_element_right_side}> WILL CALLS</span></p>
                                        </li>
                                    </span>
                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={200}
                                            height={200}
                                            src={"/willcalls2.jpg"}></Image></span>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/info/willcalls'}>
                                            <h1 className={styles.view_link_header}>View Project</h1>
                                        </Link>
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



                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: 3D Animation
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>

                                        <li className={styles.description_list_element}>
                                            <p>Product Modeling</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"/projects"}> Not Availabe Yet</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Status:<span className={styles.description_list_element_right_side}> Upcoming</span></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}> Public</span></p>
                                        </li>
                                    </span>
                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/bottleblender480p.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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



                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: 3D Renders
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>

                                        <li className={styles.description_list_element}>
                                            <p>Logo Design</p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Link: <Link className={styles.description_list_element_right_side} href={"/projects"}> Not Availabe Yet</Link></p>
                                        </li>
                                        <li className={styles.description_list_element}>
                                            <p>Client: <span className={styles.description_list_element_right_side}> Kontrol 360</span></p>
                                        </li>
                                    </span>

                                    <li>
                                        <span><Image
                                            className={styles.projectimages}
                                            alt=""
                                            width={200}
                                            height={200}
                                            src={"/kd42.jpg"}></Image></span>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>Details Coming Soon</h1>
                                        </Link>
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






                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: N/A
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/logopaperwhite.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>N/A</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: N/A
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/logopaperwhite.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>N/A</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: N/A
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/logopaperwhite.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>N/A</h1>
                                        </Link>
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


                                <ol className={styles.list2}>
                                    <li className={styles.category}>
                                        <h1>
                                            Category: N/A
                                        </h1>
                                    </li>

                                    <span className={styles.description_list_element_wrapper}>
                                        <li className={styles.description_list_element}>

                                            <p>Status:<span className={styles.description_list_element_right_side}> Not Availabe Yet</span></p>
                                        </li>
                                    </span>

                                    <li className={styles.video_list_element}>
                                        <video ref={videoRef} autoPlay loop muted playsInline onLoad={handleVideoLoad}
                                            className={styles.video_tag}>
                                            <source
                                                src={'/logopaperwhite.mp4'}
                                                type={"video/mp4"}>
                                            </source>
                                        </video>
                                    </li>
                                    <li>
                                        <Link
                                            className={styles.view_link}
                                            href={'/'}>
                                            <h1 className={styles.view_link_header}>N/A</h1>
                                        </Link>
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

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )

}

export default Projects 

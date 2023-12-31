import React, { useEffect, useRef } from 'react';
import { Image } from "@chakra-ui/react";
import styles from "../../styles/components/pricing.module.css";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';



function Pricing() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = 'hidden';
    };
  }, []);


  const videoRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoad = () => {
    setVideoLoaded(true);
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


  const [displayUI, setDisplayUI] = useState('group_52374');
  const [clickedButton, setClickedButton] = useState("group_52374");
  const showUI1 = () => {
    setDisplayUI('group_52374');
    setClickedButton('group_52374');
  };

  const showUI2 = () => {
    setDisplayUI('group_52374_2');
    setClickedButton('group_52374_2');
  };


  const togglePopup = () => {
    const popup = document.getElementById("popup");
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }


  return (

    <>

      <Head>
        <link rel="stylesheet" href={"/styles/components/pricing.module.css"} />
      </Head>

      <div className={styles.pricing_page}>
        <div className={styles.pricing_page_wrapper}>
          <div className={styles.offered_list_and_top_main_header}>

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
                  Pricing Page
                </h1>
                <h1 className={styles.top_title2}>
                  Currently Only Web Dev Pricing is shown
                </h1>
                <h1 className={styles.top_title2}>
                  Front End | Back End | Full Stack | Graphic Design | 3D Modeling | Branding
                </h1>
                <Link href={"/"}>
                  <p className={styles.home_button}>Home
                  </p>
                </Link>
              </li>
            </ol>


            <div className={styles.pricing_headers_list_wrapper}>
              <ul className={styles.pricing_headers_list}>
                <Link href={'/static'}>
                  <li className={styles.tab_1}>
                    <p>Static</p>
                  </li>
                </Link>
                <span className={styles.seperator_line}></span>
                <Link href={'/dynamic'}>
                  <li className={styles.tab_2}>
                    <p>Dynamic</p>
                  </li>
                </Link>
                <span className={styles.seperator_line}></span>
                <Link href={'/dynamicplus'}>
                  <li className={styles.tab_3}>
                    <p>Dynamic Plus</p>
                  </li>
                </Link>
                <span className={styles.seperator_line}></span>
                <Link href={'/dynamicplusextra'}>
                  <li className={styles.tab_4}>
                    <p>Dynamic Plus Extra</p>
                  </li>
                </Link>
                <span className={styles.seperator_line}></span>
                <Link href={'/entreprise'}>
                  <li className={styles.tab_5}>
                    <p>Entreprise</p>
                  </li>
                </Link>
              </ul>
            </div>



            <div className={styles.compare}>
              <div className={styles.span_divider_parent}>
                <div class={styles.span_divider_wrapper}>
                  <span class={styles.span_1}></span>
                  <span class={styles.span_2}></span>
                  <span class={styles.span_3}></span>
                  <span class={styles.span_4}></span>
                  <span class={styles.span_5}></span>
                </div>
              </div>
              <div className={styles.we_offer}>
                <span
                ><span className={styles.we_offer_span}
                >Compare the quotes. </span
                  ><span className={styles.we_offer_span2}
                  >Better value, </span
                  ><span className={styles.we_offer_span3}>
                    More web space.</span
                  ></span
                >
              </div>
            </div>

            <div className={styles.pricing}>
              <div className={styles.pricing_wrapper}>

                <div className={styles.promo_regular_parent}>

                  <ul className={styles.promo_regular_wrapper}>

                    <div className={styles.promo_price}>
                      <button
                        className={`${styles.your_session_has_tim} ${clickedButton === 'group_52374' ? styles.clickedButton : ''}`} onClick={showUI1}
                      ><p>Promo Price</p></button>
                    </div>

                    <div className={styles.regular}>
                      <button
                        className={`${styles.your_session_has_tim2} ${clickedButton === 'group_52374_2' ? styles.clickedButton : ''}`}
                        onClick={showUI2}
                      ><p>Regular</p></button>
                    </div>
                  </ul>
                </div>


                <div className={styles.pricing_tab_groups_wrapper}>

                  <div className={styles.pricing_tab_group_1}>
                    {displayUI === 'group_52374' && (
                      <div className={styles.group_52374}>
                        <div className={styles.frame_405}>
                          <div className={styles.frame_405_wrapper}>

                            <div className={styles.frame_wrapper}>
                              <div className={styles.frame_402}>

                                <div className={styles.title}>
                                  <Link
                                    href={"/static"}
                                  >
                                    <h1 className={styles.your_session_has_tim3_promo}>Static</h1>
                                  </Link>
                                </div>
                                <div className={styles.plan_description}>
                                  <p>Great For Small Websites with minimal pages and function needs. Does not support Login functionalites or most server side functions of the like. Basic Contact Pages are allowed, written using PHP to recieve or send emails. For other questions, please contact me.</p>
                                </div>
                                <ol className={styles.list_wrapper}>
                                  <ul className={styles.percent_disclaimer}>
                                    <div className={styles.save_up_to}>*60% OFF!</div>
                                    <li className={styles.list_component2}>
                                    </li>
                                  </ul>

                                  <ul className={styles.sites_list}>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Deployment Sytem:</span>
                                      <span className={styles.list_description}>Node.Js</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Domain Purchase:</span>
                                      <span className={styles.list_description}>$20.00</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Monthly Running Fee:</span>
                                      <span className={styles.list_description}>$20.00</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Original Js Code:</span>
                                      <span className={styles.list_description}>Price Included</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Storage:</span>
                                      <span className={styles.list_description}>50GB NVMe</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Ram Size:</span>
                                      <span className={styles.list_description}>4GB</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Bandwith:</span>
                                      <span className={styles.list_description}>1TB</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Dedicated IP</span>
                                      <span className={styles.list_description}>Yes (Single Ip)</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Server Cores</span>
                                      <span className={styles.list_description}>1VCPU</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Server Speed</span>
                                      <span className={styles.list_description}>300 Mps</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*CMS:</span>
                                      <span className={styles.list_description}>Basic CMS/ Price Included</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Page Links:</span>
                                      <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                    </li>
                                    <li className={styles.list_component2}>
                                    </li>
                                  </ul>

                                </ol>
                              </div>


                              <div className={styles.frame_399}>
                                <div className={styles.frame_407}>
                                  <div className={styles.frame_398}>
                                    <svg
                                      className={styles.frame_397}
                                      width="11"
                                      height="14"
                                      viewBox="0 0 11 21"
                                      fill="#ffffff"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                        fill="#ffffff"
                                      />
                                    </svg>
                                  </div>
                                  <div className={styles.your_session_has_tim5}>300</div>
                                </div>
                                <Link href={"/static"}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}> Get Started
                                      <p className={styles.label_header}>Click For More Details</p> </button>
                                  </div>
                                </Link>
                              </div>

                            </div>
                          </div>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <div className={styles.recommended_div}>
                                  <div className={styles.your_session_has_tim8}>Recommended</div>
                                </div>
                                <Link
                                  href={"/dynamic"}
                                >
                                  <h1 className={styles.your_session_has_tim3_promo}>Dynamic</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Small to Medium size websites that may require the use of more ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.percent_disclaimer}>
                                  <div className={styles.save_up_to}>*60% OFF!</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$26.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>100GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>8GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>2TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>2VCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>450</div>
                              </div>
                              <Link href={"/dynamic"}>
                                <div className={styles.dynamic_get_started}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}>Get Started<p className={styles.label_header}>Click For More Details</p> </button>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>


                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link
                                  href={"/dynamicplus"}
                                >
                                  <h1 className={styles.your_session_has_tim3_promo}>Dynamic Plus</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Medium to Large size websites that may require the use of extra ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.percent_disclaimer}>
                                  <div className={styles.save_up_to}>*60% OFF!</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>


                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$42.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>200GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>16GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>4TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>4VCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>


                              </ol>
                            </div>

                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 `8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>550</div>
                              </div>
                              <Link href={"/dynamicplus"}>
                                <div className={styles.dynamic_get_started}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}> Get Started<p className={styles.label_header}>Click For More Details</p>  </button>
                                  </div>
                                </div>
                              </Link>
                            </div>

                          </div>


                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link
                                  href={"/dynamicplusextra"}
                                >
                                  <h1 className={styles.your_session_has_tim3_promo}>Dynamic Plus Extra</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Large sized websites and ecommerce sites that may require the use of extra ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.percent_disclaimer}>
                                  <div className={styles.save_up_to}>*60% OFF!</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>


                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$72.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>400GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>32GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>8TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>8vCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>600</div>
                              </div>
                              <Link href={"/dynamicplusextra"}>
                                <div className={styles.component_6}>
                                  <button className={styles.label}> Get Started<p className={styles.label_header}>Click For More Details</p>  </button>
                                </div></Link>
                            </div>
                          </div>



                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link href={"/entreprise"}>
                                  <h1 className={styles.your_session_has_tim3_promo}>Entreprise</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>This plan is for those which some of the specs do not match what is offered already. Please contact for a custom plan tailored just for you.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.percent_disclaimer}>
                                  <div className={styles.save_up_to}>*60% OFF!</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Name:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>CMS Included, Customizable</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}>15, then $75.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>


                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>Quote</div>
                              </div>
                              <Link href={"/entreprise"}>
                                <div className={styles.component_6}>
                                  <button>
                                    <div className={styles.label}> Get Started </div><p className={styles.label_header}>Click For More Details</p> </button>
                                </div>
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>



                  <div className={styles.pricing_tab_group_2}>
                    {displayUI === 'group_52374_2' && (
                      <div className={styles.group_52374_2}>
                        <div className={styles.frame_405}>
                          <div className={styles.frame_405_wrapper}>

                            <div className={styles.frame_wrapper}>
                              <div className={styles.frame_402}>

                                <div className={styles.title}>
                                  <Link
                                    href={"/static"}
                                  >
                                    <h1 className={styles.your_session_has_tim3_regular}>Static</h1>
                                  </Link>
                                </div>
                                <div className={styles.plan_description}>
                                  <p>Great For Small Websites with minimal pages and function needs. Does not support Login functionalites or most server side functions of the like. Basic Contact Pages are allowed, written using PHP to recieve or send emails. For other questions, please contact me.</p>
                                </div>
                                <ol className={styles.list_wrapper}>
                                  <ul className={styles.regular_disclaimer}>
                                    <div className={styles.save_up_to}>*Regular Price</div>
                                    <li className={styles.list_component2}>
                                    </li>
                                  </ul>



                                  <ul className={styles.sites_list}>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Deployment Sytem:</span>
                                      <span className={styles.list_description}>Node.Js</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Domain Purchase:</span>
                                      <span className={styles.list_description}>$20.00</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Monthly Running Fee:</span>
                                      <span className={styles.list_description}>$20.00</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Original Js Code:</span>
                                      <span className={styles.list_description}>Price Included</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Storage:</span>
                                      <span className={styles.list_description}>50GB NVMe</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Ram Size:</span>
                                      <span className={styles.list_description}>4GB</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Bandwith:</span>
                                      <span className={styles.list_description}>1TB</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Dedicated IP</span>
                                      <span className={styles.list_description}>Yes (Single Ip)</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Server Cores</span>
                                      <span className={styles.list_description}>1VCPU</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Server Speed</span>
                                      <span className={styles.list_description}>300 Mps</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*CMS:</span>
                                      <span className={styles.list_description}>Basic CMS/ Price Included</span>
                                    </li>
                                    <li className={styles.list_component}>
                                      <span className={styles.list_title}>*Page Links:</span>
                                      <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                    </li>
                                    <li className={styles.list_component2}>
                                    </li>
                                  </ul>


                                </ol>
                              </div>


                              <div className={styles.frame_399}>
                                <div className={styles.frame_407}>
                                  <div className={styles.frame_398}>
                                    <svg
                                      className={styles.frame_397}
                                      width="11"
                                      height="14"
                                      viewBox="0 0 11 21"
                                      fill="#ffffff"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                        fill="#ffffff"
                                      />
                                    </svg>
                                  </div>
                                  <div className={styles.your_session_has_tim5}>500</div>
                                </div>
                                <Link href={"/static"}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}> Get Started  <p className={styles.label_header}>Click For More Details</p> </button>
                                  </div>
                                </Link>
                              </div>


                            </div>
                          </div>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <div className={styles.recommended_div}>
                                  <div className={styles.your_session_has_tim8}>Recommended</div>
                                </div>
                                <Link
                                  href={"/dynamic"}
                                >
                                  <h1 className={styles.your_session_has_tim3_regular}>Dynamic</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Small to Medium size websites that may require the use of more ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$26.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>100GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>8GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>2TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>2VCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>750</div>
                              </div>
                              <Link href={"/dynamic"}>
                                <div className={styles.dynamic_get_started}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}>Get Started<p className={styles.label_header}>Click For More Details</p>  </button>
                                  </div>
                                </div>
                              </Link>
                            </div>

                          </div>


                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link
                                  href={"/dynamicplus"}
                                >
                                  <h1 className={styles.your_session_has_tim3_regular}>Dynamic Plus</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Medium to Large size websites that may require the use of extra ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$42.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>200GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>16GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>4TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>4VCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>



                              </ol>
                            </div>

                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 `8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>917</div>
                              </div>
                              <Link href={"/dynamicplus"}>
                                <div className={styles.dynamic_get_started}>
                                  <div className={styles.component_6}>
                                    <button className={styles.label}>Get Started<p className={styles.label_header}>Click For More Details</p>  </button>
                                  </div>
                                </div>
                              </Link>
                            </div>

                          </div>


                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link
                                  href={"/dynamicplusextra"}
                                >
                                  <h1 className={styles.your_session_has_tim3_regular}>Dynamic Plus Extra</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>Great For Large sized websites and ecommerce sites that may require the use of extra ram and storage space. Full server side website features available.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Purchase:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>$72.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage:</span>
                                    <span className={styles.list_description}>400GB NVMe</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Size:</span>
                                    <span className={styles.list_description}>32GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>8TB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Dedicated IP</span>
                                    <span className={styles.list_description}>Yes (Single Ip)</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Cores</span>
                                    <span className={styles.list_description}>8vCPU</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Server Speed</span>
                                    <span className={styles.list_description}>300 Mps</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>Customizable CMS/ Price Included</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links:</span>
                                    <span className={styles.list_description}>7, then $50.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>1,000</div>
                              </div>
                              <Link href={"/dynamicplusextra"}>
                                <div className={styles.component_6}>
                                  <button className={styles.label}> Get Started<p className={styles.label_header}>Click For More Details</p>  </button>
                                </div>
                              </Link>
                            </div>
                          </div>



                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                              <div className={styles.title}>
                                <Link href={"/entreprise"}>
                                  <h1 className={styles.your_session_has_tim3_promo}>Entreprise</h1>
                                </Link>
                              </div>
                              <div className={styles.plan_description}>
                                <p>This plan is for those which some of the specs do not match what is offered already. Please contact for a custom plan tailored just for you.</p>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_description}>Running on a Top Tier Hostinger VPS</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Domain Name:</span>
                                    <span className={styles.list_description}>$20.00</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Monthly Running Fee:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Contact</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>CMS Included, Customizable</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}>15, then $75.00/Xtra Page</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>Quote</div>
                              </div>
                              <Link href={"/entreprise"}>
                                <div className={styles.component_6}>
                                  <button>
                                    <div className={styles.label}> Get Started<p className={styles.label_header}>Click For More Details</p> </div></button>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>



            <ol className={styles.top_main_header_and_paragraphs} >
              <ul className={styles.top_main_header}>
                <li>
                  <h1 className={styles.top_main_header_header1}>Web Dev Pricing</h1>
                </li>
                <li>
                  <h2 className={styles.top_main_header_header2}>Deals That Make Sense</h2>
                </li>
                <li>
                  <Link className={styles.contact_page_link} href={'/contact'}><h2 className={styles.top_main_header_button}>Contact</h2></Link>
                </li>
              </ul>
              <ul className={styles.top_main_paragraphs}>
                <li>
                  <Image
                    className={styles.top_main_icons_target}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/target.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>Picking and Choosing</p>
                  <p className={styles.top_main_header_paragraph2}>For Individuals and Businesses alike, if you need help picking a plan, send a request through the <Link className={styles.contact_page_link} href={"/contact"}>Contact</Link> page. Otherwise choose a plan, and click on &quot;Get Started&quot; to send me an order. This is not a payment gate; so please allow  1-2 business days for a reply first, before we can get started.</p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_chip}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/chip.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>Payments</p>
                  <p className={styles.top_main_header_paragraph2}>You don&apos;t pay anything until we&apos;ve got your plans sorted out. This means that until you have the rough design in your hands, you don&apos;t have to worry about spending a dime. Click <button onClick={togglePopup}> <p className={styles.contact_page_link}> Rough Designs</p></button> for more information.</p>

                  <p id="popup" className={styles.popup}>
                    <p className={styles.popupContent}>
                      Rough Design: It consists of a visual blueprint, depicting the basic elements, design and layout of your project. Your rough design comes free of charge. You may request html, javascript , css, png, pdf, doc, .blend , .wav, mp3, type files and more. Please alow up to 3 business days for a rough design to be send out back to you.
                    </p>
                    <button onClick={togglePopup}> <p className={styles.button_toggle_close_paragraph}>Close </p></button>
                  </p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_mountain}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/mountain.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>Premium plans</p>
                  <p className={styles.top_main_header_paragraph2}> <Link className={styles.contact_page_link} href={"/entreprise"}> Premium </Link> plans for those that need more. Cover yourself with at least 8GB of ram space.</p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_features}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/gears.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>Features</p>
                  <p className={styles.top_main_header_paragraph2}>Get all the features listed, and more. Please send any specian requests through the <Link className={styles.contact_page_link} href={"/contact"}>contact</Link> page</p>
                </li>
              </ul>
            </ol>


            <div className={styles.top_main_header_group}>

              <ol className={styles.top_main_header_and_paragraphs_squared} >
                <ul className={styles.top_main_header}>
                  <li>
                    <h1 className={styles.top_main_header_header1}>Fully Featured</h1>
                  </li>
                  <li>
                    <h2 className={styles.top_main_header_header2}> Stats Viewer</h2>
                  </li>
                </ul>
                <ul className={styles.top_main_paragraphs}>
                  <li className={styles.arrow_and_title_and_paragraph}>
                    <span className={styles.arrow_and_title}>
                      <Image
                        className={styles.top_main_icons_arrow}
                        width="30px"
                        height="30px"
                        alt="logo"
                        src="/forwardarrow.png"
                      >
                      </Image>
                      <p className={styles.top_main_header_paragraph1}>Stats Viewer</p>
                    </span>
                    <p className={styles.top_main_header_paragraph2}>See, your database usage, speed insights, and other metrics, inlcuding SEO score.</p>
                  </li>
                  <li className={styles.arrow_and_title_and_paragraph}>
                    <span className={styles.arrow_and_title}>
                      <Image
                        className={styles.top_main_icons_arrow}
                        width="30px"
                        height="30px"
                        alt="logo"
                        src="/forwardarrow.png"
                      >
                      </Image>
                      <p className={styles.top_main_header_paragraph1}>3-5 Day Turn-Around Time</p>
                    </span>
                    <p className={styles.top_main_header_paragraph2}>Full Deployment details, and updates.</p>
                  </li>
                </ul>
              </ol>

              <ol className={styles.top_main_header_and_paragraphs_squared} >
                <ul className={styles.top_main_header}>
                  <li>
                    <h1 className={styles.top_main_header_header1}>Multi Platform</h1>
                  </li>
                  <li>
                    <h2 className={styles.top_main_header_header2}><Link className={styles.contact_page_link} href={"/vercel"}>VERCEL</Link> / <Link className={styles.contact_page_link} href={"/netlify"}>NETLIFY</Link></h2>
                  </li>
                </ul>
                <ul className={styles.top_main_paragraphs}>
                  <li>
                    <span className={styles.arrow_and_title}>
                      <Image
                        className={styles.top_main_icons_arrow}
                        width="30px"
                        height="30px"
                        alt="logo"
                        src="/forwardarrow.png"
                      >
                      </Image>
                      <p className={styles.top_main_header_paragraph1}>Take Your Pick</p>
                    </span>
                    <p className={styles.top_main_header_paragraph2}>Pick a paltform you already know or get placed under Vercel, Netlify, or any platform you may already know or use.</p>
                  </li>
                  <li>
                    <span className={styles.arrow_and_title}>
                      <Image
                        className={styles.top_main_icons_arrow}
                        width="30px"
                        height="30px"
                        alt="logo"
                        src="/forwardarrow.png"
                      >
                      </Image>
                      <p className={styles.top_main_header_paragraph1}>24/7 Stats Viewer</p>
                    </span>

                    <p className={styles.top_main_header_paragraph2}>Dashboard Access any time. View your website details such as usage on: Bandwith, Postgres Storage, Function execution data, user data, and much more.</p>
                  </li>
                </ul>
              </ol>
            </div>

            <ol className={styles.top_main_header_and_paragraphs} >
              <ul className={styles.top_main_header}>
                <li>
                  <h1 className={styles.top_main_header_header1}>How It Works</h1>
                </li>
                <li>
                  <h2 className={styles.top_main_header_header2}> Choosing</h2>
                </li>
              </ul>
              <ul className={styles.top_main_paragraphs}>
                <li>
                  <Image
                    className={styles.top_main_icons_arrow}
                    width="30px"
                    height="10px"
                    alt="logo"
                    src="/flyingarrow.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>1. Domains </p>
                  <p className={styles.top_main_header_paragraph2}>Pick a name for your your website, and if it is available, you can select it as your personal domain. Free unused domains are usually up for purchase for around 18 Dollars.</p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_arrow}
                    width="30px"
                    height="10px"
                    alt="logo"
                    src="/flyingarrow.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>2. Type of website </p>
                  <p className={styles.top_main_header_paragraph2}>Websites come in three main catagories: Static, Dynamic, and Ecommerce. They can be confusing at first to understand, but their differences play a major role in both pricing and actual web functionality. Click <Link className={styles.contact_page_link} href={'/websitetypes'}>&quot;Websites&quot;</Link> for more details. If you don&apos;t know which one your site falls under or is better for your needs, go to the <Link className={styles.list_component} href={'/contact'}>Contact Page.</Link> Alternatively you can mention this in the contact page with your request so that I can send you a small questionaire to fill out that will determine the type of website you may need.</p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_arrow}
                    width="30px"
                    height="10px"
                    alt="logo"
                    src="/flyingarrow.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>3. Bandwith -Incoming & Outgoing </p>
                  <p className={styles.top_main_header_paragraph2}>Determine the level of bandwidth you know your site will need. If you don&apos;t know the amount of usage you will need, I will test your website for one billing cycle to determine your average usage amount, then fit you on the proper plan. Click <Link className={styles.contact_page_link} href={"/pricing"} >&quot;Usage&quot;</Link> for more information.</p>
                </li>
                <li>
                  <Image
                    className={styles.top_main_icons_arrow}
                    width="30px"
                    height="10px"
                    alt="logo"
                    src="/flyingarrow.png"
                  >
                  </Image>
                  <p className={styles.top_main_header_paragraph1}>Features</p>
                  <p className={styles.top_main_header_paragraph2}>Get all the features listed, and more. Please send any specian requests through the <Link className={styles.contact_page_link} href={"/contact"}>contact</Link> page</p>
                </li>
              </ul>
            </ol>


            <ul className={styles.offered_list}>
              <Link href={"/services"}>
                <li className={styles.offered_item}>
                  <Image
                    className={styles.logo_ssl_logo}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/bgwhole7.jpg"
                  >
                  </Image>
                </li>
                <Link href={"/sslsecurity"}>
                  <p className={styles.more_tag}> SSL Security</p>
                </Link>              </Link>


              <Link href={"/services"}>
                <li className={styles.offered_item}>
                  <Image
                    className={styles.logo_ssl_logo}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/bgwhole7.jpg"
                  >
                  </Image>
                </li>
                <Link href={"/privatedomains"}>
                  <p className={styles.more_tag}>Private Domains</p>
                </Link>              </Link>

              <Link href={"/services"}>
                <li className={styles.offered_item}>
                  <Image
                    className={styles.logo_ssl_logo}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/bgwhole7.jpg"
                  >
                  </Image>
                </li>
                <Link
                  href={"/originalcode"}>
                  <p className={styles.more_tag}> Copyright Code</p>
                </Link>              </Link>

              <Link href={"/services"}>
                <li className={styles.offered_item}>
                  <Image
                    className={styles.logo_ssl_logo}
                    width={50}
                    height={50}
                    alt="logo"
                    src="/bgwhole7.jpg"
                  >
                  </Image>
                </li>
                <p className={styles.more_tag}>Payment Gates</p>
              </Link>

            </ul>
          </div>


        </div>
      </div>

    </>

  )
}

export default Pricing;



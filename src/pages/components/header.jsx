import styles from "../../styles/components/header.module.css";
import xsmStyles from "../../styles/components/header_xsm_mobile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Loading from './loading';


function Header() {
  const [isCssLoaded, setIsCssLoaded] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCssLoaded(true);
    }, 2000);
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [promoVisible, setpromoVisible] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { data: session } = useSession()


  const promoCloseButtonClick = () => {
    setpromoVisible(false); // Set isVisible to false to hide the div
  };



  return (
    <>

      <Head>
        <title > Astrum Stellar</title>

        <link className={styles.favicon} height={100} width={100} rel="icon" href="/logoblack.ico" type="image/x-icon" />
        <link rel="stylesheet" href={"/styles/components/header.module.css"} />
        <link rel="stylesheet" href={"/styles/components/header_xsm_mobile.module.css"} />
      </Head>

      {!isCssLoaded && <Loading />} {/* Show loading screen while CSS is not loaded */}
      {isCssLoaded && (

        <div className={`${styles.parent} ${xsmStyles.parent_xsm}`}>
          <div className={`${styles.parent_wrapper} ${xsmStyles.parent_wrapper_xsm} ${isVisible ? '' : styles.parent_wrapper_margin}`}>
            <ol className={`${styles.logo__signature_and_button_parent} ${xsmStyles.logo__signature_and_button_parent_xsm}`}>


              <ul className={`${styles.logo_and_signature} ${xsmStyles.logo_and_signature_xsm}`}>
                <li className={`${styles.logo_item} ${xsmStyles.logo_item_xsm}`}>
                  <Link
                    href={"/"}>
                    <Image
                      className={`${styles.header_logo} ${xsmStyles.header_logo_xsm}`}
                      alt=""
                      width={50}
                      height={50}
                      src={"/logored.png"}
                    >
                    </Image>
                  </Link>
                </li>

                <li className={styles.signature_item}>
                  <Link href={"/"}>
                    <Image
                      className={`${styles.header_signature} ${xsmStyles.header_signature_xsm}`} aria-label="signature"
                      alt=""
                      width={200}
                      height={200}
                      src={"/signaturewhite.png"}
                    >
                    </Image>
                  </Link>
                </li>
              </ul>



              <ol className={`${styles.buttons} ${xsmStyles.buttons_xsm}`}>
                <ul className={styles.login_logout_list}>
                  {session ? (
                    <>

                      <li className={styles.register_button_item}>
                        <button className={`${styles.logout_button_item} ${xsmStyles.register_button_xsm}`} onClick={() => signOut('github')()}>
                          <p>Logout</p>
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={styles.logout_button_item}>
                        <button className={`${styles.login_button} ${xsmStyles.login_button_xsm}`} onClick={() => signIn('google')}>
                          <p>Google signIn</p>
                        </button>
                      </li>
                      <li className={styles.logout_button_item}>
                        <button className={`${styles.login_button} ${xsmStyles.login_button_xsm}`} onClick={() => signIn('github')}>
                          <p>GitHub signIn</p>
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </ol>
            </ol>
            <ol className={styles.menu_bars_wrapper}>
              <ul className={`${styles.first_menubar} ${xsmStyles.first_menubar_xsm}`} style={{ display: isVisible ? 'inline-flex' : 'none' }}>
                <li className={styles.first_menubar_item}>
                  <Link href={'/info/privatedomains'}>
                    <p className={styles.promo1}>
                      Private Domains?
                    </p>
                  </Link>
                </li>
                <li className={styles.first_menubar_item}>
                  <Link href={'/info/applicationinterfaces'}>
                    <p className={styles.promo2}>
                      Application Interfaces?
                    </p>
                  </Link>
                </li>
                <li className={styles.first_menubar_item}>
                  <Link href={'/info/threedrenders'}>
                    <p className={styles.promo3}>
                      3D Renders?
                    </p>
                  </Link>
                </li>
                <li className={styles.first_menubar_item}>
                  <Link href={'/info/vercel'}>
                    <p className={styles.promo4}>
                      Vercel?
                    </p>
                  </Link>
                </li>
                <li className={styles.first_menubar_item}>
                  <Link href={'/info/hostgatorvercel'}>
                    <p className={styles.promo4}>
                      Hostgator/Bluehost?
                    </p>
                  </Link>
                </li>

              </ul>


              <ul className={`${styles.second_menubar} ${xsmStyles.second_menubar_xsm}`}>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="/"
                  >
                    <p className={styles.second_menubar_item}>Home</p>
                  </Link >
                </li>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="/services"
                  >
                    <p className={styles.second_menubar_item}>Services</p>
                  </Link>
                </li>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="/pricing"
                  >
                    <p className={styles.second_menubar_item}>Pricing</p>
                  </Link>
                </li>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="/projects"
                  >
                    <p className={styles.second_menubar_item}>Projects</p>
                  </Link>
                </li>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="/contact"
                  >
                    <p className={styles.second_menubar_item}>Contact Me</p>
                  </Link>
                </li>

                <li className={styles.menuitem}>
                  <Link legacyBehavior
                    href="https://github.com/deodagee?tab=repositories"
                  >
                    <p className={styles.second_menubar_item}>Source Code</p>
                  </Link>
                </li>

              </ul>

              {session ? (
                <>
                  <div className={`${styles.promo_message_first} ${xsmStyles.promo_message_first_xsm}`} style={{ display: promoVisible ? 'inline-flex' : 'none' }}>
                    <p>Congratulations! You&apos;ve earned a higher rebate for signing in. Mention promo code: <span className={styles.promo_code}>&quot;STELLAR19950202&quot; </span> when you send your request to get 70% off</p>
                    <button className={styles.close_button} onClick={promoCloseButtonClick}>
                      <div>
                        <Image
                          className={styles.close_button_image}
                          alt="closebutton"
                          width={100}
                          height={100}
                          src={"/closebutton.png"}
                        >
                        </Image>
                      </div>
                      <div>
                        <p>
                          Close
                        </p>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className={styles.nothing}>
                </div>
              )}
              <div className={`${styles.promo_message_first} ${xsmStyles.promo_message_first_xsm}`} style={{ display: promoVisible ? 'inline-flex' : 'none' }}>
                <h1>Thank you for visiting the site. I am currently renovating and changing things up so please excuse the frequently changing Ui. If you&apos;re ready to purchase, you can absolutely get 60% off everything I&apos;ve priced on the site. Log in to take part of the 70% promotions. This is only for a limited time, I will change prices back once enough clients have taken into the promotion.</h1>
                <button className={styles.close_button} onClick={promoCloseButtonClick}><div>
                        <Image
                          className={styles.close_button_image}
                          alt="closebutton"
                          width={100}
                          height={100}
                          src={"/closebutton.png"}
                        >
                        </Image>
                      </div>
                      <div>
                        <p>
                          Close
                        </p>
                      </div>
                    </button>
              </div>
            </ol>


          </div>
        </div>
      )}
    </>
  )

}

export default Header;

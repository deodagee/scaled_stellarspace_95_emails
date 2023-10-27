import styles from "../../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, useEffect , useRef } from 'react';
import Head from 'next/head';
import Loading from './loading';


function Header() {
  const menuRef = useRef(null);
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
  const [menuVisible, setmenuVisible] = useState(false);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside the menu, hide the menu
        setmenuVisible(false);
      }
    };

    // Attach the event listener to the whole document
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);




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
    setpromoVisible(false);
  };



  const hideMenu = () => {
    setmenuVisible(false);
  };
  const showMenu = () => {
    setmenuVisible(true);
  };



  return (
    <>

      <Head>
        <title > Astrum Stellar</title>

        <link className={styles.favicon} height={50} width={30} rel="icon" href="/logoico.ico" type="image/x-icon" />
        <link rel="stylesheet" href={"/styles/components/header.module.css"} />
      </Head>

      {!isCssLoaded && <Loading />} {/* Show loading screen while CSS is not loaded */}
      {isCssLoaded && (

        <div ref={menuRef} className={styles.parent}>
          <div className={`${styles.parent_wrapper} ${isVisible ? '' : styles.parent_wrapper_margin}`}>
            <ol className={styles.logo__signature_and_button_parent}>


              <ul className={styles.logo_and_signature}>

                <li className={styles.logo_item}>
                  <Link
                    href={"/"}>
                    <Image
                      className={styles.header_logo}
                      alt=""
                      width={50}
                      height={50}
                      src={"/logoico.png"}
                    >
                    </Image>
                  </Link>
                </li>

                <li className={styles.signature_item}>
                  <Link href={"/"}>
                    <Image
                      className={styles.header_signature} aria-label="signature"
                      alt=""
                      width={200}
                      height={200}
                      src={"/signaturewhite.png"}
                    >
                    </Image>
                  </Link>
                </li>
              </ul>

              <ul className={styles.buttons}>
                <li className={styles.login_logout_list_item}>
                  {session ? (
                    <>
                      <li className={styles.avatar_and_tag}>
                        <div className={styles.login_avatar} >
                          <Image
                            className={styles.login_avatar} aria-label="loginavatar"
                            alt="login_avatar"
                            width={100}
                            height={100}
                            src={"/loginavatar.png"}
                          >
                          </Image>
                        </div>
                        <div>
                          <button className={styles.login_button} onClick={() => signOut('github')()}>
                            <p>Logout</p>
                          </button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={styles.avatar_and_tag}>
                      <button className={styles.login_button} onClick={() => signIn('google')('')}>
                        <Image
                          className={styles.login_avatar} aria-label="loginavatar"
                          alt="login_avatar"
                          width={100}
                          height={100}
                          src={"/loginavatar.png"}
                        >
                        </Image>
                          <p>Sign In</p>
                        </button>
                      </li>
                    </>
                  )}
                </li>
                <li>
                  <button className={styles.menu_toggler_button}
                    onClick={menuVisible ? hideMenu : showMenu} >
                    <Image
                      className={styles.menu_toggler_image} aria-label="menutoggler"
                      alt="menu_toggler"
                      width={100}
                      height={100}
                      src={"/menubarblue.png"}
                    >
                    </Image>
                  </button>
                </li>
                <ul className={styles.first_menubar} style={{ display: menuVisible ? '' : 'none' }}>
                  <li className={styles.first_menubar_item}>
                    <p className={styles.menulist_title}>
                      SITE MENU
                    </p>
                  </li>

                  <li >
                    <Link className={styles.first_menubar_item} href={'/'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Home
                      </p>
                    </Link>
                  </li>


                  <li >
                    <Link className={styles.first_menubar_item} href={'/services'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Services
                      </p>
                    </Link>
                  </li>

                  <li >
                    <Link className={styles.first_menubar_item} href={'/pricing'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Pricing
                      </p>
                    </Link>
                  </li>

                  <li >
                    <Link className={styles.first_menubar_item} href={'/projects'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Projects
                      </p>
                    </Link>
                  </li>


                  <li >
                    <Link className={styles.first_menubar_item} href={'/contact'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Contact Me
                      </p>
                    </Link>
                  </li>

                  <li >
                    <Link className={styles.first_menubar_item} href={'https://github.com/deodagee?tab=repositories'}>

                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Source Code
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/privatedomains'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo1}>
                        Private Domains?
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/applicationinterfaces'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo2}>
                        Application Interfaces?
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/threedrenders'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo3}>
                        3D Renders?
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/vercel'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Vercel?
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/hostgatorvercel'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        Hostgator/Bluehost?
                      </p>
                    </Link>
                  </li>
                  <li >
                    <Link className={styles.first_menubar_item} href={'/info/faq'}>
                      <Image
                        className={styles.menu_chevron_image} aria-label="menutoggler"
                        alt="menu_toggler"
                        width={100}
                        height={100}
                        src={"/chevron.png"}
                      >
                      </Image>
                      <p className={styles.promo4}>
                        FAQ
                      </p>
                    </Link>
                  </li>

                </ul>
              </ul>
            </ol>

            <ol className={styles.promos}>
              {session ? (
                <>
                  <div className={styles.promo_message_first} style={{ display: promoVisible ? 'block' : 'none' }}>
                    <p>Congratulations! You&apos;ve earned a higher rebate for signing in. Mention promo code: <span className={styles.promo_code}>&quot;STELLAR19950202&quot; </span> when you send your request to get 70% off</p>
                  </div>
                </>
              ) : (
                <div className={styles.nothing}>
                </div>
              )}
            </ol>

          </div>
        </div>
      )}
    </>
  )

}

export default Header;
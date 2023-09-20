import styles from "../../styles/components/header.module.css";
import xsmStyles from "../../styles/components/header_xsm_mobile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, useEffect } from 'react';

function Header() {

  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <>
    
      <div className={`${styles.parent} ${xsmStyles.parent_xsm}`}>
      <div className={`${styles.parent_wrapper} ${xsmStyles.parent_wrapper_xsm} ${isVisible ? '' : styles.parent_wrapper_margin}`}>
                          <ol className={`${styles.logo__signature_and_button_parent} ${xsmStyles.logo__signature_and_button_parent_xsm}`}>


            <ul className={`${styles.logo_and_signature} ${xsmStyles.logo_and_signature_xsm}`}>
              <li className={`${styles.logo_item} ${xsmStyles.logo_item_xsm}`}>
                <Image
                  className={`${styles.header_logo} ${xsmStyles.header_logo_xsm}`} alt="logo"
                  width={50}
                  height={50}
                  src={"/logored.png"}
                >
                </Image>
              </li>

              <li className={styles.signature_item}>
                <Image
                  className={`${styles.header_signature} ${xsmStyles.header_signature_xsm}`} aria-label="signature"
                  alt="signature"
                  width={90}
                  height={90}
                  src={"/signaturewhite.png"}
                >
                </Image>
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
                <Link href={'/sources'}>
                  <p className={styles.promo1}>
                    Private Domains
                  </p>
                </Link>
              </li>
              <li className={styles.first_menubar_item}>
                <Link href={'/sources'}>
                  <p className={styles.promo2}>
                    Dall-E Engines
                  </p>
                </Link>
              </li>
              <li className={styles.first_menubar_item}>
              <Link href={'/sources'}>
                <p className={styles.promo3}>
                  3D Renders
                </p>
                </Link>
              </li>
              <li className={styles.first_menubar_item}>
              <Link href={'/sources'}>
                <p className={styles.promo4}>
                  Wix?
                </p>
                </Link>
              </li>
              <li className={styles.first_menubar_item}>
              <Link href={'/sources'}>
                <p className={styles.promo4}>
                  Hostgator?
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
          </ol>

        </div>
      </div>
    </>
  )

}

export default Header;
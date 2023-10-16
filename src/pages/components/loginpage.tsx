import React from "react";
import styles from '../../styles/components/loginpage.module.css';
import { useSession, signIn, signOut } from "next-auth/react"

function LoginPage() {
    const { data: session } = useSession()



    return (
        <>
            <div>
                <ul>
            <li className={styles.logout_button_item}>
                        <button className={styles.login_button} onClick={() => signIn('google')}>
                          <p>Google signIn</p>
                        </button>
                      </li>
                      <li className={styles.logout_button_item}>
                        <button  className={styles.login_button} onClick={() => signIn('github')}>
                          <p>GitHub signIn</p>
                        </button>
                      </li>
                      </ul>
            </div>
        </>
    )
};
export default LoginPage;
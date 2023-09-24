import React from "react";
import styles from "../../../styles/components/websitetypes.module.css"
function WebsiteTypes() {

    return (

        <>
            <div className={styles.website_types_whole}>

                <div className={styles.website_types_wrapper}>

                    <ol className={styles.list_wrapper_first}>
                        <li className={styles.list_element_first}>
                            <h1 className={styles.title_element}>Types of Websites</h1>
                        </li>
                    </ol>

                    <ol className={styles.list_wrapper_second}>
                        <li className={styles.list_element_second}>
                            <h2 className={styles.description}>How to Decide</h2>
                        </li>
                    </ol>

                    <ol className={styles.list_wrapper_third}>
                        <li className={styles.mini_titles}>
                            <h2>Static Websites</h2>
                            <h1>Features:</h1>
                        </li>
                        <li className={styles.list_element_third}>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>3. <span></span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>5. <span></span></p>
                        </li>
                        <li className={styles.mini_titles}>
                            <h2>Dynamic Websites</h2>
                            <h1>Features:</h1>
                        </li>
                        <li className={styles.list_element_third}>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>2. <span></span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>4. <span></span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                        </li>
                        <li className={styles.mini_titles}>
                            <h2>Ecommerce Websites</h2>
                            <h1>Features:</h1>
                        </li>
                        <li className={styles.list_element_third}>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>2. <span></span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                            <p>4. <span></span></p>
                            <p>1. <span>No Server Side Code</span>
                                <span className={styles.details}>Details</span></p>
                        </li>
                    </ol>
                </div>
            </div>

        </>
    )
}
export default WebsiteTypes;
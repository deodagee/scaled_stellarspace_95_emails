import React from "react";
import Image from "next/image";
import styles from "../../styles/components/imagespage.module.css"
import Link from "next/link";

import { useState } from "react";

function ImagesPage() {

    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (

        <>
            <div className={styles.images_page_parent}>
                <div>
                    <ul className={styles.top_piece}>

                        <h1 className={styles.top_title}>
                            Images Section
                        </h1>


                    </ul>

                    <ol className={styles.rectangle_images_parent}>
                        <ul className={styles.rectangle_images_wrapper}>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        alt=""
                                        src={"/pagestill.png"}
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>

                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>

                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>

                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        alt=""
                                        width={200}
                                        height={200}
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>

                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        width={200}
                                        height={200}
                                        alt=""
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>

                            <li className={styles.rectangle_image_item}>
                                <Link
                                    href={"/imagespage"}>
                                    <Image className={styles.rectangle_image}
                                        src={"/pagestill.png"}
                                        width={200}
                                        height={200}
                                        alt=""
                                        quality={100}
                                        onLoad={handleImageLoad}
                                    ></Image>
                                </Link>
                            </li>
                        </ul>
                    </ol>




                </div>
            </div>
        </>
    )
};

export default ImagesPage
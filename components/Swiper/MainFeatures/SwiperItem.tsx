import React from "react";
import Image from "next/image";
import styles from "./MainFeatures.module.css"

const SwiperItem = ({ imageSrc}: any, {imageAlt }: any) => {
	return (
		<div className={styles.swiperItem}>
			<div className={`mx-2 ${styles.swiperImgMobile}`}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					draggable={false}
					height={500}
				/>
			</div>
			<div className={`mx-2 ${styles.swiperImgLarge}`}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					draggable={false}
					height={500}
				/>
			</div>
		</div>
	);
}

export default SwiperItem;
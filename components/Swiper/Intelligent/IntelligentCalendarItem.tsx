import React from "react";
import Image from "next/image";
import styles from './Intelligent.module.css'

const IntelligentCalendarItem = ({imageSrc}: any, {imageAlt}: any ) => {
	return (
		<div className={styles.intelligentSwiperItem}>
			<div className="">
				<Image
					src={imageSrc}
					alt={imageAlt}
					className="swiper-img"
					draggable={false}
					height={500}
				/>
			</div>
		</div>
	);
}

export default IntelligentCalendarItem;
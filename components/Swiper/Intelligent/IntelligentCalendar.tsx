import React, { useState, useRef, useEffect } from "react";
import { getRefValue, useStateRef } from "../hooks";
import { getTouchEventData } from "../dom";
import IntelligentCalendarItem from "./IntelligentCalendarItem";
import styles from './Intelligent.module.css'

const MIN_SWIPE_REQUIRED = 40;

const IntelligentCalendar = ( {items}: any ) => {

	const containerRef = useRef(null);
	const containerWidthRef = useRef(0);
	const minOffsetXRef = useRef(0);
	const currentOffsetXRef = useRef(0);
	const startXRef = useRef(0);
	const minOffsetYRef = useRef(0);
	const currentOffsetYRef = useRef(0);
	const startYRef = useRef(0);
	const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
	const [isSwiping, setIsSwiping] = useState(false);
	const [visible, setVisible] = useState(false)
	const [currentIdx, setCurrentIdx] = useState(0);

	const onTouchMove = (e: any) => {
		const currentX = getTouchEventData(e).clientX;
		const diff = getRefValue(startXRef) - currentX;
		let newOffsetX = getRefValue(currentOffsetXRef) - diff;

		const maxOffsetX = 0;
		const minOffsetX = getRefValue(minOffsetXRef);

		if (newOffsetX > maxOffsetX) {
			newOffsetX = maxOffsetX;
		}

		if (newOffsetX < minOffsetX) {
			newOffsetX = minOffsetX;
		}

		setOffsetX(newOffsetX);
	};
	const onTouchEnd = () => {
		const currentOffsetX = getRefValue(currentOffsetXRef);
		const containerWidth = getRefValue(containerWidthRef);
		let newOffsetX = getRefValue(offsetXRef);

		const diff = currentOffsetX - newOffsetX;

		// we need to check difference in absolute/positive value (if diff is more than 40px)
		if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
			if (diff > 0) {
				// swipe to the right if diff is positive
				newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
			} else {
				// swipe to the left if diff is negative
				newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
			}
		} else {
			// remain in the current image
			newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
		}

		setIsSwiping(false);
		setOffsetX(newOffsetX);
		setCurrentIdx(Math.abs(newOffsetX / containerWidth));

		window.removeEventListener("touchend", onTouchEnd);
		window.removeEventListener("touchmove", onTouchMove);
		window.removeEventListener("mouseup", onTouchEnd);
		window.removeEventListener("mousemove", onTouchMove);
	};
	const indicatorOnClick = (idx: any) => {
		const containerEl = getRefValue(containerRef);
		const containerWidth = containerEl.offsetWidth;
		setCurrentIdx(idx);
		setOffsetX(-(containerWidth * idx));
	};

	return (
		<div className="lg:m-6 flex relative flex-row h-full">
			<div className={`${styles.slider} mt-10`}>
				<div className={styles.slides}>
					<div id="slide-1">
						<div className={`${styles.mobileIntelligent} h-full overflow-hidden`}>
							<h5 className="gradient-text-new font-bold text-center text-2xl">Intelligent money tracker</h5>
							<h2 className="font-bold text-onPrimaryContainer text-center text-3xl md:text-4xl">Dapetin semua informasi transaksi lo, 
							dari seluruh akun keuangan yang lo punya.</h2>
							<div
								className={`${styles.intelligentSwiperContainer} h-full py-2`}
							>
								<ul className={`${styles.intelligentSwiperIndicator} flex-col`}>
									{items.map((_item: any, idx: any) => (
										<li
											key={idx}
											className={`${styles.intelligentSwiperIndicatorItemLarge} flex flex-col font-semibold my-4 text-2xl md:text-4xl ${
												currentIdx === idx ? styles.active : ""
											}`}
											onClick={() => indicatorOnClick(idx)}
											data-testid="indicator"
										>	
											<span className="text-lg">
												{_item.imageAlt}
											</span>
											<span className="text-sm font-normal">
												{_item.subAlt}
											</span>
											<div key={idx} className={`${currentIdx === idx ? styles.fadeIn:styles.fadeOut}`}>
												<IntelligentCalendarItem {..._item} />
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className={`${styles.largeIntelligent} flex flex-col h-full`}>
							<h5 className="gradient-text-new font-bold text-center text-2xl">Intelligent money tracker</h5>
							<h2 className="font-bold text-onPrimaryContainer text-center text-3xl md:text-4xl">Dapetin semua informasi transaksi lo,<br/>
							dari seluruh akun keuangan yang lo punya.</h2>
							<div className={`${styles.intelligentSwiperContainer} flex flex-row justify-between w-full mx-8 h-full py-20 xl:py-14`}>
								<ul className={`${styles.intelligentSwiperIndicator} mr-10 flex-col w-1/2`}>
									{items.map((_item: any, idx: any) => (
										<li
											key={idx}
											className={`${styles.intelligentSwiperIndicatorItemLarge} flex flex-col font-semibold my-4 text-2xl md:text-4xl ${
												currentIdx === idx ? styles.active : ""
											}`}
											onClick={() => indicatorOnClick(idx)}
											data-testid="indicator"
										>	
										<span className="leading-none my-1">
											{_item.imageAlt}
										</span>
										<span className="text-sm font-normal">
											{_item.subAlt}
										</span>
										</li>
									))}
								</ul>
								<ul
									ref={containerRef}
									className={`${styles.intelligentSwiperListLarge} ${
										isSwiping ? styles.isSwiping : ""
									}`}
								>
									{items.map((item: any, idx: any) => (
										<div key={idx} className={`${currentIdx === idx ? styles.fadeIn:styles.fadeOut}`}>
											<IntelligentCalendarItem {...item} />
										</div>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IntelligentCalendar;
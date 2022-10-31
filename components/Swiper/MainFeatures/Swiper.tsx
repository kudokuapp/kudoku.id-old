import React, { useState, useRef, useEffect } from "react";
import { getRefValue, useStateRef } from "../../../utils/hooks";
import { getTouchEventData } from "../../../utils/dom";
import SwiperItem from "./SwiperItem";
import styles from "./MainFeatures.module.css"

const MIN_SWIPE_REQUIRED = 40;

const Swiper = ({ items }: any) => {
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 1024) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	}, []);

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
	const onTouchStart = (e: any) => {
		setIsSwiping(true);

		currentOffsetXRef.current = getRefValue(offsetXRef);
		startXRef.current = getTouchEventData(e).clientX;

		const containerEl = getRefValue(containerRef);
		const containerWidth = containerEl.offsetWidth;

		containerWidthRef.current = containerWidth;
		minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

		window.addEventListener("touchmove", onTouchMove);
		window.addEventListener("touchend", onTouchEnd);
		window.addEventListener("mousemove", onTouchMove);
		window.addEventListener("mouseup", onTouchEnd);
	};
	const indicatorOnClick = (idx: any) => {

		setCurrentIdx(idx);
	};
	const indicatorOnScroll = () => window.addEventListener('wheel', function(event)
{ 
		
		if (event.deltaY >= 2 && event.deltaY < 4)
			{
			setCurrentIdx(1)
			}
			if (event.deltaY >= 4 && event.deltaY < 6)
			{
			setCurrentIdx(2)
			}
			if (event.deltaY >= 6 && event.deltaY < 8)
			{
			setCurrentIdx(3)
			}
			if (event.deltaY >= 8 && event.deltaY <= 10)
			{
			setCurrentIdx(4)
			}
			console.log(event.deltaY)
		});

	return (
		<div className="lg:m-6 flex relative flex-row h-full">
			<div className={styles.slider}>
				<div className={styles.slides}>
					<div id="slide-1">
						<div className={styles.mobileSwiperContainer}>
							<div
								className={`${styles.swiperContainer} h-full py-2`}
							>
								<ul className={`${styles.swiperIndicatorMobile} flex-col`}>
									{items.map((_item: any, idx: any) => (
										<li
											key={idx}
											className={`${styles.swiperIndicatorItem} flex flex-col font-semibold my-4 ${
												currentIdx === idx ? styles.active : ""
											}`}
											onClick={() => indicatorOnClick(idx)}
											data-testid="indicator"
										>	
											<span className="text-xl text-center">
												{_item.imageAlt}
											</span>
											<div key={idx} className={`${currentIdx === idx ? styles.fadeIn:styles.fadeOut}`}>
												<SwiperItem {..._item} />
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className={styles.largeSwiperContainer}>
							<div className={`${styles.swiperContainer} flex flex-row justify-between w-full mx-8 mt-2 mb-4`}>
								<ul className={`${styles.swiperIndicator} mr-10 flex-col w-1/2`}>
									{items.map((_item: any, idx: any) => (
										<li
											key={idx}
											className={`${styles.swiperIndicatorItemLarge} flex flex-col font-semibold my-4 text-2xl md:text-4xl ${
												currentIdx === idx ? styles.active : ""
											}`}
											onClick={() => indicatorOnClick(idx)}
											data-testid="indicator"
										>	
										<span>
											{_item.imageAlt}
										</span>
										{currentIdx === idx ? 
										<span className="text-sm font-normal">
											{_item.subAlt}
										</span>
										: <></>
										}
										</li>
									))}
								</ul>
								<ul
									ref={containerRef}
									className={`${styles.swiperListLarge} ${
										isSwiping ? styles.isSwiping : ""
									}`}
								>
									{items.map((item: any, idx: any) => (
										<div key={idx} className={`${currentIdx === idx ? styles.fadeIn:styles.fadeOut}`}>
											<SwiperItem {...item} />
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

export default Swiper;
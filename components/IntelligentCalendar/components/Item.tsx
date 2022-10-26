import React from 'react';
import Image from 'next/image';
import styles from '../index.module.css';

const Item = ({ imageSrc }: any, { imageAlt }: any) => {
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
};

export default Item;

"use client"

import {FC} from 'react';

import styles from './imageContainerProduct.module.scss';
import clsx from 'clsx';
import { Item } from '@/shared/list/item/Item';
import ImageR from '@/widgets/ui/assets/image/Image';
import { List } from '@/shared/list/List';
import { IProductDetails } from '@/types/app/models/IProductDetails.type';

interface ImageContainerProductProps {
    product: IProductDetails
}

const ImageContainerProduct: FC<ImageContainerProductProps> = () => {

    return (
        <div className={styles.imageContainer}>
            <div className={styles.imagSliderContainer}>
                <List
                    items={[
                        {id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                    ]}
                    className={clsx(styles.imageSliderList, "flex")}
                    mapItems={(item) => (
                        <Item className={styles.imageSliderItem}>
                            <ImageR
                                src={item.image}
                                alt={item.image}
                                width={50}
                                height={50}
                            />
                        </Item>
                    )}
                />
            </div>
            <div className={styles.mainImageZoomContainer}>
                <ImageR
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"}
                    alt={"image"}
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default ImageContainerProduct;

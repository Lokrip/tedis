"use client"

import {FC, MouseEvent, useState} from 'react';

import styles from './imageContainerProduct.module.scss';
import { Item } from '../../../../../ui/list/item/Item';
import ImageR from '../../../../../ui/assets/image/Image';
import { List } from '../../../../../ui/list/List';
import { IPost } from '../../../../../../types/app/models/IPost.type';
import clsx from 'clsx';

interface ImageContainerProductProps {
    product: IPost
}

const ImageContainerProduct: FC<ImageContainerProductProps> = ({product}) => {
    const [currentImage, setCurrentImage] = useState<string>(product.image);

    const replacementImage = (src: string) => {
        setCurrentImage(src);
    }

    return (
        <div className={styles.imageContainer}>
            <div className={styles.imagSliderContainer}>
                <List
                    items={[
                        {id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                    ]}
                    className={clsx(styles.imageSliderList, "flex")}
                    mapItems={(item) => (
                        <Item onClick={() => replacementImage(item.image)}>
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
                    src={currentImage}
                    alt={"image"}
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default ImageContainerProduct;

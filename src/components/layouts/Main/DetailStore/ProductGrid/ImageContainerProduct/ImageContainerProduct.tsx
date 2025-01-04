import {FC} from 'react';

import styles from './imageContainerProduct.module.scss';
import { Item } from '@/components/ui/list/item/Item';
import ImageR from '@/components/ui/assets/image/Image';
import { List } from '@/components/ui/list/List';
import { IPost } from '@/types/app/models/IPost.type';

interface ImageContainerProductProps {
    product: IPost
}

const ImageContainerProduct: FC<ImageContainerProductProps> = ({product}) => {
    return (
        <div className="image__container">
            <div className="image__slider-container">
                <List
                    items={[
                        {id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                        {id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"},
                    ]}
                    className="image__slider-list"
                    mapItems={(item) => (
                        <Item>
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
            <div className="main__image-zoom-container">
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
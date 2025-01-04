import {FC} from 'react';
import Card from '../Card';
import { ProductCardWrapper } from '../ProductCardWrapper/ProductCardWrapper';
import CardTopWrap from '../CardElements/CardTopWrap/CardTopWrap';
import CardMiddleWrap from '../CardElements/CardMiddleWrap/CardMiddleWrap';
import CardBottomWrap from '../CardElements/CardBottomWrap/CardBottomWrap';
import { IPost } from '@/types/app/models/IPost.type';

interface PCardProps {
    item: IPost
}

const PCard: FC<PCardProps> = ({item}) => {
    return (
       <Card>
            <ProductCardWrapper>
                <ProductCardWrapper.CardTopWrap>
                    <CardTopWrap />
                </ProductCardWrapper.CardTopWrap>


                <ProductCardWrapper.CardMiddleWrap>
                    <CardMiddleWrap 
                        price={item.price_with_discount}
                        priceDiscount={item.price}  
                        title={item.title}
                        param={item.slug}
                    />
                </ProductCardWrapper.CardMiddleWrap>


                <ProductCardWrapper.CardBottomWrap>
                    <CardBottomWrap />
                </ProductCardWrapper.CardBottomWrap>
            </ProductCardWrapper>
       </Card>
    );
};

export default PCard;
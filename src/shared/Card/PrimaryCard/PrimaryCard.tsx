import {FC} from 'react';
import Card from '../Card';
import { ProductCardWrapper } from '../ProductCardWrapper/ProductCardWrapper';
import CardTopWrap from '../CardElements/CardTopWrap/CardTopWrap';
import CardMiddleWrap from '../CardElements/CardMiddleWrap/CardMiddleWrap';
import CardBottomWrap from '../CardElements/CardBottomWrap/CardBottomWrap';
import { IProduct } from '@/types/app/models/IProduct.type';

interface PCardProps {
    item: IProduct
}

const PCard: FC<PCardProps> = ({item}) => {

    return (
       <Card>
            <ProductCardWrapper>
                <ProductCardWrapper.CardTopWrap>
                    <CardTopWrap src={item.image}/>
                </ProductCardWrapper.CardTopWrap>


                <ProductCardWrapper.CardMiddleWrap>
                    <CardMiddleWrap
                        price={item.price}
                        priceDiscount={item.price_discount}
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

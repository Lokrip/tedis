import {FC} from 'react';
import Card from '../Card';
import { ProductCardWrapper } from '../ProductCardWrapper/ProductCardWrapper';
import CardTopWrap from '../CardElements/CardTopWrap/CardTopWrap';
import CardMiddleWrap from '../CardMiddleWrap/CardMiddleWrap';

interface PrimaryCardProps {}

const PCard: FC<PrimaryCardProps> = () => {
    return (
       <Card>
            <ProductCardWrapper>
                <ProductCardWrapper.CardTopWrap>
                    <CardTopWrap />
                </ProductCardWrapper.CardTopWrap>


                <ProductCardWrapper.CardMiddleWrap>
                    <CardMiddleWrap />
                </ProductCardWrapper.CardMiddleWrap>


                <ProductCardWrapper.CardBottomWrap>
                    bottom
                </ProductCardWrapper.CardBottomWrap>
            </ProductCardWrapper>
       </Card>
    );
};

export default PCard;
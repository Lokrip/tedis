import {FC} from 'react';

import styles from './contentWrapper.module.scss';
import PCard from '@/components/ui/elements/card/PrimaryCard/PrimaryCard';
import { getProductsData } from '@/service/api/product.api';


const ContentWrapper: FC = async () => {
    let content;

    try {
        const data = await getProductsData();
        console.log(data)
        content = <>{(data as any).map((item: any) => (
            <PCard key={item.slug} item={item} />
        ))}</>
    } catch(error) {
        content = (
            <div className={styles.productContentWrapper}>
                <p>Произошла ошибка при загрузке продуктов. Пожалуйста, попробуйте позже.</p>
            </div>
        )
    }

    return (
        <div className={styles.productContentWrapper}>
            {content || (
                <div className={styles.loading}>
                    <p>Загрузка продуктов...</p>
                </div>
            )}
        </div>
    )
};

export default ContentWrapper;
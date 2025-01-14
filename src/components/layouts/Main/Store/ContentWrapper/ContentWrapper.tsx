import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import PCard from '../../../../ui/elements/card/PrimaryCard/PrimaryCard';
import { getProductsData } from '../../../../../service/api/product.api';

interface ContentWrapperProps {
    param?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param}) => {
    const searchQuery = param.q ?? param.searchQuery;
    let content;
    
    try {
        const data = await getProductsData(searchQuery);
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
import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import PCard from '../../../../ui/elements/card/PrimaryCard/PrimaryCard';
import { getProductsData } from '../../../../../service/api/product.api';
import Pagination from '../../Pagination/Pagination';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';

interface ContentWrapperProps {
    param?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param}) => {
    const LIMIT = 18
    const searchQuery = param.q ?? param.searchQuery;
    const currentPage = Number(param?.page) || 1;

    const {results} = await getProductsData<IPaginationProduct>(searchQuery)

    return (
        <div className={styles.productContentWrapper}>
            {results.map(item => (
                <PCard key={item.slug} item={item} />
            ))}

            {/* <Pagination limit={LIMIT} currentPage={currentPage}  /> */}
        </div>
    )
};

export default ContentWrapper;

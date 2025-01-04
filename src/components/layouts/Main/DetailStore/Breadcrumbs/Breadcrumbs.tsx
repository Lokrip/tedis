import {FC} from 'react';

import ButtonSet from '@/components/ui/elements/button/ButtonSet';
import { List } from "@/components/ui/list/List"
import { Item } from "@/components/ui/list/item/Item"
import { ArrowLeft } from 'lucide-react';

import styles from './breadcrumbs.module.scss';

interface BreadcrumbsProps {}

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
    return (
        <div className="product-page__breadcrumbs breadcrumbs">
            <ButtonSet buttonType="btnV4">
                <ArrowLeft />
            </ButtonSet>
            
            <List 
                items={[{id: 1, page: "HELLO WORLD", href: "Normal"}]} 
                mapItems={(item) => (
                    <Item className={styles.sliderItemsImageContainer}>
                       {item.page}
                    </Item>
                )}
            />
        </div>
    );
};

export default Breadcrumbs;
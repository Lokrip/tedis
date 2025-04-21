import {FC} from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './breadcrumbs.module.scss';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';
import { List } from '@/shared/list/List';
import { Item } from '@/shared/list/item/Item';
import clsx from 'clsx';

type BreadcrumbsProps = object

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
    const data = [
        {id: 1, page: "HELLO WORLD", href: "Normal"},
        {id: 2, page: "HELLO WORLD 2", href: "Normal 1"},
    ]

    return (
        <div className={clsx(styles.productPageBreadcrumbs, "breadcrumbs")}>
            <ButtonSet buttonType="btnV4">
                <ArrowLeft />
            </ButtonSet>

            <List
                items={data}
                className={styles.breadcrumbsList}
                mapItems={(item, index) => (
                    <Item className={styles.breadcrumbsItemsContainer}>
                        <div className={styles.text}>
                            {item.page}
                        </div>
                        {index! + 1 < data.length && (
                            <div className={styles.icon}>
                                <ArrowRight />
                            </div>
                        )}
                    </Item>
                )}
            />
        </div>
    );
};

export default Breadcrumbs;

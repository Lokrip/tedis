import {FC} from 'react';

import styles from './titleCard.module.scss';
import clsx from 'clsx';
import { HeadingH } from '@/components/plagins/H.number';
import Link from 'next/link';
import pages from '@/service/route';
import { IParamPrimaryType } from '@/types/react.type';


interface TitleCard extends IParamPrimaryType {
    param: string | number
    title: string
}

const TitleCard: FC<TitleCard> = ({title, param}) => {
    return (
        <div className={clsx(styles.titleCard, 'title', "flex-center")}>
            <HeadingH className={styles.titleCardAuthor} level={4} content={"Name"} />
            <Link href={pages.getDynamicProductPage(param)}  className={clsx(styles.titleCardName, 'flex-center')}>
                <span>/</span>
                
                <HeadingH maxLength={10} level={5} content={title} />
            </Link>
        </div>
    );
};

export default TitleCard;
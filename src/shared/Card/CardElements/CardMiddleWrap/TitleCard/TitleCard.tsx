import {FC} from 'react';

import styles from './titleCard.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { IParamPrimaryType } from '@/types/react.type';
import { HeadingH } from '@/widgets/plagins/H.number';
import pages from '@/config/route';


interface TitleCard extends IParamPrimaryType {
    param: string | number
    title: string
}

const TitleCard: FC<TitleCard> = ({title, param}) => {
    return (
        <div className={clsx(styles.titleCard, 'title', "flex-center")}>
            <HeadingH className={styles.titleCardAuthor} level={4} content={"Name"} />
            <Link href={pages.product.details(param)}  className={clsx(styles.titleCardName, 'flex-center')}>
                <span>/</span>

                <HeadingH maxLength={10} level={5} content={title} />
            </Link>
        </div>
    );
};

export default TitleCard;

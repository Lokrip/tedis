import {FC} from 'react';

import styles from './cardTopWrap.module.scss';
import ImageR from '@/components/ui/assets/image/Image';

interface CardTopWrapProps {
    src?: string;
}

const CardTopWrap: FC<CardTopWrapProps> = ({src}) => {
    return (
        <div className={styles.cardTopWrap}>
            <ImageR 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s'
                width={150}
                height={150}
                alt=''
            />
        </div>
    );
};

export default CardTopWrap;
import {FC} from 'react';

import styles from './cardTopWrap.module.scss';
import ImageR from '@/widgets/ui/assets/image/Image';


interface CardTopWrapProps {
    src?: string;
}

const CardTopWrap: FC<CardTopWrapProps> = ({src}) => {
    const image = src ? src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s'
    return (
        <div className={styles.cardTopWrap}>
            <ImageR
                src={image}
                width={150}
                height={150}
                alt=''
            />
        </div>
    );
};

export default CardTopWrap;

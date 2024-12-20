import {FC} from 'react';

import styles from './contentWrapper.module.scss';
import PCard from '@/components/ui/elements/card/PrimaryCard/PrimaryCard';

interface ContentWrapperProps {}

const ContentWrapper: FC<ContentWrapperProps> = () => {
    return (
        <div className={styles.ContentWrapper}>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
            <PCard/>
        </div>
    );
};

export default ContentWrapper;
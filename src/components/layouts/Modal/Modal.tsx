import {FC, MouseEvent, PropsWithChildren} from 'react';

import styles from './modal.module.scss';
import clsx from 'clsx';
import ShadowBackground from '@/components/ui/assets/shadowBackground/ShadowBackground';

interface ModalProps extends PropsWithChildren {
    onClick?: () => void;
}

const Modal: FC<ModalProps> = ({children, onClick}) => {
    return (
        <div className={clsx(
            styles.modal,
            'fixed-full',
            'mixed-full-width')
        }>
            <ShadowBackground onClick={onClick}/>
            <div className={styles.modalContainer}>
                <div className={styles.modalItem}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

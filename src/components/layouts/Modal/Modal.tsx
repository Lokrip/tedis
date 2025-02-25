import {FC, PropsWithChildren} from 'react';

import styles from './modal.module.scss';
import clsx from 'clsx';
import ShadowBackground from '@/components/ui/assets/shadowBackground/ShadowBackground';

interface ModalProps extends PropsWithChildren {}

const Modal: FC<ModalProps> = ({children}) => {
    return (
        <div className={clsx(
            styles.modal,
            'fixed-full',
            'mixed-full-width')
        }>
            <ShadowBackground />
            {children}
        </div>
    );
};

export default Modal;

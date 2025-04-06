"use client"

import {FC, PropsWithChildren} from 'react';

import styles from './modal.module.scss';
import clsx from 'clsx';
import ShadowBackground from '@/widgets/ui/assets/shadowBackground/ShadowBackground';
import { useActions, useAppSelector } from '@/utils/hooks';
import { useRouter } from 'next/navigation';

type ModalProps = PropsWithChildren;

const Modal: FC<ModalProps> = ({children}) => {
    const { modalClose } = useActions()
    const { isModalClose } = useAppSelector((state) => state.utilsReducer)
    const router = useRouter()

    const onClick = () => {
        modalClose()
        router.back()
    }

    return !isModalClose && (
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

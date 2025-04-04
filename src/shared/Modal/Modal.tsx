"use client"

import {FC, PropsWithChildren, useEffect} from 'react';

import styles from './modal.module.scss';
import clsx from 'clsx';
import ShadowBackground from '@/widgets/ui/assets/shadowBackground/ShadowBackground';
import { useActions, useAppSelector } from '@/utils/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import pages from '@/config/route';

type ModalProps = PropsWithChildren;

const Modal: FC<ModalProps> = ({children}) => {
    const { modalClose, savedScrollsPositionToResult } = useActions()
    const { isModalClose } = useAppSelector((state) => state.utilsReducer)
    const { scrollSetPosition } = useAppSelector((state) => state.scrollsReducer)
    const searchParam = useSearchParams()
    const callbackRoute = searchParam.get("callback") || pages.home
    const router = useRouter()

    useEffect(() => {
        console.log(scrollSetPosition)
    }, [scrollSetPosition])

    const onClick = () => {
        if (callbackRoute) {
            router.push(callbackRoute)
        } else {
            router.push(pages.home)
        }
        modalClose()

        if(scrollSetPosition) {
            savedScrollsPositionToResult({scrollPosition: scrollSetPosition});
        }
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

"use client"

import {FC, PropsWithChildren, useEffect} from 'react';

import styles from './modalLayout.module.scss';
import { createPortal } from 'react-dom';

interface ModalLayoutProps extends PropsWithChildren {}

const ModalLayout: FC<ModalLayoutProps> = ({children}) => {
    return (<>{children && createPortal(children, document.body)}</>);
};

export default ModalLayout;

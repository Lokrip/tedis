"use client"

import {FC, PropsWithChildren, useEffect, useState} from 'react';
import { createPortal } from 'react-dom';

type ModalLayoutProps = PropsWithChildren

const ModalLayout: FC<ModalLayoutProps> = ({children}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (<>{children && createPortal(children, document.body)}</>);
};

export default ModalLayout;

"use client"

import {FC, useEffect} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import LoginForm from '@/widgets/ui/form/LoginForm';
import { useRouter, useSearchParams } from 'next/navigation';
import pages from '@/config/route';
import { useActions, useAppSelector } from '@/utils/hooks';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    const {modalClose} = useActions()
    const {isModalClose, isModalOpen} = useAppSelector((state) => state.utilsReducer)
    const searchParam = useSearchParams()
    const callbackRoute = searchParam.get("callback") || pages.home
    const router = useRouter()

    const onClick = () => {
        if (callbackRoute) {
            router.push(callbackRoute)
        } else {
            router.push(pages.home)
        }
        modalClose()
    }

    return (
        <>
        {!isModalClose && (
            <Modal onClick={onClick}>
                <LoginForm />
            </Modal>
        )}
        </>
    );
};

export default LoginModal;

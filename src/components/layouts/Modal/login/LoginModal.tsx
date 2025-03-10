"use client"

import {FC, useEffect} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import LoginForm from '@/components/ui/form/LoginForm';
import { useActions, useAppSelector } from '@/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import pages from '@/service/route';

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

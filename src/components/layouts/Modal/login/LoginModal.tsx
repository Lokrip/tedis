"use client"

import {FC} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import LoginForm from '@/components/ui/form/LoginForm';
import { useAppSelector } from '@/hooks';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    const {isModalClose} = useAppSelector((state) => state.utilsReducer)

    return (
        <>
        {!isModalClose && (
            <Modal>
                <div className={styles.loginModalContainer}>
                    <div className={styles.loginModal}>
                        <LoginForm />
                    </div>
                </div>
            </Modal>
        )}
        </>
    );
};

export default LoginModal;

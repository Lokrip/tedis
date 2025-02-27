import {FC} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import { HeadingH } from '@/components/plagins/H.number';
import LoginForm from '@/components/ui/form/LoginForm';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    return (
        <Modal>
            <div className={styles.loginModalContainer}>
                <div className={styles.loginModal}>
                    <LoginForm />
                </div>
            </div>
        </Modal>
    );
};

export default LoginModal;

import {FC, Suspense} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import LoginForm from '@/widgets/ui/form/LoginForm';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    return (
        <Suspense>
            <Modal>
                <LoginForm />
            </Modal>
        </Suspense>
    );
};

export default LoginModal;

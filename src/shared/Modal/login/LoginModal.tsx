import {FC} from 'react';

import styles from './loginModal.module.scss';
import Modal from '../Modal';
import LoginForm from '@/widgets/ui/form/LoginForm';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    return (
        <Modal>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;

import {FC} from 'react';

import styles from './registerModal.module.scss';
import Modal from '../Modal';
import RegisterForm from '@/widgets/ui/form/RegisterForm';

interface RegisterModalProps {}

const RegisterModal: FC<RegisterModalProps> = () => {
    return (
        <Modal>
            <RegisterForm />
        </Modal>
    );
};

export default RegisterModal;

import {FC} from 'react';

import Modal from '../Modal';
import LoginForm from '@/widgets/ui/form/LoginForm';

type LoginModalProps = object

const LoginModal: FC<LoginModalProps> = () => {
    return (
        <Modal>
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;

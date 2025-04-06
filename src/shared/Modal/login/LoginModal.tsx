import {FC, Suspense} from 'react';

import Modal from '../Modal';
import LoginForm from '@/widgets/ui/form/LoginForm';

type LoginModalProps = object

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

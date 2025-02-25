import {FC} from 'react';

import styles from './loginModal.module.scss';

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = () => {
    return (
        <div className={styles.LoginModal}>Content</div>
    );
};

export default LoginModal;

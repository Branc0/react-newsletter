import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { signIn, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button type="button"
            className={styles.signInButton}>
            <FaGithub color="#04d361" />
            Diego Fernandes
            <FiX
                className={styles.closeIcon}
                color="#737380" />

        </button>
    ) : (
        <button
            onClick={() => signIn('github')}
            type="button"
            className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>

    )
}
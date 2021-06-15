import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://web.facebook.com/photo.php?fbid=2275809255897358&set=pb.100004049170640.-2207520000..&type=3" alt="Felipe Souto" />
            <div>
                <strong>Felipe Souto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    {level}
                </p>
            </div>
        </div>
    )
}
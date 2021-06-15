import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fgyn8-1.fna.fbcdn.net/v/t1.6435-9/153107786_2275809259230691_7738381276384658260_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFbydjN6ZYmHfSuF6jQb8wIvqenTEaeX6--p6dMRp5fr0aRQD1RMn7Xpiv6Y50z6hwF_D_5to6pOeiO_VOOGysg&_nc_ohc=kmM1oqQcdGcAX_pjnPn&_nc_ht=scontent.fgyn8-1.fna&oh=afa9bf8083d36c27fb19087897aef6e4&oe=60CCE26C" alt="Felipe Souto" />
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
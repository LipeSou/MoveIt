import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-1/p200x200/153107786_2275809259230691_7738381276384658260_o.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_eui2=AeFbydjN6ZYmHfSuF6jQb8wIvqenTEaeX6--p6dMRp5fr0aRQD1RMn7Xpiv6Y50z6hwF_D_5to6pOeiO_VOOGysg&_nc_ohc=MoeN3vs3QHsAX9tNhiy&_nc_ht=scontent-gig2-1.xx&tp=6&oh=68a908c521b57474c7764951e7478f13&oe=606528CA" alt="Felipe Souto" />
            <div>
                <strong>Felipe Souto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
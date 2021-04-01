import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/22673655?v=4" alt="Gustavo Sorati"/>
            <div>
                <strong>Gustavo Sorati</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/> 
                    Level 1</p>
            </div>
        </div>
    )
}
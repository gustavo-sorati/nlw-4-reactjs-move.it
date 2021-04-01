import styles from '../styles/components/CompletedChanllenges.module.css';

export function CompletedChanllenges() {
    return (
        <div className={styles.completedChallengeContainer}>
            <span >Desafios completos</span>
            <span>5</span>
        </div>
    )
}
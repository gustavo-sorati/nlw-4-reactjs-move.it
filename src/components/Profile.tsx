import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengeContext';
import { useContext } from 'react';

export function Profile() {
    let { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/22673655?v=4" alt="Gustavo Sorati"/>
            
            <div>
                <strong>Gustavo Sorati</strong>
                <p>
                  <img src="icons/level.svg" alt="Level"/> 
                  Level {level}
                </p>
            </div>
        </div>
    )
}
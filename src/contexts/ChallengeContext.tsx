import {createContext, ReactNode, useState} from 'react';
import challenges from '../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    challengesCompleted: number;
    currentExperience: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider ({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrenctExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
      setLevel(level + 1);
    }

    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];
        
        setActiveChallenge(challenge);
    }
    
    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level: 1, 
                levelUp, 
                challengesCompleted, 
                currentExperience,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }}>   
            {children}
        </ChallengesContext.Provider>
    )
}

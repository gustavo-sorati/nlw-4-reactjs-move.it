import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/ChallengeContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ChanllengeBox } from '../components/ChanllengeBox';
import { CompletedChanllenges } from '../components/CompletedChanllenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}


const  Home: React.FC<HomeProps> = (props) => {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}  
      challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChanllenges />
              <Countdown />
            </div>
            <div>
              <ChanllengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, challengesCompleted} = context.req.cookies;



  // esse console.log é apenas para mostrar que esse trecho do código está sendo 
  // executado no node.js   console.log(level);

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home; 
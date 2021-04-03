import Head from 'next/head';
import { ChanllengeBox } from '../components/ChanllengeBox';
import { CompletedChanllenges } from '../components/CompletedChanllenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
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
  );
}

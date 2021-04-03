import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengeContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
//  Não precisamos colocar o <CountdownProvider> direto no App, pq não é um contexto que necessáriamente precisaria estar disponivel para todas as páginas, podemos adiciona-lo diretamente na página que queremos

  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp

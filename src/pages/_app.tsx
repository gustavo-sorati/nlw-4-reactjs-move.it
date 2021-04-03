import '../styles/global.css';

import { useState } from 'react';

function MyApp({ Component, pageProps }) {
//  Não precisamos colocar o <CountdownProvider> direto no App, pq não é um contexto que necessáriamente precisaria estar disponivel para todas as páginas, podemos adiciona-lo diretamente na página que queremos

  return (
    <Component {...pageProps} />
  )
}

export default MyApp

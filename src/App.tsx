import React, { useEffect, useRef } from 'react'

import { useAptos } from 'hooks/useAptos'
import { useWallet } from '@aptos-labs/wallet-adapter-react'

function App() {
  const { client, coinClient, faucetClient } = useAptos()
  const { wallets } = useWallet()
  const isFirstRender = useRef(true)

  useEffect(() => {
    ;(async () => {
      if (isFirstRender.current) {
        const account = await client.getAccountResources(
          'a09ff292aab5fd9de88cf5ca664d1ba174b8dabe8db34f59d323a144ad48528a'
        )
      }
    })()

    return () => {
      isFirstRender.current = false
    }
  }, [])

  return <div className="App">dsad</div>
}

export default App

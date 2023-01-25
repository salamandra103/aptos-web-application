import React, { useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useWallet } from '@aptos-labs/wallet-adapter-react'

import { useAptos } from 'hooks/useAptos'

import { Main } from 'layout/Main'

import { routers } from 'routers'

import 'react-toastify/dist/ReactToastify.css'

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

  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routers)} />

      <ToastContainer />
    </div>
  )
}

export default App

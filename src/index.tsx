import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles.scss'

import { PetraWallet } from 'petra-plugin-wallet-adapter'
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter'
import { PontemWallet } from '@pontem/wallet-adapter-plugin'
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter'
import { RiseWallet } from '@rise-wallet/wallet-adapter'
import { SpikaWallet } from '@spika/aptos-plugin'
import { FewchaWallet } from 'fewcha-plugin-wallet-adapter'
import { MSafeWalletAdapter } from 'msafe-plugin-wallet-adapter'

import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const wallets = [
  new PetraWallet(),
  new TrustWallet(),
  new PontemWallet(),
  new MartianWallet(),
  new RiseWallet(),
  new SpikaWallet(),
  new FewchaWallet(),
  new MSafeWalletAdapter()
]

root.render(
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    <App />
  </AptosWalletAdapterProvider>
)

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { toast } from 'react-toastify'

export const Wallets = () => {
  const { wallets, connect, wallet } = useWallet()

  const [isVisible, setIsVisible] = useState(true)
  const [currentWallet, setCurrentWallet] = useState(localStorage.getItem('AptosWalletName') || '')

  const connectToWallet = async (wallet: (typeof wallets)[0]) => {
    try {
      const { address, publicKey } = await wallet.connect()
      connect(wallet.name)
      return { address, publicKey }
    } catch (err) {
      const errorMessage = typeof err === 'string' ? err : (err as Error).message
      let errorCode
      let errorName
      if (typeof err !== 'string') {
        errorName = (err as Error).name
        errorCode = (err as Error & { code: string }).code
      }
      toast.error(
        <>
          <p>Error message: {errorMessage as string}</p>
          {errorName && <p>Error name: {errorName}</p>}
          {errorCode && <p>Error code: {errorCode}</p>}
          <p>
            Wallet status: <b>{wallet.readyState}</b>
          </p>
        </>
      )
    }
  }

  useEffect(() => {
    wallet ? setCurrentWallet(wallet.name) : setCurrentWallet('')
  }, [wallet])

  return (
    <>
      <button type="button" className={styles.iconButton} onClick={() => setIsVisible(!isVisible)}>
        <span className="material-symbols-outlined">wallet</span>
      </button>
      <div className={isVisible ? styles.containerActive : styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.caption}>Wallets</p>
          <ul className={styles.list}>
            {wallets.map((item, index) => (
              <li
                key={index}
                className={item.name === currentWallet ? styles.itemActive : styles.item}
                data-active={item.name === currentWallet}
                onClick={() => connectToWallet(item)}
              >
                <img src={item.icon} className={styles.icon} alt="" />
                <span className={styles.name}>{item.name}</span>
                {item.readyState === 'Installed' && <span className="material-symbols-outlined">check_circle</span>}
              </li>
            ))}
          </ul>

          <button className={styles.buttonClose} type="button" onClick={() => setIsVisible(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  )
}

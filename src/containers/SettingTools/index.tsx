import React from 'react'

import { Wallets } from 'containers/Wallets'
import styles from './styles.module.scss'

export const SettingTools = () => {
  return (
    <div className={styles.container}>
      <Wallets />
    </div>
  )
}

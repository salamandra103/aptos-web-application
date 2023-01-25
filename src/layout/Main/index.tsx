import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'

import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

export const Main = (props: Props) => {
  const { children } = props
  return (
    <main className={styles.container}>
      <Sidebar />

      <div className={styles.wrapper}>
        <Header />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

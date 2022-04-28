import React from 'react'
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

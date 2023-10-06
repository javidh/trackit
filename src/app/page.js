'use client'

import styles from './page.module.css'
import { useEffect, useState } from 'react'
// const href = 'http://iamjavid.com'
const href = null
export default function Home() {



  const [message, setMessage] = useState("hello please fill the href variable to be redirected");
  useEffect(() => {
    if (href != null) {
      setMessage("In a second you'll be redirected to " + href)
      setTimeout(() => {
        window.location.replace(href);
      }, 1000)
    }
  }, [])
  return (
      <main className={styles.main}>
        {message}
      </main>
        )
}

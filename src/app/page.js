'use client'

import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { getUrl } from './lib';
export default function Home() {



  const [message, setMessage] = useState("hello please fill the href variable to be redirected");
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getUrl().then(u => setUrl(u))
    if (url != null) {
      setMessage("In a second you'll be redirected to " + url)
      setTimeout(() => {
        window.location.replace(url);
      }, 1000)
    }
  }, [url])
  return (
      <main className={styles.main}>
        {message}
      </main>
        )
}

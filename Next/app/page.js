
import Link from 'next/link'
import styles from './page.module.css'
import style from './styl.module.css'


export default function Home() {
    return (
      <div className={style.body}>
      <div><header className={style.header}>
      <h1 className={style.h1}>Welcome to My Homepage</h1>
      <p className={style.p}>Your source for interesting content.</p>
  </header>
  
  <nav className={style.nav}>
    <Link href={'/'}>
     Home</Link>
    <Link href={'/form'}>
     Form</Link>
     
  </nav>
  
  <div className={style.container}>
      <h2>Featured Content</h2>
      <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
  </div>
  
  <footer className={style.footer}>
      <p>&copy; 2023 My Homepage</p>
  </footer></div>
  </div>
    )
}

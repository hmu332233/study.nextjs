import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames';

import styles from './NavBar.module.css';

function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {/* Link는 페이지 이동만을 위해 존재. style이나 className을 추가하고 싶으면 자식으로 넣어주기 */}
      {/* 아래처럼해도 a 태그를 인식해서 next가 하나만 그려줌 */}
      <Link href="/"> 
        <a className={classNames(styles.link, (router.pathname === '/') && styles.active)}>Home</a>
      </Link>
      <Link href="/about">
        <a className={classNames(styles.link, (router.pathname === '/about') && styles.active)}>About</a>
      </Link>
    </nav>
  );
}

export default NavBar;
import Link from 'next/link';
import { useRouter } from 'next/router';

import classNames from 'classnames';

function NavBar() {
  const router = useRouter();
  return (
    <nav className="nav">
      {/* Link는 페이지 이동만을 위해 존재. style이나 className을 추가하고 싶으면 자식으로 넣어주기 */}
      {/* 아래처럼해도 a 태그를 인식해서 next가 하나만 그려줌 */}
      <Link href="/"> 
        <a className={classNames('link', (router.pathname === '/') && 'active')}>Home</a>
      </Link>
      <Link href="/about">
        <a className={classNames('link', (router.pathname === '/about') && 'active')}>About</a>
      </Link>

      {/* styles jsx 기능을 이용해서 스타일링도 가능 */}
      {/* 적용 범위가 해당 컴포넌트 내부에만 한정됨 <- 해싱되기 때문에 다른 파일에서는 같은 class나 tag를 선언하더라도 겹치지 않음 */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .link {
          color: white;
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* Link는 페이지 이동만을 위해 존재. style이나 className을 추가하고 싶으면 자식으로 넣어주기 */}
      {/* 아래처럼해도 a 태그를 인식해서 next가 하나만 그려줌 */}
      <Link href="/"> 
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href="/about">
      <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>About</a>
      </Link>
    </nav>
  );
}

export default NavBar;
## Study.Nextjs

**Route**
- pages 밑의 파일(또는 디렉토리) 이름이 route가 됨
- 없는 페이지는 404로 뜸 -> `pages/404.tsx`로 커스텀 가능
- 각 페이지는 react를 import 하지 않아도 사용 가능

**Dynamic Routes**
- 디렉토리 내에서 index 파일을 만들면 `/`, 그 외 파일은 `/파일명`
- 동적 라우팅의 경우 대괄호를 이용하여 생성
  - `[name].tsx` -> `router.query.name`으로 접근 가능
  - `[...name].tsx` -> Catch-All url, router.query.name이 string 대신 array가 들어있고 무한대로 확장 가능

**Static Pre Rendering**
- nextjs에서 두 종류로 활용 가능
  - Static Generation -> 미리 빌드해서 static 파일로 사용
  - Server-side Rendering -> request마다 랜더링
- (잠깐 상식?) Hydrate: 미리 랜더된 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정

**Data Fetching**
- 아래와 같은 함수들을 사용하는 것만으로 SSR, SSG를 쉽게 구현 가능
- SSR
  - `getServerSideProps`를 export
- SSG
  - `getStaticProps`를 export
- CSR
  - 그냥 api call

**App Component, App Page**
- `_app`
  - 페이지를 초기화하는 컴포넌트, 모든 페이지에 공통으로 적용할 속성을 관리하는 용도
    - 공통 레이아웃 적용
    - 페이지 이동 시 상태 유지
    - componentDidCatch를 이용한 커스텀 에러 정의
    - 페이지에 추가 데이터 삽입
    - 글로벌 CSS 추가

**public dir**
- public 디렉토리에 파일을 넣으면 `/[파일]`로 쉽게 접근가능

**유용한 컴포넌트**
- `next/head` head tag를 주입하는데 사용, meta tag들 관리하는데 사용 가능

**redirection, rewrite**
- `next.config.json`에서 설정 가능
- [문서 - rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites), [문서 - redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- request path를 다른 path로 redirect, rewrite 가능 
  - query string이나 header, cookie 등에 특정한 값이 있을 경우에만 redirect, rewrite 한다는 등의 기능 가능
- 당연한 이야기지만 SSG에서는 불가능

### Getting Started

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

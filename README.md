## Study.Nextjs

*Route*
- pages 밑의 파일 이름이 route가 됨
- 없는 페이지는 404로 뜸 -> 커스텀 가능
- 각 페이지는 react를 import 하지 않아도 사용 가능

*Static Pre Rendering*
- nextjs에서 두 종류로 활용 가능
  - Static Generation -> 미리 빌드해서 static 파일로 사용
  - Server-side Rendering -> request마다 랜더링
- (잠깐 상식?) Hydrate: 미리 랜더된 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정



### Getting Started

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

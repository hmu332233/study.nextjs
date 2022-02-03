
const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/contact',
  //       destination: '/from',
  //       permanent: false,
  //     }
  //   ];
  // },
  rewrites: async () => {
    return [
      {
        // 이런 식으로 api를 서버 뒤로 숨기는 것도 쉽게 가능
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  },
}

module.exports = nextConfig

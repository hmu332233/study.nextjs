import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'; // 
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import styles from '../styles/Home.module.css'

type Props = {
  movies: any[],
};

function Home({
  movies,
}: Props) {
  const router = useRouter();
  const onMovieClick = (id: string, title: string) => {
    // 두번째 인자로 유저에게 보여질 url을 마스킹할 수 있음 https://nextjs.org/docs/api-reference/next/router#routerpush
    // router.push({
    //   pathname: `/movies/${id}`,
    //   query: {
    //     title,
    //   },
    // }, `/movies/${id}`);

    router.push({
      pathname: `/movies/${id}/${title}`,
    })
  };

  return (
    <div>
      <Seo title="Home" />
      {movies.map(movie => (
        <div className="movie" key={movie.id} onClick={() => onMovieClick(movie.id, movie.original_title)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 서버에서만 돌아감
export const getServerSideProps: GetServerSideProps = async (context) => {
  // ssr에서는 절대경로 api만 가능
  const { results } = await fetch('https://study-nextjs-lovat.vercel.app/api/movies').then(res => res.json());
  return {
    props: {
      movies: results,
    },
  };
};

export default Home;
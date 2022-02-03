import type { NextPage } from 'next'
import Head from 'next/head'; // 
import Image from 'next/image'
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import styles from '../styles/Home.module.css'

const API_KEY = '';

function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then(res => res.json());
      setMovies(results);
    })();
  }, []);
  console.log('render!')
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Home

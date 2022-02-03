import type { NextPage } from 'next'
import Head from 'next/head'; // 
import Image from 'next/image'
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
    </div>
  );
}

export default Home

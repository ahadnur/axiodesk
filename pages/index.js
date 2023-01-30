import Head from "next/head";

import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Axiodesk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/isolated-layout.svg" />
      </Head>
      <main>
        {/* Nav */}
        <Header />

        {/* Hero */}
        <Hero />
        {/* Services */}
        {/* Projects */}
        {/* About */}
        {/* Testimony */}
        {/* Blog */}
        {/* Contact */}
      </main>
    </div>
  );
}

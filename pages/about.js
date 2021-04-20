import Navbar from '../components/Navbar'
import Head from 'next/head'
import styled from 'styled-components';



const Heading = styled.h1`
  color: #000;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
`;


export default function About() {
  return (
    <div>
      <Head>
        <title>About - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Heading>About</Heading>
      </div>
    </div>
  )
}

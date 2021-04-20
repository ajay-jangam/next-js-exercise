import Navbar from '../components/Navbar'
import Head from 'next/head';
import styled from 'styled-components';
import Page from '../components/Page';



const Heading = styled.h1`
  color: #000;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;

`;

const name = "This is Page";


export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Heading>Contact</Heading>
       
      </div>

    </div>
  )
}

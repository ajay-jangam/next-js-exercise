import Head from 'next/head';
import styled from 'styled-components';

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Heading>NEXT</Heading>
      </div>
    </div>
  )
}

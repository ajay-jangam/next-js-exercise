import React, { useState } from 'react';
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
    
    const name = "The blog increse by";

    export default function Blog () {
        const [counter, setCounter] = useState(0);
        
        const increament = () => {
            setCounter(counter + 1 );
            console.log(counter);
        }

        const setToZero = () => {
            setCounter((prev) => 0 );
            console.log(counter);
        }

    return (
        <div>
            <Head>
                <title>Blog - Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="hero App">
                <Heading>Blog</Heading>
                <Page pageName={name} />
    
                <div>
                    <h2>Counter {counter}</h2>
                    <div>
                        <button onClick={increament}>Increase Blog</button>

                        <button onClick={setToZero}>Reset Blog</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

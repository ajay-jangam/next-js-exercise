// import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 1rem;
`;

const StyledLink = styled.a`
    margin: 0 1rem;
    // cursor: pointer;
`;
export const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLink>
                        NEXT
                    </StyledLink>
                </Link>

            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>
                        Home
                    </StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>
                        About Us
                    </StyledLink>
                </Link>
                <Link href="/contact" passHref>
                    <StyledLink>
                        Contact
                    </StyledLink>
                </Link>
                <Link href="/blog" passHref>
                    <StyledLink>
                        Blog
                    </StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar;
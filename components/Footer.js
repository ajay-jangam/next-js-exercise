import styled from 'styled-components';
import Link from 'next/link';

const StyledFooter = styled.div`
    background-color: grey;
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 1rem;
`;

const StyledLink = styled.a`
    margin: 0 1rem;
    // cursor: pointer;
`;
export const Footer = () => {
    return (
        <StyledFooter>
            <p>Next 2021 All Right Reserved.</p>
        </StyledFooter>
    )
}

export default Footer;
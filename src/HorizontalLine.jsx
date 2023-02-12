import styled from "styled-components";

const Line = styled.hr`
    margin: 5rem 0;
    height: 1px;
    background-color: ${(({ backgroundDark }) => (backgroundDark ? "var(--color-secondary)" : "var(--color-primary)"))};
    border: none;

    @media only screen and (min-width: 768px) {
        margin: 10rem 0;
        height: 1.5px;
    }
`

export const HorizontalLine = ({ backgroundDark }) => {
    return (
        <Line backgroundDark={ backgroundDark } />
    )
}

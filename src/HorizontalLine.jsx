import styled from "styled-components";

const Line = styled.hr`
    margin: 5rem 0;
    height: 1px;
    width: ${({ size }) => (size ? `${size}%` : "100%")};
    background-color: ${({ backgroundDark }) =>
        backgroundDark ? "var(--color-secondary)" : "var(--color-primary)"};
    border: none;

    @media only screen and (min-width: 768px) {
        margin: 10rem 0;
        height: 1.5px;
    }
`;

export const HorizontalLine = ({ backgroundDark, size }) => {
    return <Line backgroundDark={backgroundDark} size={size} />;
};

export default HorizontalLine;

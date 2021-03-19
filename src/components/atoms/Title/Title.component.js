import styled, { css } from "styled-components";

const Title = styled.h2`
    color: ${({ theme, color }) => (color ? color : theme.colors.yellow)};
    text-transform: ${({ notUpper }) => (notUpper ? "none" : "uppercase")};
    text-align: center;
    width: 100%;
    margin-bottom: 15px;

    ${({ margin }) =>
        margin
            ? css`
                  margin: ${margin};
              `
            : ""}

    ${({ small, theme }) =>
        small
            ? css`
                  font-size: ${theme.fz.L};
              `
            : ""}

    @media screen and (max-width: 900px) {
        & {
            font-size: ${({ small, theme }) =>
                small ? theme.fz.L : theme.fz.XL};
        }
    }

    @media screen and (max-width: 700px) {
        & {
            font-size: ${({ small, theme }) =>
                small ? theme.fz.S : theme.fz.L};
        }
    }

    @media screen and (max-width: 400px) {
        & {
            font-size: ${({ small, theme }) =>
                small ? theme.fz.XS : theme.fz.S};
        }
    }
`;

export default Title;

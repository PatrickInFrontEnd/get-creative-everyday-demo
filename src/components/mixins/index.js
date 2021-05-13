import { css } from "styled-components";

const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const flexColumn = css`
    display: flex;
    flex-direction: column;
`;

const size_100x100 = css`
    width: 100%;
    height: 100%;
`;

const absoluteCenter = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const toUpperCase = (isUpper) =>
    isUpper
        ? css`
              text-transform: uppercase;
          `
        : "";

const changeTxtColor = (color) =>
    color
        ? css`
              color: ${color};
          `
        : "";

const marginToChildren = (margin = "0 0 15px") => css`
    & > * {
        margin: ${margin};

        &:last-child {
            margin: 0;
        }
    }
`;

export {
    flexCenter,
    flexColumn,
    size_100x100,
    absoluteCenter,
    toUpperCase,
    changeTxtColor,
    marginToChildren,
};

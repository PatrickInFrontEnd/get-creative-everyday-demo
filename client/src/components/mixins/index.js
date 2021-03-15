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

export { flexCenter, flexColumn, size_100x100, absoluteCenter };

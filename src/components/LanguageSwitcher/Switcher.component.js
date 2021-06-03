import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { flexColumn, flexCenter } from "../mixins";

const SwitchWrapper = styled.div`
    ${flexColumn};
    ${flexCenter};
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 20;

    a {
        ${flexCenter};
        margin: 1px 0;
        width: 40px;
        height: 40px;
        font-size: ${({ theme }) => theme.fz.miniS};
        border: 1px solid ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};

        &.active {
            background-color: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
        }
    }
    @media screen and (max-width: 560px) {
        bottom: 10px;
        left: 10px;

        a {
            width: 30px;
            height: 30px;
        }
    }
`;

const SwitcherComponent = (props) => {
    const location = useLocation();

    return (
        <SwitchWrapper>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                ENG
            </Link>
            <Link
                to="/pl/"
                className={
                    location.pathname === "/pl" || location.pathname === "/pl/"
                        ? "active"
                        : ""
                }
            >
                PL
            </Link>
        </SwitchWrapper>
    );
};
export default SwitcherComponent;

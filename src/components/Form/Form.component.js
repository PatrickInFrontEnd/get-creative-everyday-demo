import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "./../mixins";
import GCEDphoto from "./../../assets/img/GCED.png";

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 60vw;
    min-width: 680px;
    max-width: 700px;
    height: 100px;
    margin: 60px auto;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.beige};
    border-radius: 50px;

    input {
        width: 60%;
        height: 80%;
        background-color: transparent;
        border: none;
        padding: 0 25px;

        &,
        &::placeholder {
            font-size: ${({ theme }) => theme.fz.M};
            color: ${({ theme }) => theme.colors.dark_blue};
            font-weight: ${({ theme }) => theme.fw.semiBold};
            font-family: ${({ theme }) => theme.ff.Montserrat};
        }
    }

    button[type="submit"] {
        ${flexCenter};
        border: none;
        width: 35%;
        height: 90%;
        padding: 10px 20px;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fz.M};
        font-weight: ${({ theme }) => theme.fw.semiBold};
        font-family: ${({ theme }) => theme.ff.Montserrat};
        background-color: ${({ theme }) => theme.colors.green};
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.light_green};
        }
    }

    img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        z-index: -1;
        width: 450px;
        height: 520px;
        object-fit: cover;
    }

    @media screen and (max-width: 1130px) {
        & {
            min-width: unset;
            width: 70vw;
        }
    }

    @media screen and (max-width: 900px) {
        & {
            height: 90px;

            input {
                &,
                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.S};
                }
            }

            button[type="submit"] {
                font-size: ${({ theme }) => theme.fz.S};
            }
        }
    }

    @media screen and (max-width: 700px) {
        & {
            width: calc(100vw - 80px);
            height: 80px;

            input {
                &,
                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.XS};
                }
            }

            button[type="submit"] {
                font-size: ${({ theme }) => theme.fz.XS};
            }
        }
    }

    @media screen and (max-width: 700px) {
        & {
            width: 100%;
            height: 80px;
            border-radius: 0;

            input {
                &,
                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.XS};
                }
            }

            button[type="submit"] {
                font-size: ${({ theme }) => theme.fz.XS};
            }
        }
    }

    @media screen and (max-width: 560px) {
        img {
            width: 100%;
            height: 560px;
        }

        input {
            padding: 0 15px 0 0;
        }
    }

    @media screen and (max-width: 400px) {
        button[type="submit"] {
            width: 40%;
        }

        button[type="submit"],
        input,
        input::placeholder {
            font-size: ${({ theme }) => theme.fz.XXS};
        }

        img {
            width: 100%;
            height: 500px;
        }
    }
`;

const FormComponent = (props) => {
    const [email, setEmail] = useState("");

    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Twój email"
                onChange={handleInputChange}
                name="email"
                required
            />
            <button type="submit">Zapisz się</button>
            <img src={GCEDphoto} alt="Get Creative Every Day" />
        </Form>
    );
};

export default FormComponent;

import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "./../mixins";
import GCEDphoto from "./../../assets/img/niezbednik.png";
import axios from "axios";

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
    background-color: ${({ theme }) => theme.colors.yellow};
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
            color: ${({ theme }) => theme.colors.white};
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

        &:disabled {
            background-color: ${({ theme }) => theme.colors.grey};
        }
    }

    img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 110%);
        z-index: -1;
        width: 420px;
        height: 490px;
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

const Message = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    width: 100%;
    height: 60px;
    ${flexCenter};
    background-color: ${({ theme, emailsent }) =>
        emailsent ? theme.colors.green : theme.colors.red};

    p {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        padding: 0 30px;
    }
`;

const FormComponent = (props) => {
    const [email, setEmail] = useState("");
    const [emailSuccessful, setEmailSuccessful] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    //const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        console.log(email);

        axios({
            method: "POST",
            url: `https://live.wzmacniacznauczanki.pl/api/email-save/${email}`,
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
        })
            .then((res) => {
                setEmailSuccessful(true);

                setTimeout(() => {
                    setEmailSuccessful(null);
                }, 3000);
            })
            .catch((e) => {
                setEmailSuccessful(false);
                setButtonDisabled(false);

                setTimeout(() => {
                    setEmailSuccessful(null);
                }, 3000);
            });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Twój email"
                    onChange={handleInputChange}
                    name="email"
                    required
                />
                <button type="submit" disabled={buttonDisabled}>
                    Zapisz się
                </button>
                <img src={GCEDphoto} alt="Get Creative Every Day" />
            </Form>
            {emailSuccessful === null ? null : emailSuccessful === true ? (
                <Message emailsent={true}>
                    <p>Email został zapisany</p>
                </Message>
            ) : (
                <Message emailsent={false}>
                    <p>Email nie został zapisany. Spróbuj ponownie później.</p>
                </Message>
            )}
        </>
    );
};

export default FormComponent;

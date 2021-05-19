import React, { useState, memo } from "react";
import styled, { useTheme } from "styled-components";
import { HeaderHola } from "../components/atoms/Header";
import { flexCenter } from "../components/mixins";
import axios from "axios";

const Form = styled.form`
    ${flexCenter};
    width: 100%;
    max-width: 900px;
    margin: 30px auto;

    input,
    button[type="submit"] {
        ${flexCenter};
        width: 70%;
        height: 70px;
        padding: 10px 20px;
        font-family: ${({ theme }) => theme.ff.Montserrat};
        font-size: ${({ theme }) => theme.fz.M};
        border: 4px solid ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};

        line-height: 100%;

        &::placeholder {
            font-family: ${({ theme }) => theme.ff.Montserrat};
            font-size: ${({ theme }) => theme.fz.M};
            color: ${({ theme }) => theme.colors.black};
        }
    }

    button[type="submit"] {
        position: relative;
        overflow: hidden;
        z-index: 1;
        width: 30%;
        border-left: none;
        transition: 0.3s;
        cursor: pointer;

        &:disabled {
            background-color: ${({ theme }) => theme.colors.grey};
            color: ${({ theme }) => theme.colors.dark_grey};

            &::before {
                display: none;
            }

            &:hover {
                color: ${({ theme }) => theme.colors.dark_grey};
            }
        }

        &::before {
            content: "";
            z-index: -1;
            width: 105%;
            height: 105%;
            position: absolute;
            bottom: 0;
            left: -2.5%;
            transition: 0.3s;
            transform: translateY(100%);
            background-color: ${({ theme }) => theme.colors.black};
        }

        &:hover {
            color: ${({ theme }) => theme.colors.white};

            &::before {
                transform: translateY(0);
            }
        }
    }

    @media screen and (max-width: 560px) {
        & {
            input {
                font-size: ${({ theme }) => theme.fz.S};

                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.S};
                }
            }

            button[type="submit"] {
                font-size: ${({ theme }) => theme.fz.S};
            }

            input,
            button[type="submit"] {
                height: 60px;
            }
        }
    }

    @media screen and (max-width: 450px) {
        & {
            input {
                font-size: ${({ theme }) => theme.fz.XS};

                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.XS};
                }
            }

            button[type="submit"] {
                font-size: ${({ theme }) => theme.fz.XS};
            }
        }
    }

    @media screen and (max-width: 390px) {
        & {
            input {
                font-size: ${({ theme }) => theme.fz.XXS};

                &::placeholder {
                    font-size: ${({ theme }) => theme.fz.XXS};
                }
            }

            button[type="submit"] {
                padding: 10px 0;
                font-size: ${({ theme }) => theme.fz.XXS};
            }
        }
    }
`;

const Message = styled.div`
    z-index: 3;
    width: 100%;
    height: 60px;
    ${flexCenter};

    p {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-weight: bold;
        padding: 10px 30px;

        &.red {
            background-color: ${({ theme }) => theme.colors.red};
        }

        &.green {
            background-color: ${({ theme }) => theme.colors.green};
        }
    }
`;

const API_PL_URL = "https://api.semantika.pl/api/email-save";
const API_ENG_URL = "https://api.semantika.pl/api/eng-email-save";

export const NewsletterSectionPL = memo((props) => {
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    //utils
    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        axios({
            method: "POST",
            url: `${API_PL_URL}/${email}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                setEmailSent(true);
            })
            .catch((e) => {
                setEmailSent(false);
                setButtonDisabled(false);
            });
    };

    return (
        <section
            id="newsletter"
            style={{
                padding: "20px 20px 40px",
                textAlign: "center",
                backgroundColor: theme.colors.yellow,
            }}
        >
            <HeaderHola uppercase>
                <h2>nadal za mało informacji?</h2>
                <h5>zapisz się na nasz newsletter by dostać ich więcej!</h5>
            </HeaderHola>
            <Form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Twój adres email"
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" disabled={buttonDisabled}>
                    Zapisz się
                </button>
            </Form>
            {emailSent === null ? null : emailSent === true ? (
                <Message>
                    <p className="green">Email został zapisany!</p>
                </Message>
            ) : (
                <Message>
                    <p className="red">
                        Email nie został zapisany. Spróbuj ponownie później.
                    </p>
                </Message>
            )}
        </section>
    );
});

const NewsletterSectionENG = memo((props) => {
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    //utils
    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        axios({
            method: "POST",
            url: `${API_ENG_URL}/${email}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                setEmailSent(true);
            })
            .catch((e) => {
                setEmailSent(false);
                setButtonDisabled(false);
            });
    };

    return (
        <section
            id="newsletter"
            style={{
                padding: "20px 20px 40px",
                textAlign: "center",
                backgroundColor: theme.colors.yellow,
            }}
        >
            <HeaderHola uppercase>
                <h2>still not enough information?</h2>
                <h5>sign up for our newsletter to get some details!</h5>
            </HeaderHola>
            <Form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email adress"
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" disabled={buttonDisabled}>
                    Sign Up
                </button>
            </Form>

            {emailSent === null ? null : emailSent === true ? (
                <Message>
                    <p className="green">Email has been saved!</p>
                </Message>
            ) : (
                <Message>
                    <p className="red">
                        Email has not beed saved. Please try again later.
                    </p>
                </Message>
            )}
        </section>
    );
});

export default NewsletterSectionENG;

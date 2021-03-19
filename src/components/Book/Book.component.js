import styled from "styled-components";
import GCEDPNG from "./../../assets/img/niezbednik.png";

const BookPhoto = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    transform: translate(0, 30%) rotate(-30deg);
    width: 400px;
    height: 580px;
    object-fit: contain;

    @media screen and (max-width: 1850px) {
        bottom: 40%;
        transform: translate(20%, 30%) rotate(-45deg);
    }

    @media screen and (max-width: 1500px) {
        transform: translate(40%, 30%) rotate(-45deg);
    }

    @media screen and (max-width: 1180px) {
        transform: translate(50%, 30%) rotate(-45deg);
    }

    @media screen and (max-width: 1100px) {
        bottom: 55%;
        transform: translate(40%, 30%) rotate(-45deg);
    }

    @media screen and (max-width: 700px) {
        bottom: 60%;
        width: 300px;
        height: 480px;
    }

    @media screen and (max-width: 500px) {
        bottom: unset;
        top: 10%;
        width: 180px;
        height: 360px;
        transform: translate(40%, -30%) rotate(-45deg);
    }
`;

const BookComponent = (props) => <BookPhoto src={GCEDPNG} />;

export default BookComponent;

import styled from "styled-components";
import flowerPNG from "./../../assets/img/flower.png";

const Flower = styled.img`
    z-index: -2;
    position: absolute;
    bottom: 0px;
    left: 0;
    transform: translate(-25%, 10%) rotate(45deg);
    width: 1000px;
    height: 520px;
    object-fit: cover;

    @media screen and (max-width: 1850px) {
        bottom: 40%;
        transform: translate(-35%, 30%) rotate(90deg);
    }

    @media screen and (max-width: 1230px) {
        width: 900px;
        height: 420px;
    }

    @media screen and (max-width: 1100px) {
        bottom: 55%;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const FlowerComponent = (props) => (
    <Flower src={flowerPNG} alt="Flower background" />
);

export default FlowerComponent;

import styled from "styled-components";
import flowerPNG from "./../../assets/img/flower.png";

const Flower = styled.img`
    z-index: -1;
    position: absolute;
    bottom: 10px;
    left: 0;
    transform: translateX(-35%) rotate(90deg);
    width: 1000px;
    height: 520px;
    object-fit: cover;
`;

const FlowerComponent = (props) => (
    <Flower src={flowerPNG} alt="Flower background" />
);

export default FlowerComponent;

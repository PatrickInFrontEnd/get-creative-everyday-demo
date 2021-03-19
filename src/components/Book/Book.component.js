import styled from "styled-components";
import GCEDPNG from "./../../assets/img/niezbednik.png";

const BookPhoto = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(0, 30%) rotate(-30deg);
    width: 400px;
    height: 580px;
    object-fit: contain;
`;

const BookComponent = (props) => <BookPhoto src={GCEDPNG} />;

export default BookComponent;

import React from "react";
import styled from "styled-components";
import { HeaderHola } from "../atoms/Header";
import one from "./../../assets/img/planner_bowel/1.png";

const Container = styled.div`
    width: 100%;
    margin: 30px auto;
    padding: 20px;
`;

const SliderComponent = (props) => <Container>
    <ContentBox>
        <Title>
            <HeaderHola uppercase>
                <h3>teaching hacks - tips useful in your everyday work</h3>
            </HeaderHola>
        </Title>
        <Description>
            Planner with 13 months of monthly and weekly pages from August 2021 to August 2022
        </Description>

        <Photo src={one} alt="planner" />
        <PaginationComponent actualNumber={1} length={15}/>
    </ContentBox>
</Container>;
export default SliderComponent;

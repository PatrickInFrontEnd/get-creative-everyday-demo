import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 9999999;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.yellow};
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.fz.S};
    font-weight: ${({ theme }) => theme.fw.bold};
    text-align: center;
`;

const SiteIsNotBeingUsedInfo = ({ children }) => (
    <Container>
        <Text>{children}</Text>
    </Container>
);

export default SiteIsNotBeingUsedInfo;

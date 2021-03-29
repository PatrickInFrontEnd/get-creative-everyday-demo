import React from "react";
import SemantikaPNG from "./../assets/img/semantika_logo.png";
import {
    Footer,
    DescriptionBlock,
    Header,
    CopyRight,
} from "./footer.component";

const FooterComponent = (props) => (
    <>
        <Footer id="contact">
            <DescriptionBlock>
                <img src={SemantikaPNG} alt="Logo Gw Semantika" />
                <p>Our registered business address:</p>
                <p>ul. Żuławska 10</p>
                <p>60-412 Poznań</p>
                <p>POLAND</p>
            </DescriptionBlock>

            <DescriptionBlock>
                <Header>Contact</Header>
                <h6 style={{ lineHeight: "160%" }}>
                    We are here to help!
                    <br />
                    Please, drop us a line.
                </h6>
                <p>
                    <i className="fas fa-envelope"></i>
                    biuro@semantika.pl
                </p>
                <p>
                    <i className="fas fa-phone-square-alt"></i>
                    +48 61 847 11 34
                </p>
                <a
                    href="https://semantika.pl/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-globe-europe"></i>
                    www.semantika.pl
                </a>
            </DescriptionBlock>

            <DescriptionBlock>
                <Header>Links</Header>
                <a
                    href="https://www.facebook.com/GetCreativeEveryday"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                </a>

                <a
                    href="https://www.instagram.com/get_creative_everyday/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                    Instagram
                </a>

                <a
                    href={`${process.env.PUBLIC_URL}/documents/icons_policy.txt`}
                    download
                >
                    Icons policy
                </a>
            </DescriptionBlock>
        </Footer>
        <CopyRight>
            <p>Copyright ©2021 Grupa Wydawnicza Semantika Sp. z o.o.</p>
        </CopyRight>
    </>
);
export default FooterComponent;

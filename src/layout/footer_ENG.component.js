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
                <p>ul. Żuławska 10, 60-412 Poznań</p>
                <p>KRS: 0000470869,</p>
                <p>Sąd Rejonowy w Poznaniu</p>
                <p>IX Wydział Gospodarczy KRS</p>
                <p>NIP: 7773232650, REGON: 302483298</p>
            </DescriptionBlock>

            <DescriptionBlock>
                <Header>Contact</Header>
                <h6>Have a question? Write us!</h6>
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

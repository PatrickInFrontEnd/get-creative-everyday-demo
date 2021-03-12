import React from "react";
import Header from "../components/Header/Header.component";
import Form from "./../components/Form/Form.component";
import SocialMedia from "./../components/SocialMedia/SocialMedia.component";
import { ReactComponent as FbIcon } from "./../assets/svg/icon_facebook.svg";
import { ReactComponent as InstagramIcon } from "./../assets/svg/icon_instagram.svg";
import { ReactComponent as WWWIcon } from "./../assets/svg/icon_www.svg";
import GCPNG from "./../assets/img/gc.png";
import GCLogoPNG from "./../assets/img/gclogo.png";
import SemantikaPNG from "./../assets/img/semantika.png";

const MainPageContainer = (props) => (
    <>
        <section id="niezbednik">
            <Header />
            <Form />
        </section>
        <SocialMedia
            containerSize="medium"
            LinkSize="medium"
            linkUrl="#"
            imgSrc={GCPNG}
            position
        >
            <FbIcon />
        </SocialMedia>

        <SocialMedia
            containerSize="big"
            LinkSize="big"
            linkUrl="#"
            imgSrc={GCLogoPNG}
            linkPosition="left"
            position={{ top: "50px", left: "80%" }}
        >
            <InstagramIcon />
        </SocialMedia>

        <SocialMedia
            linkUrl="#"
            imgSrc={SemantikaPNG}
            position={{ top: "350px", left: "75%" }}
        >
            <WWWIcon />
        </SocialMedia>
    </>
);

export default MainPageContainer;

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
import Flower from "../components/Flower/Flower.component";
import Tile, {
    TileIconContainer,
} from "./../components/atoms/Tile/Tile.component";
import TilesSection from "./../components/Tiles Container/Tiles.container";
import { ReactComponent as GlobeIcon } from "./../assets/svg/icon_globe.svg";
import { ReactComponent as CalendarIcon } from "./../assets/svg/icon_calendar.svg";
import { ReactComponent as TrophyIcon } from "./../assets/svg/icon_trophy.svg";
import { ReactComponent as StarIcon } from "./../assets/svg/icon_star.svg";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <Header />
            <Form />
        </section>

        <TilesSection id="niezbednik">
            <Tile>
                <h4>English</h4>
                <p>Stworzony po angielsku dla nauczycieli angielskiego</p>
                <TileIconContainer>
                    <GlobeIcon />
                </TileIconContainer>
            </Tile>
            <Tile>
                <h4>Cały rok</h4>
                <p>
                    13 miesięcy, od sierpnia do sierpnia &#x28; zgodnie z
                    programami w różnych krajach &#41;
                </p>
                <TileIconContainer>
                    <CalendarIcon />
                </TileIconContainer>
            </Tile>
            <Tile>
                <h4>Organizacja</h4>
                <p>
                    Wszystko w jednym miejscu – kalendarz i planner w pracy
                    nauczyciela
                </p>
                <TileIconContainer>
                    <TrophyIcon />
                </TileIconContainer>
            </Tile>
            <Tile>
                <h4>Kreatywność</h4>
                <p>Pomysły na zajęcia językowe na każdy tydzień roku</p>
                <TileIconContainer>
                    <StarIcon />
                </TileIconContainer>
            </Tile>
        </TilesSection>

        <SocialMedia
            containerSize="medium"
            LinkSize="medium"
            linkUrl="https://www.facebook.com/magazynGetCreative/"
            imgSrc={GCPNG}
            position
        >
            <FbIcon />
        </SocialMedia>

        <SocialMedia
            containerSize="big"
            LinkSize="big"
            linkUrl="https://www.instagram.com/czasopismo_getcreative/"
            imgSrc={GCLogoPNG}
            linkPosition="left"
            position={{ top: "50px", left: "80%" }}
        >
            <InstagramIcon />
        </SocialMedia>

        <SocialMedia
            linkUrl="https://semantika.pl/"
            imgSrc={SemantikaPNG}
            position={{ top: "350px", left: "75%" }}
        >
            <WWWIcon />
        </SocialMedia>

        <Flower />
    </>
);

export default MainPageContainer;

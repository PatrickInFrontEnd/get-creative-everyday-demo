import React, { memo } from "react";
import { HeaderHola } from "./../components/atoms/Header";
import AuthorsCircle, {
    AuthorsCircleContainerPL,
    AuthorsCircleContainerSPANISH,
} from "./../components/AuthorsCircle/AuthorsCircle.component";
import AuthorsContainer, {
    AuthorsContainerPL,
    AuthorsContainerSPANISH,
} from "./../components/AuthorsContainer/Authors.container";

export const AuthorsSectionPL = memo((props) => (
    <section id="authors" style={{ padding: "20px" }}>
        <HeaderHola uppercase>
            <h2>OD NAUCZYCIELI DLA NAUCZYCIELI</h2>
        </HeaderHola>

        <AuthorsCircleContainerPL />

        <HeaderHola>
            <h3>Część autorów, którzy wnieśli swój wkład:</h3>
        </HeaderHola>

        <AuthorsContainerPL />
    </section>
));

export const AuthorsSectionSPANISH = memo((props) => (
    <section id="authors" style={{ padding: "20px" }}>
        <HeaderHola uppercase>
            <h2>DE PROFESORES PARA PROFESORES</h2>
        </HeaderHola>

        <AuthorsCircleContainerSPANISH />

        <HeaderHola>
            <h3>Algunos de los autores contribuyentes:</h3>
        </HeaderHola>

        <AuthorsContainerSPANISH />
    </section>
));

const AuthorsSection = memo((props) => (
    <section id="authors" style={{ padding: "20px 20px 0" }}>
        <HeaderHola uppercase>
            <h2>From teachers to teachers</h2>
        </HeaderHola>

        <AuthorsCircle />

        <HeaderHola>
            <h3>Some of the authors who contributed are:</h3>
        </HeaderHola>

        <AuthorsContainer />
    </section>
));

export default AuthorsSection;

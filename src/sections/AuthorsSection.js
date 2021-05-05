import React from "react";
import { HeaderHola } from "./../components/atoms/Header";
import AuthorsCircle, {
    AuthorsCircleContainerPL,
} from "./../components/AuthorsCircle/AuthorsCircle.component";
import AuthorsContainer, {
    AuthorsContainerPL,
} from "./../components/AuthorsContainer/Authors.container";

export const AuthorsSectionPL = (props) => (
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
);

const AuthorsSection = (props) => (
    <section id="authors" style={{ padding: "20px" }}>
        <HeaderHola uppercase>
            <h2>From teachers to teachers</h2>
        </HeaderHola>

        <AuthorsCircle />

        <HeaderHola>
            <h3>Some of the authors who contributed are:</h3>
        </HeaderHola>

        <AuthorsContainer />
    </section>
);

export default AuthorsSection;

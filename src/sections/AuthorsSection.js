import React from "react";
import { HeaderHola } from "./../components/atoms/Header";
import AuthorsCircle from "./../components/AuthorsCircle/AuthorsCircle.component";
import AuthorsContainer from "./../components/AuthorsContainer/Authors.container";

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

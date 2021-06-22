import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { HeaderHola } from "./../components/atoms/Header";
import AuthorsCircle from "./../components/AuthorsCircle/AuthorsCircle.component";
import AuthorsContainer from "./../components/AuthorsContainer/Authors.container";

const AuthorsSection = (props) => {
    const { t } = useTranslation();

    return (
        <section id="authors" style={{ padding: "20px 20px 0" }}>
            <HeaderHola uppercase>
                <h2>{t("atoms.fromTeachersToTeachers")}</h2>
            </HeaderHola>

            <AuthorsCircle />

            <HeaderHola>
                <h3>{t("atoms.authorsContribution")}</h3>
            </HeaderHola>

            <AuthorsContainer />
        </section>
    );
};

export default AuthorsSection;

import { FC } from "react";
import { Project } from "./Project";

import { TOKEN_SYMBOLS, TOKEN_HREF, TOKEN_TITLE } from "../../../entities";
import { useTranslation } from "react-i18next";

export const ActiveProjects: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Project
                buttonName={t("common.swap") + " " + TOKEN_SYMBOLS.ARA + " / "}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.ARAORIG]}
                symbol={TOKEN_SYMBOLS.ARAORIG}
                href={TOKEN_HREF[TOKEN_SYMBOLS.ARAORIG]}
            />
            <Project
                title={TOKEN_TITLE[TOKEN_SYMBOLS.WeBi]}
                symbol={TOKEN_SYMBOLS.WeBi}
                href={TOKEN_HREF[TOKEN_SYMBOLS.WeBi]}
            />
        </div>
    );
};

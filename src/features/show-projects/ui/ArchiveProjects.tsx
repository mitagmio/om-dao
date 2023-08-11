import { FC } from "react";
import { Project } from "./Project";

import { TOKEN_SYMBOLS, TOKEN_HREF, TOKEN_TITLE } from "../../../entities";
import { useTranslation } from "react-i18next";

export const ArchiveProjects: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.ARA]}
                symbol={TOKEN_SYMBOLS.ARA}
                href={TOKEN_HREF[TOKEN_SYMBOLS.ARA]}
            />
        </div>
    );
};

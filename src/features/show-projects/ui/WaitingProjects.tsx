import { FC } from "react";
import { Project } from "./Project";

import { TOKEN_SYMBOLS, TOKEN_HREF, TOKEN_TITLE } from "../../../entities";
import { useTranslation } from "react-i18next";

export const WaitingProjects: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.CR]}
                symbol={TOKEN_SYMBOLS.CR}
                href={TOKEN_HREF[TOKEN_SYMBOLS.CR]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.CONS]}
                symbol={TOKEN_SYMBOLS.CONS}
                href={TOKEN_HREF[TOKEN_SYMBOLS.CONS]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.CONT]}
                symbol={TOKEN_SYMBOLS.CONT}
                href={TOKEN_HREF[TOKEN_SYMBOLS.CONT]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.DELC]}
                symbol={TOKEN_SYMBOLS.DELC}
                href={TOKEN_HREF[TOKEN_SYMBOLS.DELC]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.CHAI]}
                symbol={TOKEN_SYMBOLS.CHAI}
                href={TOKEN_HREF[TOKEN_SYMBOLS.CHAI]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.MAGIC]}
                symbol={TOKEN_SYMBOLS.MAGIC}
                href={TOKEN_HREF[TOKEN_SYMBOLS.MAGIC]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.Crc]}
                symbol={TOKEN_SYMBOLS.Crc}
                href={TOKEN_HREF[TOKEN_SYMBOLS.Crc]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.LED]}
                symbol={TOKEN_SYMBOLS.LED}
                href={TOKEN_HREF[TOKEN_SYMBOLS.LED]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.FP]}
                symbol={TOKEN_SYMBOLS.FP}
                href={TOKEN_HREF[TOKEN_SYMBOLS.FP]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.DB]}
                symbol={TOKEN_SYMBOLS.DB}
                href={TOKEN_HREF[TOKEN_SYMBOLS.DB]}
            />
            <Project
                buttonName={t("common.show")}
                title={TOKEN_TITLE[TOKEN_SYMBOLS.CRD]}
                symbol={TOKEN_SYMBOLS.CRD}
                href={TOKEN_HREF[TOKEN_SYMBOLS.CRD]}
            />
        </div>
    );
};

import { FC, useEffect } from "react";
/*import { TigrForm } from "../../features/buy-tigr";*/
import { CRForm } from "../../features/buy-cr";
import { CRFormLaunch } from "../../features/buy-cr-launch";
/*import { CONSForm } from "../../features/buy-cons";*/
import { CONTFormLaunch } from "../../features/buy-cont-launch";
import { CHAIFormLaunch } from "../../features/buy-chai-launch";
import { TIGRFormLaunch } from "../../features/buy-tigr-launch";
import { CONSFormLaunch } from "../../features/buy-cons-launch";
import { useParams } from "react-router";
import { useRootStore } from "../../app/use-root-store";

export const ProjectPage: FC = () => {
  const params = useParams();
  const { updateRefCode } = useRootStore();

  useEffect(() => {
    const { refcode } = params

    if (refcode) {
      updateRefCode(refcode)
    }
  }, [params]);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {params.symbol === 'omdwTigr' && <TIGRFormLaunch />}
      {params.symbol === 'omdwCRB' && <CRForm />}
      {params.symbol === 'omdwCons' && <CONSFormLaunch />}
      {/* {params.symbol === "omdwCRB" && <CRFormLaunch />} */}
      {params.symbol === 'omdwCont' && <CONTFormLaunch />}
      {params.symbol === 'omdwChai' && <CHAIFormLaunch />}
    </div>
  );
};

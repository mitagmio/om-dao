import { FC, useEffect } from "react";
import { TIGRFormLaunch } from "../../features/buy-tigr-launch";
import { CRFormLaunch } from "../../features/buy-cr-launch";
import { CONSFormLaunch } from "../../features/buy-cons-launch";
import { CONTFormLaunch } from "../../features/buy-cont-launch";
import { CHAIFormLaunch } from "../../features/buy-chai-launch";
import { LEDFormLaunch } from "../../features/buy-led-launch";
import { DELCFormLaunch } from "../../features/buy-delc-launch";
import { MAGICFormLaunch } from "../../features/buy-magic-launch/";
import { ARAFormLaunch } from "../../features/buy-ara-launch/";
import { useParams } from "react-router";
import { useRootStore } from "../../app/use-root-store";
import { OoFormLaunch } from "../../features/buy-oo-launch";
import { CrcFormLaunch } from "../../features/buy-crc-launch";
import { ARAFormSwap } from "../../features/swap-ara-launch";
import { FPFormLaunch } from "../../features/buy-fp-launch";
import { DBFormLaunch } from "../../features/buy-db-launch";
import { CRDFormLaunch } from "../../features/buy-crd-launch";

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
      {params.symbol === 'omdwCRB' && <CRFormLaunch />}
      {params.symbol === 'omdwCons' && <CONSFormLaunch />}
      {params.symbol === 'omdwCont' && <CONTFormLaunch />}
      {params.symbol === 'omdwChai' && <CHAIFormLaunch />}
      {params.symbol === 'omdwLed' && <LEDFormLaunch />}
      {params.symbol === 'omdwDelC' && <DELCFormLaunch />}
      {params.symbol === 'omdwMS' && <MAGICFormLaunch />}
      {params.symbol === 'omAra' && <ARAFormLaunch />}
      {params.symbol === 'omOo' && <OoFormLaunch />}
      {params.symbol === 'omCrc' && <CrcFormLaunch />}
      {params.symbol === 'AG' && <ARAFormSwap />}
      {params.symbol === 'omFP' && <FPFormLaunch />}
      {params.symbol === 'omDB' && <DBFormLaunch />}
      {params.symbol === 'omCRD' && <CRDFormLaunch />}
    </div>
  );
};

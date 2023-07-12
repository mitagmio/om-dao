import {
    USDT_ABI,
    OMDAO_ABI,
    OMDAO_STAKE_ABI,
    WRAPPED_TOKEN_ABI,
    ARADENA_TOKEN_ABI,
} from "./contracts-abi";
import { isProd } from "../../../shared/config";
import { Address } from "wagmi";

export enum TOKEN_SYMBOLS {
    USDT = "USDT",
    OMD = "OMD",
    STOMD = "stOMD",
    TIGR = "omdwTigr",
    CR = "omdwCRB",
    CONS = "omdwCons",
    CONT = "omdwCont",
    CHAI = "omdwChai",
    LED = "omdwLed",
    DELC = "omdwDelC",
    MAGIC = "omdwMS",
    ARA = "omAra",
    ARAORIG = "AG",
    Oo = "omOo",
    Crc = "omCrc",
    FP = "omFP",
    DB = "omDB",
    CRD = "omCRD",
}

export const TOKEN_ADDRESS: Record<TOKEN_SYMBOLS, Address> = {
    [TOKEN_SYMBOLS.USDT]: isProd()
        ? "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        : "0x8B31e3910f59A0975253D3f2f6C6e7D8F7caC144",
    [TOKEN_SYMBOLS.OMD]: isProd()
        ? "0xA4282798c2199a1C58843088297265acD748168c"
        : "0x2d3F3Bf3997b5601D7f4f3E932912886C4c15F29",
    [TOKEN_SYMBOLS.STOMD]: isProd()
        ? "0x497bdbA917430E72d09993a55cdBBD411763168B"
        : "0xD9e8F04c685b2C12027f08b71e8f3fEF6a9A6668",
    [TOKEN_SYMBOLS.TIGR]: isProd()
        ? "0xe1C9624Cee6da05c80572280Bc3e3bEaEd4cd3Ef"
        : "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [TOKEN_SYMBOLS.CR]: isProd()
        ? "0x178825587FC1A7D5D6373221182290a7A4566a0A"
        : "0x79D31450D34cad1b2ac0bB91bA6b8B7BEaDa609f",
    [TOKEN_SYMBOLS.CONS]: isProd()
        ? "0x967525A2030d6Ac7a0cBf0cb630107D8720A52Ef"
        : "0xB80470b73f685d45d5a2F8998f06085Ede2154fe",
    [TOKEN_SYMBOLS.CONT]: isProd()
        ? "0xf6d8220D1470d12F007B3540b111Eb4e7db2Adbe"
        : "0xbc0D848dAA133fa5d767b1fDa7fF774DB2Ff559e",
    [TOKEN_SYMBOLS.CHAI]: isProd()
        ? "0x1Aeb27D2F0c1861A538b289c602fFA784d3EDCB0"
        : "0x21a56167802F2387E25a45908Ca170dF5a786AE0",
    [TOKEN_SYMBOLS.LED]: isProd()
        ? "0x1D8efA821D2EDEFb7c71d79F317cDe14dEE4F748"
        : "0x62D124483252C906E8CCF02Efd893c305A25Dd42",
    [TOKEN_SYMBOLS.DELC]: isProd()
        ? "0x6E98eF583C64482a6A6b63a679197813B7c3Cd1A"
        : "0x4a8bbBaE7fac603A82707D6FE2315030a7E71a63",
    [TOKEN_SYMBOLS.MAGIC]: isProd()
        ? "0x62D124483252C906E8CCF02Efd893c305A25Dd42"
        : "0x62D124483252C906E8CCF02Efd893c305A25Dd42",
    [TOKEN_SYMBOLS.ARA]: isProd()
        ? "0x48A063759dF79A1B3A5cCdfE25C1a9980d61BD6F"
        : "0x48A063759dF79A1B3A5cCdfE25C1a9980d61BD6F",
    [TOKEN_SYMBOLS.ARAORIG]: isProd()
        ? "0xE276Bd40F5C3d58371Eb78b19FE7A149F1431Fb9"
        : "0xE276Bd40F5C3d58371Eb78b19FE7A149F1431Fb9",
    [TOKEN_SYMBOLS.Oo]: isProd()
        ? "0xaBB1d16B6DC6ad06b202bc9800690E041f343592"
        : "0xaBB1d16B6DC6ad06b202bc9800690E041f343592",
    [TOKEN_SYMBOLS.Crc]: isProd()
        ? "0xFC6493F0bcF60F086a83b09cF707C9a09Df16498"
        : "0xFC6493F0bcF60F086a83b09cF707C9a09Df16498",
    [TOKEN_SYMBOLS.FP]: isProd()
        ? "0x704051Da215FCD770fE55995b9e661eb6c9B88da"
        : "0x704051Da215FCD770fE55995b9e661eb6c9B88da",
    [TOKEN_SYMBOLS.DB]: isProd()
        ? "0xaa51235532f7aF306233F40AFE166C9d550144d3"
        : "0xaa51235532f7aF306233F40AFE166C9d550144d3",
    [TOKEN_SYMBOLS.CRD]: isProd()
        ? "0x1370b77905a023813Aa38cDCb2213393ECdD363c"
        : "0x1370b77905a023813Aa38cDCb2213393ECdD363c",
};

export const TOKEN_ABI: { [key in TOKEN_SYMBOLS]: any } = {
    [TOKEN_SYMBOLS.USDT]: USDT_ABI,
    [TOKEN_SYMBOLS.OMD]: OMDAO_ABI,
    [TOKEN_SYMBOLS.STOMD]: OMDAO_STAKE_ABI,
    [TOKEN_SYMBOLS.TIGR]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.CR]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.CONS]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.CONT]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.CHAI]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.LED]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.DELC]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.MAGIC]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.ARA]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.ARAORIG]: ARADENA_TOKEN_ABI,
    [TOKEN_SYMBOLS.Oo]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.Crc]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.FP]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.DB]: WRAPPED_TOKEN_ABI,
    [TOKEN_SYMBOLS.CRD]: WRAPPED_TOKEN_ABI,
};

export const TOKEN_NAME: { [key in TOKEN_SYMBOLS]: string } = {
    [TOKEN_SYMBOLS.USDT]: "Tether USD",
    [TOKEN_SYMBOLS.OMD]: "OM DAO",
    [TOKEN_SYMBOLS.STOMD]: "OM DAO (Staked)",
    [TOKEN_SYMBOLS.TIGR]: "OM DAO Wrapped Tigr",
    [TOKEN_SYMBOLS.CR]: "OM DAO Wrapped Cross River Bank",
    [TOKEN_SYMBOLS.CONS]: "OM DAO Wrapped Consensys",
    [TOKEN_SYMBOLS.CONT]: "OM DAO Wrapped Contango",
    [TOKEN_SYMBOLS.CHAI]: "OM DAO Wrapped Chainalysis",
    [TOKEN_SYMBOLS.LED]: "OM DAO Wrapped Ledger",
    [TOKEN_SYMBOLS.DELC]: "OM DAO Wrapped Delegate Cash",
    [TOKEN_SYMBOLS.MAGIC]: "OM DAO Wrapped Magic Square",
    [TOKEN_SYMBOLS.ARA]: "OM DAO Wrapped Aradena",
    [TOKEN_SYMBOLS.ARAORIG]: "Aradenean Gold",
    [TOKEN_SYMBOLS.Oo]: "OM DAO Wrapped omOo",
    [TOKEN_SYMBOLS.Crc]: "OM DAO Wrapped Crecy",
    [TOKEN_SYMBOLS.FP]: "OM DAO Wrapped FlexPort",
    [TOKEN_SYMBOLS.DB]: "OM DAO Wrapped deBridge",
    [TOKEN_SYMBOLS.CRD]: "OM DAO Wrapped Credora",
};

export const TOKEN_DECIMAL: { [key in TOKEN_SYMBOLS]: string } = {
    [TOKEN_SYMBOLS.USDT]: "6",
    [TOKEN_SYMBOLS.OMD]: "6",
    [TOKEN_SYMBOLS.STOMD]: "6",
    [TOKEN_SYMBOLS.TIGR]: "6",
    [TOKEN_SYMBOLS.CR]: "6",
    [TOKEN_SYMBOLS.CONS]: "6",
    [TOKEN_SYMBOLS.CONT]: "6",
    [TOKEN_SYMBOLS.CHAI]: "6",
    [TOKEN_SYMBOLS.LED]: "6",
    [TOKEN_SYMBOLS.DELC]: "6",
    [TOKEN_SYMBOLS.MAGIC]: "6",
    [TOKEN_SYMBOLS.ARA]: "6",
    [TOKEN_SYMBOLS.ARAORIG]: "18",
    [TOKEN_SYMBOLS.Oo]: "6",
    [TOKEN_SYMBOLS.Crc]: "6",
    [TOKEN_SYMBOLS.FP]: "6",
    [TOKEN_SYMBOLS.DB]: "6",
    [TOKEN_SYMBOLS.CRD]: "6",
};

export const TOKEN_HREF: { [key in TOKEN_SYMBOLS]: string } = {
    [TOKEN_SYMBOLS.USDT]: "https://tether.to",
    [TOKEN_SYMBOLS.OMD]: "https://omdao.vc",
    [TOKEN_SYMBOLS.STOMD]: "https://omdao.vc",
    [TOKEN_SYMBOLS.TIGR]:
        "https://selectedpublic.notion.site/Tiger-Trade-a081fd79e144442dbf133a83eba5fb68",
    [TOKEN_SYMBOLS.CR]:
        "https://selectedpublic.notion.site/Cross-River-46adffcd372143f3b81e486d518ab222",
    [TOKEN_SYMBOLS.CONS]:
        "https://selectedpublic.notion.site/ConsenSys-e538fbe363ea4bbd9165a7aec7aa5fc1",
    [TOKEN_SYMBOLS.CONT]:
        "https://selectedpublic.notion.site/Contango-c61be1a2aaf4438cbb1567b25ec10275",
    [TOKEN_SYMBOLS.CHAI]:
        "https://selectedpublic.notion.site/Chainalysis-ef0d077b3c974dc49d353f5840f15475",
    [TOKEN_SYMBOLS.LED]:
        "https://www.notion.so/selectedpublic/Ledger-d1e8be65607741d0aa07c482b45333c5",
    [TOKEN_SYMBOLS.DELC]: "https://github.com/0xfoobar/delegate-cash-frontend",
    [TOKEN_SYMBOLS.MAGIC]:
        "https://selectedpublic.notion.site/Magic-Square-45994ad5105742b4b1cd8deb0d6feff5",
    [TOKEN_SYMBOLS.ARA]:
        "https://selectedpublic.notion.site/Aradena-8a79e3ddb7174c128dbb2e68484fe0d2",
    [TOKEN_SYMBOLS.ARAORIG]:
        "https://selectedpublic.notion.site/Aradena-8a79e3ddb7174c128dbb2e68484fe0d2",
    [TOKEN_SYMBOLS.Oo]: "https://youtu.be/NNS2NnZ67xs",
    [TOKEN_SYMBOLS.Crc]:
        "https://selectedpublic.notion.site/Crecy-da12da0f0086482299a5cdf141ffc1a7",
    [TOKEN_SYMBOLS.FP]: "https://t.me/c/1802432571/432",
    [TOKEN_SYMBOLS.DB]: "https://t.me/c/1802432571/439",
    [TOKEN_SYMBOLS.CRD]: "https://t.me/c/1802432571/522",
};

export const TOKEN_TITLE: { [key in TOKEN_SYMBOLS]: string } = {
    [TOKEN_SYMBOLS.USDT]: "Tether",
    [TOKEN_SYMBOLS.OMD]: "OM DAO",
    [TOKEN_SYMBOLS.STOMD]: "OM DAO (Staked)",
    [TOKEN_SYMBOLS.TIGR]: "Tiger Trade",
    [TOKEN_SYMBOLS.CR]: "Cross River",
    [TOKEN_SYMBOLS.CONS]: "ConsenSys",
    [TOKEN_SYMBOLS.CONT]: "Contango",
    [TOKEN_SYMBOLS.CHAI]: "Chainalysis",
    [TOKEN_SYMBOLS.LED]: "Ledger",
    [TOKEN_SYMBOLS.DELC]: "Delegate Cash",
    [TOKEN_SYMBOLS.MAGIC]: "Magic Square",
    [TOKEN_SYMBOLS.ARA]: "Aradena",
    [TOKEN_SYMBOLS.ARAORIG]: "Aradenean Gold",
    [TOKEN_SYMBOLS.Oo]: "Oo",
    [TOKEN_SYMBOLS.Crc]: "Crecy",
    [TOKEN_SYMBOLS.FP]: "Flexport",
    [TOKEN_SYMBOLS.DB]: "deBridge",
    [TOKEN_SYMBOLS.CRD]: "Credora",
};

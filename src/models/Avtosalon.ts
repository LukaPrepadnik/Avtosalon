import { IAvto, avto4, avto6 } from "./Avto";
import { avto1, avto2, avto3, avto5 } from "./Avto";


export interface IAvtosalon {
    id: number;
    ime: string;
    avtomobili: IAvto[];
}


export const avtosalon: IAvtosalon = { id: 1001, ime: "Avtohiša Avtomobilček", avtomobili: [avto1, avto2, avto3, avto4, avto5, avto6] }

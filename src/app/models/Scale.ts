export interface Scale {
    id:number;
    name: string;
    description:string;
    notes:string;
    type: "Mayor" | "Menor" | "Menor armonica" | "Menor melodica" | "Pentatonica" | "Cromatica";
}

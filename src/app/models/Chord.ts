export interface Chord{
    id:number;
    name: string;
    description:string;
    notes:string;
    type: "Mayor" | "Menor" |"Disminuido" | " Aumentado" | "Maj7" | "7ma" | 
    "Menor 7"|"Menor Maj7"|"Disminuido 7"|"7ma semidisminuida"|"Maj9"|"9na"|"Menor 9"|
    "9na aumentada"|"Menor 7b9"|"11na"|"Maj11"|"11na menor"|"13na"|"Maj13"|"Menor 13"|
    "add9"|"add11"|"add13"|"aug11"|"6";
}
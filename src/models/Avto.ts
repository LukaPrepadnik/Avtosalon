export interface IAvto {
    id: number;
    cena: number;
    znamka: string;
    model: string;
    letnik: number;
    barva: string;
    oprema: string;
    slika: string;
}

export const avto1: IAvto = { id: 1001, cena: 320000, znamka: "Opel ", model: "Astra", letnik: 2021, barva: "modra", oprema: "klima, ogrevan volan", slika: "https://ev-database.org/img/auto/Opel_Astra_Electric/Opel_Astra_Electric-01@2x.jpg" };
export const avto2: IAvto = { id: 1002, cena: 530000, znamka: "Peugeot", model: "308", letnik: 2019, barva: "modra", oprema: "klima, ogrevan volan", slika: "https://www.autofacil.es/wp-content/uploads/2021/05/Peugeot-308-2022-1600-01.jpg" };
export const avto3: IAvto = { id: 1003, cena: 240000, znamka: "Ford", model: "Focus", letnik: 2022, barva: "modra", oprema: "klima, ogrevan volan", slika: "https://www.avto.info/f/pics/Obvestila/2021_FORD_FOCUS_ACTIVE_01-1_b.jpg" };
export const avto4: IAvto = { id: 1004, cena: 80000, znamka: "Volkswagen", model: "Golf", letnik: 2022, barva: "bela", oprema: "klima, ogrevan volan", slika: "https://cdn.motor1.com/images/mgl/67P9Z/s3/nuova-volkswagen-golf.jpg" };
export const avto5: IAvto = { id: 1005, cena: 70000, znamka: "Volvo", model: "V60", letnik: 2018, barva: "modra", oprema: "klima, ogrevan volan", slika: "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/4977299d-7891-481d-9dbd-88f740ee1915/Volvo%20V60%20%287%29.jpg" };
export const avto6: IAvto = { id: 1006, cena: 70000, znamka: "BMW", model: "M3", letnik: 2018, barva: "zelena", oprema: "klima, ogrevan volan", slika: "https://media.ed.edmunds-media.com/bmw/m3/2022/oem/2022_bmw_m3_sedan_competition_fq_oem_1_1600.jpg" };

export const avto7: IAvto = { id: 1007, cena: 80000, znamka: "Seat", model: "Leon", letnik: 2022, barva: "rdeča", oprema: "klima, ogrevan volan", slika: "https://beta.finance.si//pics//cache_se/seat-leon-2020-4-5e30981a115d4-5e30981a120f8.jpg.cut.1580243473-5e309a114249f.jpg" };

export const avto8: IAvto = { id: 1008, cena: 80000, znamka: "Audi", model: "a6", letnik: 2022, barva: "rdeča", oprema: "klima, ogrevan volan", slika: "https://audimediacenter-a.akamaihd.net/system/production/media/58226/images/5c9bcea89d698d205cdc18554d15f2bdb606a504/A181738_blog.jpg?1582400086" };



export const polje: IAvto[] = [];
polje.push(avto1, avto2, avto3, avto4, avto5, avto6);

export const poljeNajetih: IAvto[] = [];
poljeNajetih.push(avto7);

export const poljeKupljenih: IAvto[] = [];
poljeKupljenih.push(avto8);


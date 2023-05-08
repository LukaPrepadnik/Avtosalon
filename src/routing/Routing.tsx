import React from "react";
import { IAvto } from "../models/Avto";
import { polje } from "../models/Avto";
import { avtosalon } from "../models/Avtosalon";
import SeznamAvtomobilov from "../components/SeznamAvtomobilov";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { IAvtosalon } from "../models/Avtosalon";
import DodajAvtomobil from "../forms/DodajAvtomobil";
import Noga from "../components/Noga";
import Menu from "../components/Menu";
import Telo from "../components/Telo";
import OSalonu from "../components/OSalonu";
import { poljeNajetih } from "../models/Avto";
import TeloNajeta from "../components/TeloNajeta";
import SeznamNajetihAvtomobilov from "../components/SeznamNajetihAvtomobilov";
import { poljeKupljenih } from "../models/Avto";
import SeznamKupljenihAvtomobilov from "../components/SeznamKupljenihAvtomobilov";


interface RoutingProps {

}



const Routing = (props: RoutingProps) => {
    const [poljeAvtomobilov, setPoljeAvtomobilov] = React.useState<IAvto[]>(polje);
    const [poljeNajetihAvtomobilov, setPoljeNajetihAvtombilov] = React.useState<IAvto[]>(poljeNajetih);
    const [poljeKupljenihAvtomobilov, setPoljeKupljenihAvtomobilov] = React.useState<IAvto[]>(poljeKupljenih);


    const handleAdd = (avtomobil: IAvto) => {
        let posodobljeniAvtomobili = Array.from(poljeAvtomobilov);
        posodobljeniAvtomobili.push(avtomobil)
        setPoljeAvtomobilov(posodobljeniAvtomobili);
    }
    /*     const posodbljenAvtomobil: IAvtosalon = {
            ...avtosalon,
            avtomobili: poljeAvtomobilov
        } */


    const handleDelete1 = (id: number) => {
        let posodobljeniAvtomobili = [...poljeAvtomobilov];
        posodobljeniAvtomobili = posodobljeniAvtomobili.filter((a: IAvto) => a.id !== id);
        setPoljeAvtomobilov(posodobljeniAvtomobili);
    };
    const handleDelete2 = (id: number) => {
        let posodobljeniAvtomobili = [...poljeNajetihAvtomobilov];
        posodobljeniAvtomobili = posodobljeniAvtomobili.filter((a: IAvto) => a.id !== id);
        setPoljeNajetihAvtombilov(posodobljeniAvtomobili);
    };


    const handleRent = (avto: IAvto) => {
        setPoljeNajetihAvtombilov(prevCars => [...prevCars, avto]);
        poljeNajetih.push(avto);
        const posodobljeno = poljeAvtomobilov.filter(a => a.id !== avto.id);
        setPoljeAvtomobilov(posodobljeno);

    };


    const handleVrni = (avto: IAvto) => {
        setPoljeAvtomobilov(prevCars => [...prevCars, avto]);
        polje.push(avto);
        const posodobljeno = poljeNajetihAvtomobilov.filter(a => a.id !== avto.id);
        setPoljeNajetihAvtombilov(posodobljeno);
    }


    const handleProdaj = (avto: IAvto) => {
        setPoljeKupljenihAvtomobilov(prevCars => [...prevCars, avto]);
        poljeKupljenih.push(avto);
        const posodobljeno = poljeAvtomobilov.filter(a => a.id !== avto.id);
        setPoljeAvtomobilov(posodobljeno);
    }



    const handleEdit = (id: number) => {
        const avtoIndex = poljeAvtomobilov.findIndex((a: IAvto) => a.id === id);

        const avto = poljeAvtomobilov[avtoIndex];

        const cena = prompt("Cena:");
        const znamka = prompt("Znamka:");
        const model = prompt("Model:");
        const letnik = prompt("Letnik:");
        const barva = prompt("Barva:");
        const oprema = prompt("Oprema:");


        const updatedCar = {
            ...avto,
            cena: cena ? parseInt(cena) : avto.cena,
            znamka: znamka || avto.znamka,
            model: model || avto.model,
            letnik: letnik ? parseInt(letnik) : avto.letnik,
            barva: barva || avto.barva,
            oprema: oprema || avto.oprema,
        };

        const updatedAvtomobili = [...poljeAvtomobilov];
        updatedAvtomobili[avtoIndex] = updatedCar;
        setPoljeAvtomobilov(updatedAvtomobili);
    };

    return (
        <>
            <Menu ime={avtosalon.ime}></Menu>
            < Routes >
                <Route path="/" element={<SeznamAvtomobilov polje={poljeAvtomobilov} onDelete={handleDelete1} onRent={handleRent} onProdaj={handleProdaj} onEdit={handleEdit}></SeznamAvtomobilov>}></Route>
                <Route path="/rent" element={<SeznamNajetihAvtomobilov poljeNajetih={poljeNajetihAvtomobilov} onDelete={handleDelete2} onVrni={handleVrni}></SeznamNajetihAvtomobilov>}></Route>
                <Route path="/sold" element={<SeznamKupljenihAvtomobilov poljeKupljenih={poljeKupljenihAvtomobilov}></SeznamKupljenihAvtomobilov>}></Route>
                <Route path="oSalonu" element={<OSalonu></OSalonu>}></Route>
                <Route path='/:id' element={<Telo polje={poljeAvtomobilov}></Telo>}></Route>
                <Route path='/rent/:id' element={<TeloNajeta poljeNajetih={poljeNajetihAvtomobilov}></TeloNajeta>}></Route>
                <Route path='/dodajAvtomobil' element={<DodajAvtomobil onAdd={handleAdd}></DodajAvtomobil>}></Route>
            </Routes >
            <Noga></Noga>
        </>
    )
}



export default Routing;
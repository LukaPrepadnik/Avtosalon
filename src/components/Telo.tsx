import React from "react";
import { IAvto } from "../models/Avto";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface TeloProps {
    polje: IAvto[];
}

const Telo = (props: TeloProps) => {

    const { id } = useParams();
    let parsan_id: number | undefined;
    if (id !== undefined) {
        parsan_id = parseInt(id, 10);
    } else {
        parsan_id = undefined;
    }

    let izbira = props.polje.find((i) => i.id === parsan_id);


    return (
        <>
            <nav className="navbar navbar-light bg-light navbar-expand">
                <div className="d-flex justify-content-center w-100">
                    <Link to="/" className="navbar-brand mx-3">Domov</Link>
                    <Link to="/oSalonu" className="navbar-brand mx-3">O salonu</Link>
                    <Link to="/dodajAvtomobil" className="navbar-brand mx-3">Dodaj avtomobil</Link>
                    <Link to="/rent" className="navbar-brand mx-3">Najeta vozila</Link>
                    <Link to="/sold" className="navbar-brand mx-3">Prodana vozila</Link>
                </div>
            </nav>
            <br></br>
            <h3>{izbira?.znamka} {izbira?.model}</h3>
            <div>
                <b>Cena: </b>
                {izbira?.cena} € <br />
                <b>Letnik: </b>
                {izbira?.letnik} <br />
                <b>Barva: </b>
                {izbira?.barva} <br />
                <b>Oprema: </b>
                {izbira?.oprema} <br />
                {izbira?.slika && (
                    <img
                        src={izbira?.slika}
                        style={{ height: "300px", objectFit: "cover", margin: "20px" }}
                    />
                )}
                <br></br>
                <Link to="/">
                    <button className="btn btn-secondary">Nazaj</button>
                </Link>
            </div>
        </>
    )
};


export default Telo;
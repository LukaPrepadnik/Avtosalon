import React from "react";
import { IAvto } from "../models/Avto";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


interface dodajAvtomobilProps {
    onAdd: any;
}

const initialState: IAvto = {
    id: 0,
    cena: 0,
    znamka: "",
    model: "",
    letnik: 0,
    barva: "",
    oprema: "",
    slika: ""
}

const DodajAvtomobil = (props: dodajAvtomobilProps) => {
    const [avtomobil, setAvtomobil] = React.useState<IAvto>(initialState);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.onAdd(avtomobil);
        setAvtomobil(initialState);
    }

    const handleChange = (e: any) => {
        const { value, name } = e.target
        setAvtomobil((prevState: IAvto) => {
            const nextState = {
                ...prevState,
                id: prevState.id++,
                [name]: value,
            };
            return nextState;
        })

    }


    return (
        <div className="container">
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
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="cena">Cena:</label>
                            <input type="number" value={avtomobil.cena} name="cena" onChange={handleChange} className="form-control" id="cena" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="znamka">Znamka:</label>
                            <input type="text" value={avtomobil.znamka} name="znamka" onChange={handleChange} className="form-control" id="znamka" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model:</label>
                            <input type="text" value={avtomobil.model} name="model" onChange={handleChange} className="form-control" id="model" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="letnik">Letnik:</label>
                            <input type="number" value={avtomobil.letnik} name="letnik" onChange={handleChange} className="form-control" id="letnik" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="barva">Barva:</label>
                            <input type="text" value={avtomobil.barva} name="barva" onChange={handleChange} className="form-control" id="barva" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="oprema">Oprema:</label>
                            <input type="text" value={avtomobil.oprema} name="oprema" onChange={handleChange} className="form-control" id="oprema" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="slika">Fotografija:</label>
                            <input type="text" value={avtomobil.slika} name="slika" onChange={handleChange} className="form-control" id="slika" />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Dodaj</button>
                        <Link to="/">
                            <button className="btn btn-secondary">Nazaj</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default DodajAvtomobil;
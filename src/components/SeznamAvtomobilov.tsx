import React from "react";
import { Link } from "react-router-dom";
import { IAvto } from "../models/Avto";
import "bootstrap/dist/css/bootstrap.min.css";

interface SeznamAvtomobilovProps {
    polje: IAvto[];
    onRent: (avto: IAvto) => void;
    onProdaj: (avto: IAvto) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const SeznamAvtomobilov = (props: SeznamAvtomobilovProps) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleDelete = (id: number) => {
        props.onDelete(id);
    };

    const handleRent = (avto: IAvto) => {
        props.onRent(avto);
    };

    const handleProdaj = (avto: IAvto) => {
        props.onProdaj(avto);
    }

    const handleEdit = (id: number) => {
        props.onEdit(id);
    }


    const handleFilter = props.polje.filter(
        (avto) =>
            avto.znamka.toLowerCase().includes(searchTerm.toLowerCase()) ||
            avto.model.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
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
                <div className="my-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Vnesite model ali znamko"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="row">
                    {handleFilter.map((avto, index) => (
                        <div className="col-md-4" key={avto.id}>
                            <div className="card mb-3">
                                {avto.slika && (
                                    <img
                                        src={avto.slika}
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "cover" }}
                                        alt="Avtomobil"
                                    />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{avto.znamka} {avto.model}</h5>
                                    <Link to={`/${avto.id}`} className="btn btn-warning mr-2">Več</Link>
                                    <button className="btn btn-info" onClick={() => handleRent(avto)}>Najemi</button>
                                    <button className="btn btn-success" onClick={() => handleProdaj(avto)}>Prodaj</button>
                                    <button className="btn btn-secondary" onClick={() => handleEdit(avto.id)}>Uredi</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(avto.id)}>Izbriši</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}



export default SeznamAvtomobilov;




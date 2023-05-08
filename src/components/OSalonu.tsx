import React from "react";
import { Link } from "react-router-dom";

interface OSalunuProps {
}

const OSalonu = (props: OSalunuProps) => {
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
            <div>
                <p>Skupina Avtomobilček je eden največjih prodajalcev vozil v Sloveniji z 90 zaposlenimi, ki ponujajo popolno, celovito in kvalitetno storitev. Od prodaje, vzdrževanja, servisiranja, do zavarovanj in registracij vozil. Vse na enem mestu. Velika izbira novih in bogata izbira rabljenih vozil prepričata v moč in kvaliteto. Skupina Avtomobilček združuje tri podjetja, in sicer Avtohišo Avtomobilček d.o.o. , Malgaj d.o.o. ter Avtomobilček Leasing.
                </p>
                <p> Podjetje Avtomobilček d.o.o danes zastopa blagovne znamke Volkswagen, Volkswagen gospodarska vozila, Škoda ter servis za vozila Audi. Predhodnik podjetja Avtomobilček d.o.o., obrtna delavnica Franca Malgaja je bila sploh prva avtomehanična delavnica na območju nekdanje Jugoslavije, ki ji je tovarna Audi podelila status pooblaščenega servisa za vozila Audi. To je bilo že davnega leta 1968.</p>
                <Link to="/">
                    <button className="btn btn-secondary">Nazaj</button>
                </Link>
            </div>
        </>

    )
}

export default OSalonu;
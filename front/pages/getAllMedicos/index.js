import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Header03} from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import {SubHeader} from "../../src/components/SubHeader"
import GetAllMedicos from "../../src/components/GetAllMedicos"

function GetAllMedicosPage() {
    return (
        <>
        <div>
            < Header03 />
        </div>

        <div>
            < SubHeader />
        </div>

        <div>
            < GetAllMedicos />
        </div>

        <div>
            < Footer />
        </div>
        </>
    );
}

export default GetAllMedicosPage;

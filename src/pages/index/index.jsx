import React from 'react';

import Header from "../../components/Header/header";
import Banner from '../../components/Banner/banner';

import "./scss/index.module.scss";

function Index() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <Banner />
            </main>
        </React.Fragment>
    )
}

export default Index;
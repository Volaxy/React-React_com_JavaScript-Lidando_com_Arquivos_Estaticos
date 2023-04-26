import React from 'react';

import Header from "../../components/Header/header";
import Banner from '../../components/Banner/banner';
import Gallery from '../../components/Gallery/Gallery';

import style from "./scss/index.module.scss";
import Popular from '../../components/Popular/Popular';

function Index() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <Banner />

                <div className={style.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Index;
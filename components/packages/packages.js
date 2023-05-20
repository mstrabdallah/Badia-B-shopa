import style from './styles/packages.module.scss'
import React, { useState } from 'react';

import PaymentPackagesSectios from '../tools/sections/PaymentPackages_sectios'


const Packages = () => {

    return (
        <>
            <section className={`page_ ` + style.packagesPage}>
                <div className='sectionContent'>
                    <PaymentPackagesSectios />
                </div>
            </section>
        </>
    );
};

export default Packages;
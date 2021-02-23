// This file is exported to --->  src/App.js
// React required
import React from "react";
// -------------- Application Begins Bellow ------------ //

export default function Footer() { 
    return ( 
        <footer id="Footer" className="container-fluid bg-white pt-5 pb-2">
             <SectionA/> 
             <SectionB/> 
        </footer> 
    );
}
function SectionA() {
    return (
        <section className="row">
            <div className="col-sm-3">
                <p>Popular Car Markets</p>
                <ul style={{ listStyle: "none" }}>
                    <li>Houston, TX Cars</li>
                    <li>Atlanta, GA Cars</li>
                    <li>Macon, GA Cars</li>
                    <li>Los Angeles,CA Cars</li>
                    <li className="text-primary"><small>SEE MORE</small></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Popular Car Cities</p>
                <ul style={{ listStyle: "none" }}>
                    <li>Houston, TX Cars</li>
                    <li>Atlanta, GA Cars</li>
                    <li>Macon, GA Cars</li>
                    <li>Los Angeles, CA Cars</li>
                    <li className="text-primary"><small>SEE MORE</small></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Popular Resources</p>
                <ul style={{ listStyle: "none" }}>
                    <li>Free Seller Software</li>
                    <li>New Cars for Sale</li>
                    <li>Used and New Cars for Rent</li>
                    <li>Motuka ya Koteka</li>
                    <li className="text-primary"><small>SEE MORE</small></li> 
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Listings By State</p>
                <ul style={{ listStyle: "none" }}>
                    <li>Alabama New Listings</li>
                    <li>Alaska New Listings</li>
                    <li>Georgia New Listings</li>
                    <li>North Carolina New Listings</li>
                    <li className="text-primary"><small>SEE MORE</small></li> 
                </ul>
            </div>
        </section>
        );
}
function SectionB() {
    return (
        <section className="row border-top pt-3">
            <div className="col-sm-12 text-center">
                <p>2021 Larissa Applications. Fiberabbit. All Rights Reserved</p>
            </div>
        </section>
        );
}
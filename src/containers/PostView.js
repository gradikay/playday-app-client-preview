// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Amplify required
import { S3Image } from 'aws-amplify-react';
import { API } from "aws-amplify";
// CSS
import "../css/PostView.css";
import { data as dummyPosts } from "../DummyData/data"

// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostView() {

    // Important variables 
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([
        {
            postStatus: "",
            promotion: "",
            vehicleModal: "",
            vehicleMake: "",
            vehicleYear: 2021,
            vehiclePrice: 10000,
            vehicleMileage: 10000,
            milesPerGallon: "",
            bodyStyle: "",
            engineType: "",
            interiorColor: "",
            drivetrain: "",
            numberOfKeys: 2,
            exteriorColor: "",
            transmission: "",
            doors: 2,
            vin: "",
            seller: {
                id: "",
                firstName: "",
                lastName: "",
            },
            images: {
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                image5: null,
            }
        }
    ]);

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false; 

        async function onLoad() {

            setIsLoading(true);

            try { 
                 
                if (!unmounted) { 
                }

                setIsLoading(false);

            } catch (e) {
                alert(e);
                setIsLoading(false);
            }

        }

        // Returning onLoad Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;  
        };

    }, [id]); 

    // Return UI
    return (
        <main id="PostView" className="bg-white"> 

            {/* Post - Start 
              * - With - !isLoading && post, we want only to return data if we have any.
              * - If we have no data and omit "&& post" we will get an error!
              */}
            {!isLoading && dummyPosts ?
                // After the data has loaded display
                <>
                    <Carousel post={dummyPosts[0]} />
                </>
                :
                // When the data is loading display
                <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
                    {/* Icon */}
                    <span className="spinner-border" aria-label="spinner" role="img"></span>
                </div>
            }
            {/* Post - End */}
            
        </main>
        );
}

// Carousel & More about this vehicle column
function Carousel({ post }) {

    // Important Variables
    const { userId, vehicleYear, vehicleMake, vehicleModal, postId, vin, milesPerGallon, interiorColor, exteriorColor, transmission, drivetrain, engineType, promotion, doors, numberOfKeys } = post;
    // Images
    const { image1, image2, image3, image4, image5 } = post.images;
    // Price & mileage convertion : adding comma to numbers
    const vehiclePrice= Number(post.vehiclePrice).toLocaleString();
    const vehicleMileage = Number(post.vehicleMileage).toLocaleString();

    // Return UI
    return (
        <section id="Carousel" className="container-fluid row py-3 border-bottom m-0 justify-content-center align-items-start" style={{ textTransform: "uppercase" }} >

            {/* Image Carousel & Information- Start */}
            <div className="col-lg-8 p-0 mb-3">

                {/* Image Carousel - Start */}
                <div id="slider" className="carousel slide" data-ride="carousel">

                    {/* Indicators - Start */}
                    <ul className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                        <li data-target="#slider" data-slide-to="3"></li>
                        <li data-target="#slider" data-slide-to="4"></li>
                    </ul>
                    {/* Indicators - End */}

                    {/* The slideshow - Start */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                    </div>
                    {/* The slideshow - End */}

                    {/* Left and right controls - Start */}
                    <a className="carousel-control-prev" href="#slider" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#slider" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                    {/* Left and right controls - End */}

                </div>
                {/* Image Carousel - End */}

                {/* Information- Start */}
                <div>                    
                    <ul className="list-group list-group-flush mr-md-3">
                        <li className="list-group-item border-0 p-0" >
                            <h1>{vehicleYear} {vehicleModal}</h1>
                            <h2>{vehicleMake}</h2>
                        </li>
                        <li className="list-group-item border-0 p-0">
                            <span className="float-right">${vehiclePrice}*</span>
                            <span className="float-left">{vehicleMileage} miles</span>
                        </li>
                        <li className="list-group-item border-0 p-0">
                            <span className="float-left">Stock# {postId}</span>
                            <span className="float-right">VIN # {vin}</span>
                        </li>
                    </ul>
                </div>
                {/* Information- End */}

            </div>
            {/* Image Carousel - End */}

            {/* More about this vehicle - Start */}
            <div className="col-lg-4 text-center py-3 border-top" >

                { /* Title */}
                <p><b>Specifications</b></p>

                { /* List - Start */}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="float-left">City/Highway Gas Mileage</span>
                        <span className="float-right">{milesPerGallon}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Exterior/Interior Color</span>
                        <span className="float-right">{exteriorColor}/{interiorColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Transmission</span>
                        <span className="float-right">{transmission}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Drive</span>
                        <span className="float-right">{drivetrain}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Engine</span>
                        <span className="float-right">{engineType}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Cylinders</span>
                        <span className="float-right">4 cyl</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Doors</span>
                        <span className="float-right">{doors}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Number of Keys</span>
                        <span className="float-right">{numberOfKeys}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Promotion</span>
                        <span className="float-right">{promotion}</span>
                    </li>
                </ul>
                { /* List - End */}

                { /* Summary - Start */}
                <div className="bg-light border rounded my-3 py-3">

                    { /* Title */}
                    <p>summary **</p>

                    { /* List - Start */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0 bg-light">
                            <span className="float-left">Vehicle Price</span>
                            <span className="float-right">${vehiclePrice}*</span>
                        </li>
                        <li className="list-group-item border-0 bg-light">
                            <span className="float-left">Est. Tax, Title, & Fees (GA)</span>
                            <span className="float-right">+ $1,250</span>
                        </li>
                        <li className="list-group-item border-0 bg-light">
                            <span className="float-left">Down Payment</span>
                            <span className="float-right">- $2,000</span>
                        </li>
                        <li className="list-group-item border-0 bg-light">
                            <span className="float-left"><b>Total Finance Amount</b></span>
                            <span className="float-right"><b>$12,248</b></span>
                        </li>
                    </ul>
                    { /* List - End */}

                </div>
                { /* Summary - End */}

            </div>
            {/* More about this vehicle - End */}

        </section>
    );
}
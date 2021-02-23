// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
// CSS
import "../css/PostFilter.css";
// Dummy data
import { data as dummyPosts } from "../DummyData/data";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostFilter() { 

    // Important variables 
    const { name } = useParams();
    const [search, setSearch] = useState(""); 
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([{
        postStatus: "",
        promotion: "",
        vehicleModal: "Carabana",
        vehicleMake: "Gradi",
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
    }]);

    // Handling search
    async function handleSearch(event) {

        event.preventDefault();

        try {

            // if there is no data return "all" data
            window.location.href = `/filter/${search === "" ? "all" : search.toLowerCase()}`;

        } catch (e) {
            alert(e);
        }
    }

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

        // Return load function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;  
        };

    }, [name]);

    // Return UI
    return (
        <main id="PostFilter"> 
            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />
            <SectionA posts={dummyPosts} name={name} isLoading={isLoading} />          
        </main>
        );
}

// Header
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <header id="Header" className="container-fluid row m-0 bg-white border-bottom border-black">
            <nav className="navbar navbar-expand-md">

                { /* Button - Start */ }
                <button className="navbar-toggler text-black" type="button" data-toggle="collapse" data-target="#collapsibleLowerNavbar">
                    Filter <span className="fa fa-bars"></span>
                </button>
                { /* Button - End */ }                 

                { /* Links & Search - Start */ }
                <div className="collapse navbar-collapse" id="collapsibleLowerNavbar">

                    { /* Previous Page - Start */ }
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-black border-right mr-3 pr-3" href="/"> <i className="fa fa-reply" role="img" aria-label="back home"></i> Back Home </a>
                        </li>
                    </ul>
                    { /* Previous Page - Start */ }

                    { /* Search - Start */ }
                    <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
                    { /* Search - End */ }

                    { /* Dropdowns - Start */ }
                    <ul className="navbar-nav">

                        { /* Price Dropdown */ }
                        <li className="nav-item dropdown mr-3">
                            <a className="nav-link text-black dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Price
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/filter/100000">+ $100K</a> 
                                <a className="dropdown-item" href="/filter/300000">+ $300K</a> 
                                <a className="dropdown-item" href="/filter/500000">+ $500K</a> 
                                <a className="dropdown-item" href="/filter/700000">+ $700K</a> 
                            </div>
                        </li> 

                        { /* Property Type Dropdown */ }
                        <li className="nav-item dropdown mr-3">
                            <a className="nav-link text-black dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Vehicle Type
                            </a>
                            <ul className="dropdown-menu">
                                <a className="dropdown-item" href="/filter/all">+ Any</a>
                                <a className="dropdown-item" href="/filter/sedan">+ Sedan</a>
                                <a className="dropdown-item" href="/filter/coupe">+ Coupe</a>
                                <a className="dropdown-item" href="/filter/pickup">+ Pickup</a>
                            </ul>
                        </li>

                        { /* Listing Status Dropdown */ }
                        <li className="nav-item dropdown">
                            <a className="nav-link text-black dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Vehicle Status
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/filter/pending">+ Pending</a>
                                <a className="dropdown-item" href="/filter/sold">+ Sold</a>
                                <a className="dropdown-item" href="/filter/avalable">+ Available</a> 
                            </div>
                        </li> 
                    </ul>
                    { /* Dropdowns - End */}

                </div>
                { /* Links & Search - End */ }

            </nav>
        </header>
        );
}

// Search input
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="nav-item pr-3 border-right mr-3">

            { /* Form - Start */}
            <form onSubmit={handleSearch}>
                <div className="input-group">

                    { /* Input - Start */}
                    <input
                        id="search"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="Search"
                        className="form-control border-black"
                        onChange={e => setSearch(e.target.value)}
                    />
                    { /* Input - End */}

                    { /* Button - Start */}
                    <div className="input-group-append">
                        <button className="btn btn-dark border-0" type="submit">
                            <i className='fa fa-search' role="img" aria-label="search"></i>
                        </button>
                    </div>
                    { /* Button - End */}

                </div>
            </form>
            { /* Form - End */}

        </div>
    );
}

// Other sections
function SectionA(props) {

    // Important variables
    const { posts, name, isLoading } = props;

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row py-5 bg-white border-bottom m-0">

            <div className="col-sm-12">
                <h2>Searching for <i className="text-capitalize">{name}</i></h2>
                <p>{ posts.length } Results </p>
            </div>

            {/* Posts - Start 
              * - With - !isLoading && posts, we want only to return data if we have any.
              * - If we have no data and omit "&& posts" we will get an error!
              */}
            {!isLoading && posts ?

                // Display after we have loaded our data
                posts.map((post, i) => {


                    // Important variables
                    const { image1 } = post.images;
                    const { userId, postId, promotion, vehicleModal, vehicleMake, vehicleYear } = post;
                    // Price & mileage 
                    const price = Number(post.vehiclePrice).toLocaleString();
                    const vehicleMileage = Number(post.vehicleMileage).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-md-4 col-lg-3 p-2" key={i++}>
                            <a href={`/view/${postId}`} >
                                <div className="card shadow-sm border-black">

                                    { /* Imabe */}
                                    <img src={image1} />

                                    { /* overlay */}
                                    <div className="card-img-overlay">

                                        { /* Top overlay */}
                                        <div className="overlay-top">
                                            <span className="bg-white text-dark px-3 py-1 rounded border border-dark">
                                                Great Deal <i className="fa fa-info-circle" role="img" aria-label="circle"></i>
                                            </span>

                                        </div>
                                    </div>

                                    { /* body */}
                                    <div className="card-body p-0 border-top border-black">

                                        <div className="float-left p-3 w-50">
                                            <p className="m-0 text-black" style={{ textTransform: "uppercase" }}>
                                                <b> {vehicleYear} {vehicleMake} {vehicleModal} </b>
                                            </p>
                                            <p className="m-0 text-secondary"><small>Standard Range Plus</small></p>
                                        </div>
                                        <div className="float-right text-right p-3 w-50">
                                            <p className="m-0 text-black"><b>${price}</b></p>
                                            <p className="m-0 text-secondary"><small>{promotion}</small></p>
                                        </div>

                                    </div>
                                    <div className="card-footer bg-black">
                                        <div className="float-left text-white"><small>{vehicleMileage} miles</small></div>
                                        <div className="float-right text-white"><small>Free Shipping <i className="fa fa-motorcycle" role="img" aria-label="motorcycle"></i></small></div>
                                    </div>

                                </div>
                            </a>
                        </div>
                    );
                })
                :
                // Display while Loading data
                "Loading"
            } 
            {/* Post - End */}
             
            {/* Dummy Posts - End */}
            {
                dummyPosts.map((post, i) => {

                    // Important variables
                    const { image1 } = post.images;
                    const { postId, promotion, vehicleModal, vehicleMake, vehicleYear } = post;
                    // Price
                    const price = Number(post.vehiclePrice).toLocaleString();
                    const vehicleMileage = Number(post.vehicleMileage).toLocaleString();

                    // Return UI
                    return (
                        <div className="col-md-4 col-lg-3 p-2" key={i++}>
                            <a href={`/view/${postId}`} >
                                <div className="card shadow-sm border-black">

                                    { /* Imabe */}
                                    <img src={image1} />

                                    { /* overlay */}
                                    <div className="card-img-overlay">

                                        { /* Top overlay */}
                                        <div className="overlay-top">
                                            <span className="bg-white text-dark px-3 py-1 rounded border border-dark">
                                                Great Deal <i className="fa fa-info-circle" role="img" aria-label="circle"></i>
                                            </span>

                                        </div>
                                    </div>

                                    { /* body */}
                                    <div className="card-body p-0 border-top border-black">

                                        <div className="float-left p-3 w-50">
                                            <p className="m-0 text-black" style={{ textTransform: "uppercase" }}>
                                                <b> {vehicleYear} {vehicleMake} {vehicleModal} </b>
                                            </p>
                                            <p className="m-0 text-secondary"><small>Standard Range Plus</small></p>
                                        </div>
                                        <div className="float-right text-right p-3 w-50">
                                            <p className="m-0 text-black"><b>${price}</b></p>
                                            <p className="m-0 text-secondary"><small>{promotion}</small></p>
                                        </div>

                                    </div>

                                    { /* Footer */}
                                    <div className="card-footer bg-black">
                                        <div className="float-left text-white">
                                            <small>{vehicleMileage} miles</small>
                                        </div>
                                        <div className="float-right text-white">
                                            <small>Free Shipping <i className="fa fa-motorcycle" role="img" aria-label="motorcycle"></i></small>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </div>
                    );
                })
            } 
            {/* Dummy Posts - End */}

        </section>
        );
}

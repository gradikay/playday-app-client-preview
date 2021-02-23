// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react"; 
// Getting - user status (user login - true or false) - from useAppContext
import { useAppContext } from "../libs/contextLib"; 
// Dummy Images 
import img1 from "../img/img1.jpg" 
// CSS
import "../css/Home.css"
// Dummy data
import { data as dummyPosts} from "../DummyData/data"
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Home() { 

    // Important variables
    const [search, setSearch] = useState("");
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false); 
    const [posts, setPosts] = useState([{
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

        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;
            setPosts([]);
        };

    }, [isAuthenticated]);  

    // Return UI
    return (
        <main id="Home" className="border-bottom"> 

            <Header handleSearch={handleSearch} setSearch={setSearch} search={search} />

            <SectionA posts={posts} isLoading={isLoading} />
            
        </main>
        );
}

// Header & Search field block
function Header(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (

        <header  id="Header" className="container-fluid mx-auto row m-0" style={{ backgroundImage: `url(${img1})` }} >

            <div className="col-sm-4 mx-auto align-self-center text-center text-white border border-white rounded p-4 shadow">
                <h1> Vehicle Listing Application </h1>
                <p> Build a listing application for your client </p>
            </div>
            <div className="col-sm-6 mx-auto align-self-center text-center text-white"> 

                { /* Search field block - Start */}
                <Search handleSearch={handleSearch} setSearch={setSearch} search={search} />
                { /* Search field block - End */}

            </div>

        </header>
        );
}

// Search field
function Search(props) {

    // Important variables
    const { handleSearch, setSearch, search } = props;

    // Return UI
    return (
        <div className="display-large nav-item pr-5">

            { /* Form - Start */}
            <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">

                    { /* Input - Start */}
                    <input
                        id="search"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="search"
                        className="form-control border border-warning"
                        onChange={e => setSearch(e.target.value)}
                    />
                    { /* Input - End */}

                    { /* Button - Start */}
                    <div className="input-group-append">

                        <button className="btn btn-black border border-warning" type="submit">
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
function SectionA({ posts, isLoading }) {

    // Return UI
    return (
        <section id="SectionA" className="container-fluid row py-5 bg-white border-bottom m-0">

            {/* Heading - Start */}
            <div className="col-sm-12 pb-5"> 
                <div className="row text-center"> 
                    <div className="col-md-12 mb-5"> 
                        <h2>Your Guide to the Top Cars and Trucks</h2>
                        <p>We sifted through the data and found the best cars and trucks in every category, so you can make a research-driven decision on the car you want.</p>
                    </div>
                    <div className="col-md-4"> 
                        <h3>
                            <i class="fa fa-qrcode d-block"></i>
                            <span className="d-block"> Car Finder </span>
                        </h3>
                        <p>Answer a few questions to find the right car for you.</p>
                    </div>
                    <div className="col-md-4"> 
                        <h3>
                            <i class="fa fa-calculator d-block"></i>
                            <span className="d-block"> Loan Calculator  </span>
                        </h3> 
                        <p>Use our loan calculator to budget for your new car.</p>
                    </div>
                    <div className="col-md-4"> 
                        <h3>
                            <i class="fa fa-balance-scale d-block"></i>
                            <span className="d-block"> Trade-In Estimator </span>
                        </h3>
                        <p>License or VIN not on-hand? Get a quick estimated value on your vehicle.</p>
                    </div>
                </div>
            </div>
            {/* Heading - End */}

            {/* Posts - Start */} 

            {/* Dummy Posts - Start */}
            {
                dummyPosts.map((post, i) => {


                    // Important variables
                    const { image1 } = post.images;
                    const { userId, postId, promotion, vehicleModal, vehicleMake, vehicleYear } = post;
                    // Price
                    const price = Number(post.vehiclePrice).toLocaleString();
                    const vehicleMileage = Number(post.vehicleMileage).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-md-4 col-lg-3 p-2" key={i++}>
                            <a href={`/view/${postId}`} >
                                <div className="card shadow-sm border-secondary">

                                    { /* Imabe */}
                                    <img src={image1} />

                                    { /* overlay */}
                                    <div className="card-img-overlay">

                                        { /* Top overlay */}
                                        <div className="overlay-top">
                                            <span className="bg-white text-dark px-3 py-1 rounded border border-dark">
                                                Great Deal <i class="fa fa-info-circle"></i>
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
                                        <div className="float-right text-white"><small>Free Shipping <i class="fa fa-motorcycle"></i></small></div>
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
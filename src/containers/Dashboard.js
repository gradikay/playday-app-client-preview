// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Amplify required  
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Dashboard.css";
import { data as dummyPosts } from "../DummyData/data";

// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Dashboard() {

    // Important variables 
    const { isAuthenticated, userId, userEmail, userFirstName, signedupDate, userLastName} = useAppContext();
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

        // Return onLoad function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true; 
        };

    }, [isAuthenticated]);

    // Return UI
    return (
        <main id="Dashboard" className="border-bottom">

            {/* Header - Start */}
            <Header
                userId={userId}
                userEmail={userEmail}
                userFirstName={userFirstName}
                signedupDate={signedupDate}
                userLastName={userLastName}
                posts={dummyPosts}
            /> 
            {/* Header - End */}

            {/* Posts - Start */}
            <Posts posts={dummyPosts} isLoading={isLoading} /> 
            {/* Posts - End */}

        </main>
    );
}

// Header
function Header(props) {

    // Important variables 
    const { userId, userEmail, userFirstName, userLastName, posts } = props

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 bg-light">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3 text-center">
                    <h1>Dashboard </h1>
                    <Link to="/postnew" className="btn btn-warning"> + NEW POST <i className="fa fa-share" role="img" aria-label="new post"></i></Link> 
                </div>
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">User Id: {userId} </li>
                        <li className="list-group-item bg-light">Post Count: { posts.length}</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">First Name: {userFirstName} </li> 
                        <li className="list-group-item bg-light">Last Name: {userLastName}</li>
                        <li className="list-group-item bg-light">Email: {userEmail}</li>
                    </ul>
                </div>
            </div>
        </header>
        );
}

// User Posts Function
function Posts({ posts, isLoading }) {

    // Return UI
    return (
        <div className="container row mx-auto py-5">

            {/* Posts - Start 
              * - With - !isLoading && posts, we want only to return data if we have any.
              * - If we have no data and omit "&& posts" we will get an error!
              */}
            {!isLoading && posts?

                // Display after we have loaded our data
                posts.map((post, i) => {

                    // Important variables
                    const { image1 } = post.images;
                    const { userId, postId, promotion, vehicleModal, vehicleMake, vehicleYear } = post; 
                    // // Price & mileage 
                    const price = Number(post.vehiclePrice).toLocaleString();
                    const vehicleMileage = Number(post.vehicleMileage).toLocaleString();

                    // Return UI
                    return (
                        <div className="col-md-4 p-2" key={i++}>
                            
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
                                        <p className="m-0 text-secondary"><small>{ promotion }</small></p>
                                    </div>
                                        
                                </div>
                                <div className="card-footer bg-black">
                                    <div className="float-left text-white"><small>{vehicleMileage} miles</small></div>
                                    <div className="float-right text-white"><small>Free Shipping <i className="fa fa-motorcycle" role="img" aria-label="circle"></i></small></div>
                                </div>

                            </div>

                            { /* Edit & View Link - Start */}
                            <div className="border p-2 m-2 rounded">
                                <a href={`/postedit/${userId}`} className="text-black">Edit</a> | <a href={`/view/${userId}`} className="text-black">View</a>
                            </div>
                            { /* Edit & View Link - End */}

                        </div>
                    );
                })
                    :
                // Display while Loading data
                "Loading"
            }  
            {/* Posts - End */}

            {/* Dummy Posts - Start */}
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
                        <div className="col-md-4 p-2" key={i++}> 
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

                                { /* footer */}
                                <div className="card-footer bg-black">
                                    <div className="float-left text-white">
                                        <small>{vehicleMileage} miles</small>
                                    </div>
                                    <div className="float-right text-white">
                                        <small>Free Shipping <i className="fa fa-motorcycle" role="img" aria-label="motorcycle"></i></small>
                                    </div>
                                </div>

                            </div> 

                            { /* Edit & View Link - Start */}
                            <div className="border p-2 m-2 rounded">
                                <a href={`/postedit/${postId}`} className="text-black">Edit</a> | <a href={`/view/${postId}`} className="text-black">View</a>
                            </div>
                            { /* Edit & View Link - End */}
                        </div>
                    );
                })
            }
            {/* Dummy Posts - End */} 
        </div>
        );
} 
// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
// Components
import LoaderButton from "../components/LoaderButton";
import image2 from "../img/img1.jpg" 
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostEdit() {

    // Important variables
    const { id } = useParams();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Seller
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    // Post Description
    const [postStatus, setPostStatus] = useState("");
    const [promotion, setPromotion] = useState("");
    const [vehicleModal, setVehicleModal] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleYear, setVehicleYear] = useState(2021);
    const [vehiclePrice, setVehiclePrice] = useState(35000);
    const [vehicleMileage, setVehicleMileage] = useState(40000);
    const [milesPerGallon, setMilesPerGallon] = useState("");
    const [bodyStyle, setBodyStyle] = useState("");
    const [engineType, setEngineType] = useState("");
    const [interiorColor, setInteriorColor] = useState("");
    const [drivetrain, setDrivetrain] = useState("");
    const [numberOfKeys, setNumberOfKeys] = useState(2);
    const [exteriorColor, setExteriorColor] = useState("");
    const [transmission, setTransmission] = useState("");
    const [doors, setDoors] = useState("");
    const [vin, setVin] = useState("");
    const [userId, setUserId] = useState("");
    // display the image
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false; 

        async function onLoad() {

            try {

                if (!unmounted) { 
                    // Seller
                    setUserFirstName("Gradi");
                    setUserLastName("Musa");
                    // Important variables
                    setPostStatus("sold");
                    setPromotion("free shippin");
                    setVehicleModal("gls");
                    setVehicleMake("mercedes");
                    setVehicleYear(2021);
                    setVehiclePrice(119000);
                    setVehicleMileage(10000);
                    setMilesPerGallon("25/54 mpg");
                    setBodyStyle("sedan");
                    setEngineType("fwd");
                    setInteriorColor("black");
                    setDrivetrain("2.4l");
                    setNumberOfKeys(2);
                    setExteriorColor("brown");
                    setTransmission("automatic");
                    setDoors(2);
                    setVin("22354566666");
                    setUserId(userId);
                    // Images
                    setImage1(image1);
                    setImage2(image2);
                    setImage3(image3);
                    setImage4(image4);
                    setImage5(image5);
                }

            } catch (e) {
                if (!unmounted) {
                    alert(e);
                }
            }
        }

        // Returning onLoad Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true; 
        };
    }, [id]);

    // Validation and Loading
    function validateForm() {
        return (
            vehiclePrice > 0
        );
    }

    // Handling Submitted Form
    async function handleSubmit(event) {

        event.preventDefault();

        setIsLoading(true);

        try { 

            // Redirect us to dashboard after update is complete
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }
       
    // Handling Delete Post
    async function handleDelete(event) {
        event.preventDefault();

        // Window alert confirmation
        const confirmed = window.confirm(
            "Are you sure you want to delete this post?"
        );

        // Return true when user press "ok" to confirm deletion
        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        try { 

            // Redirect to dashboard
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsDeleting(false);
        }
    }


    // Returing UI
    return (
        <main id="PostEdit" className="container-fluid border-top border-bottom pb-5 p-0">

            { /* Header - block & props - Start */}
            <Header id={id}/>
            { /* Header - block & props - End */}

            { /* Images - block & props - Start */}
            <div className="container row mx-auto p-0">
                <Images
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    image5={image5} 
                    userId={userId}
                />
            </div>
            { /* Images - block & props - End */}

            { /* Post info & Post preview - block & props - Start */}
            <div className="container row mx-auto p-0">

                { /* Post Info - RIGHT Section - Start */}
                <PostInfo
                     
                    // Important variable
                    isLoading={isLoading}
                    isDeleting={isDeleting}
                    handleSubmit={handleSubmit}
                    handleDelete={handleDelete}
                    validateForm={validateForm}
                    // Seller
                    userFirstName={userFirstName}
                    userLastName={userLastName}
                    // Post Description
                    postStatus={postStatus} setPostStatus={setPostStatus}
                    promotion={promotion} setPromotion={setPromotion}
                    vehicleModal={vehicleModal} setVehicleModal={setVehicleModal}
                    vehicleMake={vehicleMake} setVehicleMake={setVehicleMake}
                    vehicleYear={vehicleYear} setVehicleYear={setVehicleYear}
                    vehiclePrice={vehiclePrice} setVehiclePrice={setVehiclePrice}
                    vehicleMileage={vehicleMileage} setVehicleMileage={setVehicleMileage}
                    milesPerGallon={milesPerGallon} setMilesPerGallon={setMilesPerGallon}
                    bodyStyle={bodyStyle} setBodyStyle={setBodyStyle}
                    engineType={engineType} setEngineType={setEngineType}
                    interiorColor={interiorColor} setInteriorColor={setInteriorColor}
                    drivetrain={drivetrain} setDrivetrain={setDrivetrain}
                    numberOfKeys={numberOfKeys} setNumberOfKeys={setNumberOfKeys}
                    exteriorColor={exteriorColor} setExteriorColor={setExteriorColor}
                    transmission={transmission} setTransmission={setTransmission}
                    doors={doors} setDoors={setDoors}
                    vin={vin} setVin={setVin}

                /> 
                { /* Post Info - RIGHT Section - End */}

                { /* Post Preview - LEFT Section - Start */}
                <Preview
                    image1={image1} 
                    userId={userId}
                    vehicleModal={vehicleModal}
                    vehicleMake={vehicleMake}
                    vehicleYear={vehicleYear}
                    vehiclePrice={vehiclePrice}
                />
                { /* Post Preview - LEFT Section - End */}

            </div>
            { /* Post info & Post preview - block & props - End */}

        </main>
    );
}

// Header
function Header({id}) {

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 mb-3 text-center bg-light">
            <h1>Edit Post</h1>
            <Link to="/dashboard" className="btn btn-primary"><i className="fa fa-reply"></i> Dashboard</Link>
            <p className="text-secondary p-2 m-2">Id: <small>{id}</small></p>
        </header>
    );
}

// Image function
function Images(props) {

    // Important variable
    const {

        image1, 
        image3,
        image4,
        image5,
        userId

    } = props; 

    return (
        <div className="row mx-auto justify-content-center ">

            { /* Image1 - Start */}
            <div className="col-sm image-container p-0"> 

                <div className="card">
                    <img src={image2} />
                </div>
                
            </div>
            { /* Image1 - End */}
              
            { /* Image2 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={image2} />
                </div>

            </div>
            { /* Image2 - End */}
             
            { /* Image3 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={image2} />
                </div>

            </div>
            { /* Image3 - End */}
              
            { /* Image4 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={image2} />
                </div>

            </div>
            { /* Image4 - End */}
             
            { /* Image5 - Start */}
            <div className="col-sm image1-container p-0">

                <div className="card">
                    <img src={image2} />
                </div>

            </div>
            { /* Image5 - End */}

        </div>
    );
}

// Post Information
function PostInfo(props) {

    // Important variables
    const {

        isLoading,
        handleDelete,
        handleSubmit,
        isDeleting,
        validateForm, 
        // Seller
        userFirstName, userLastName,
        // Post Description
        postStatus, setPostStatus,
        promotion, setPromotion,
        vehicleModal, setVehicleModal,
        vehicleMake, setVehicleMake,
        vehicleYear, setVehicleYear,
        vehiclePrice, setVehiclePrice,
        vehicleMileage, setVehicleMileage,
        milesPerGallon, setMilesPerGallon,
        bodyStyle, setBodyStyle,
        engineType, setEngineType,
        interiorColor, setInteriorColor,
        drivetrain, setDrivetrain,
        numberOfKeys, setNumberOfKeys,
        exteriorColor, setExteriorColor,
        transmission, setTransmission,
        doors, setDoors,
        vin, setVin,

    } = props;

    // Return UI
    return (
        <div className="col-sm-7 mt-3">

            { /* Seller, Vehicle Information, & Details - Start */}
            <div className="row">

                { /* Seller & Vehicle Information - Start */}
                <div className="col-sm-6 m-0">

                    { /* Seller - Start */}
                    <div className="border p-3 mb-3 shadow-sm ">

                        { /* Heading */}
                        <h3 className="mb-4">Seller</h3>

                        { /* Seller's Name - Start */}
                        <div className="form-group">
                            <label htmlFor="publisherName" className="color-red">Seller</label>
                            <input
                                form="form"
                                type="text"
                                disabled="disabled"
                                className="form-control"
                                value={userFirstName + " " + userLastName}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Your Seller's name can't be changed</small>
                        </div>
                        { /* Seller's Name - End */} 

                    </div>
                    { /* Seller - End */}

                    { /* Vehicle Information - Start */}
                    <div className="border p-3 mb-3 shadow-sm ">

                        { /* Heading */}
                        <h3 className="mb-4">Vehicle Information</h3>

                        { /* Status - Start */}
                        <div className="form-group">
                            <label htmlFor="postStatus" className="color-red">Status</label>
                            <select
                                form="form"
                                id="postStatus"
                                name="postStatus"
                                value={postStatus}
                                required="required"
                                className="form-control"
                                onChange={e => setPostStatus(e.target.value)}
                            >
                                <option value="">Select a Status</option>
                                <option value="pending">Pending </option>
                                <option value="active">Active</option>
                                <option value="sold">Sold</option>
                            </select>
                            <small className="text-secondary">Enter property Status</small>

                        </div>
                        { /* Status - End */}

                        { /* Vin - Start */}
                        <div className="form-group">
                            <label htmlFor="vin" className="color-red">Vin</label>
                            <input
                                form="form"
                                type="text"
                                id="vin"
                                required="required"
                                name="vin"
                                value={vin}
                                placeholder="vin"
                                className="form-control"
                                onChange={e => setVin(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter Vehicle Vin</small>

                        </div>
                        { /* Vin - End */}

                        { /* Make - Start */}
                        <div className="form-group">
                            <label htmlFor="vehicleMake" className="color-red">Make</label>
                            <select
                                from="form"
                                id="vehicleMake"
                                name="vehicleMake"
                                value={vehicleMake}
                                required="required"
                                className="form-control"
                                onChange={e => setVehicleMake(e.target.value)}
                            >
                                <option value="">Select Make</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="ford">Ford</option>
                                <option value="nissan">Nissan</option>
                            </select>
                            <small className="text-secondary">Select vehicle make</small>
                        </div>
                        { /* Make - End */}

                        { /* Modal - Start */}
                        <div className="form-group">
                            <label htmlFor="vehicleModal" className="color-red">Modal</label>
                            <input
                                form="form"
                                type="text"
                                required="required"
                                id="vehicleModal"
                                name="vehicleModal"
                                className="form-control"
                                value={vehicleModal}
                                placeholder="modal"
                                onChange={e => setVehicleModal(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter vehicle modal</small>

                        </div>
                        { /* Modal - End */}

                        { /* Year - Start */}
                        <div className="form-group">
                            <label htmlFor="vehicleYear" className="color-red">Year</label>
                            <input
                                form="form"
                                type="number"
                                id="vehicleYear"
                                name="vehicleYear"
                                value={vehicleYear}
                                className="form-control"
                                onChange={e => setVehicleYear(e.target.value)}
                                placeholder="year"
                            />
                            <small className="text-secondary">Enter vehicle Year </small>
                        </div>
                        { /* Year - End */}

                        { /* Mileage - Start */}
                        <div className="form-group">
                            <label htmlFor="vehicleMileage" className="color-red">Mileage</label>
                            <input
                                form="form"
                                type="number"
                                id="vehicleMileage"
                                name="vehicleMileage"
                                value={vehicleMileage}
                                className="form-control"
                                onChange={e => setVehicleMileage(e.target.value)}
                                placeholder="mileage"
                            />
                            <small className="text-secondary">Enter vehicle Mileage </small>
                        </div>
                        { /* Mileage - End */}

                        { /* Promotion - Start */}
                        <div className="form-group">
                            <label htmlFor="promotion" className="color-red">promotion</label>
                            <input
                                form="form"
                                type="text"
                                id="promotion"
                                required="required"
                                name="promotion"
                                value={promotion}
                                placeholder="promotion"
                                className="form-control"
                                onChange={e => setPromotion(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter a short promotion</small>

                        </div>
                        { /* Promotion - End */}

                        { /* Price - Start */}
                        <div className="form-group">
                            <label htmlFor="vehiclePrice" className="color-red">Price</label>
                            <input
                                form="form"
                                type="number"
                                id="vehiclePrice"
                                name="vehiclePrice"
                                value={vehiclePrice}
                                placeholder="price"
                                className="form-control"
                                onChange={e => setVehiclePrice(e.target.value)}
                            />
                            <small className="text-secondary">Enter vehicle price </small>
                        </div>
                        { /* Price - End */} 

                    </div>
                    { /* Vehicle Information - End */}

                </div>
                { /* Seller & Vehicle Information - End */}

                { /* Details - Start */}
                <div className="col-sm-6 m-0">

                    { /* Details - Start */}
                    <div className="border p-3 mb-3 bg-white shadow-sm">

                        { /* Heading */}
                        <h3 className="mb-4">Details</h3>

                        { /* Body Style - Start */}
                        <div className="form-group ">
                            <label htmlFor="bodyStyle" className="color-red">Style</label>
                            <select
                                form="form"
                                id="bodyStyle"
                                name="bodyStyle"
                                value={bodyStyle}
                                required="required"
                                className="form-control"
                                onChange={e => setBodyStyle(e.target.value)}
                            >
                                <option value="">Select Style</option>
                                <option value="sedan">Sedan</option>
                                <option value="convertible">Convertible</option>
                                <option value="pickup">Pickup</option>
                                <option value="coupe">coupe</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                            <small className="text-secondary">Select Vehicle Style</small>

                        </div>
                        { /* Body Style - End */}

                        { /* Interior Color - Start */}
                        <div className="form-group">
                            <label htmlFor="interiorColor" className="color-red">Interior</label>
                            <input
                                form="form"
                                type="text"
                                required="required"
                                id="interiorColor"
                                name="interiorColor"
                                className="form-control"
                                value={interiorColor}
                                placeholder="interior"
                                onChange={e => setInteriorColor(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter Interior Color</small>

                        </div>
                        { /* Interior Color - End */}

                        { /* Exterior Color - Start */}
                        <div className="form-group">
                            <label htmlFor="exteriorColor" className="color-red">Exterior</label>
                            <input
                                form="form"
                                type="text"
                                required="required"
                                id="exteriorColor"
                                name="exteriorColor"
                                className="form-control"
                                value={exteriorColor}
                                placeholder="exterior"
                                onChange={e => setExteriorColor(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter Exterior Color</small>

                        </div>
                        { /* Exterior Color - End */}

                        { /* Engine Type - Start */}
                        <div className="form-group ">
                            <label htmlFor="engineType" className="color-red">Engine</label>
                            <select
                                form="form"
                                id="engineType"
                                name="engineType"
                                value={engineType}
                                required="required"
                                className="form-control"
                                onChange={e => setEngineType(e.target.value)}
                            >
                                <option value="">Select Engine</option>
                                <option value="2.4l">2.4L</option>
                                <option value="2.6l">2.6l</option>
                                <option value="3.0l">3.0L</option>
                                <option value="5.0l">5.0L</option>
                            </select>
                            <small className="text-secondary">Choose Engine</small>

                        </div>
                        { /* Engine Type - End */}

                        { /* Drivetrain - Start */}
                        <div className="form-group ">
                            <label htmlFor="engineType" className="color-red">Drivetrain</label>
                            <select
                                form="form"
                                id="drivetrain"
                                name="drivetrain"
                                value={drivetrain}
                                required="required"
                                className="form-control"
                                onChange={e => setDrivetrain(e.target.value)}
                            >
                                <option value="">Select Drivetrain</option>
                                <option value="awd">AWD</option>
                                <option value="fwd">FWD</option>
                            </select>
                            <small className="text-secondary">Choose drivetrain</small>

                        </div>
                        { /* Drivetrain - End */}

                        { /* Transmission - Start */}
                        <div className="form-group">
                            <label htmlFor="transmission" className="color-red">Transmission</label>
                            <input
                                form="form"
                                type="text"
                                required="required"
                                id="transmission"
                                name="transmission"
                                className="form-control"
                                value={transmission}
                                placeholder="transmission"
                                onChange={e => setTransmission(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter vehicle modal</small>

                        </div>
                        { /* Transmission - End */}

                        { /* Number Of Keys - Start */}
                        <div className="form-group">
                            <label htmlFor="numberOfKeys" className="color-red">Number Of Keys</label>
                            <input
                                form="form"
                                type="number"
                                id="numberOfKeys"
                                name="numberOfKeys"
                                value={numberOfKeys}
                                className="form-control"
                                onChange={e => setNumberOfKeys(e.target.value)}
                                placeholder="# keys"
                            />
                            <small className="text-secondary">Enter Number Of Keys </small>
                        </div>
                        { /* Number Of Keys - End */}

                        { /* Doors - Start */}
                        <div className="form-group">
                            <label htmlFor="doors" className="color-red">Number Of Doors</label>
                            <input
                                form="form"
                                type="number"
                                id="doors"
                                name="doors"
                                value={doors}
                                className="form-control"
                                onChange={e => setDoors(e.target.value)}
                                placeholder="# doors"
                            />
                            <small className="text-secondary">Enter Number Of Doors </small>
                        </div>
                        { /* Doors - End */}

                        { /* MPG / milesPerGallon - Start */}
                        <div className="form-group">
                            <label htmlFor="milesPerGallon" className="color-red">MPG</label>
                            <input
                                form="form"
                                type="text"
                                id="milesPerGallon"
                                required="required"
                                name="milesPerGallon"
                                value={milesPerGallon}
                                placeholder="milesPerGallon"
                                className="form-control"
                                onChange={e => setMilesPerGallon(e.target.value)}
                            />
                            { /* Helper */}
                            <small className="text-secondary">Enter MPG</small>

                        </div>
                        { /* MPG / milesPerGallon - End */}

                    </div>
                    { /* Details - End */}

                </div>
                { /* Details - End */}

            </div>
            { /* Seller, Vehicle Information, & Details - Start */}

            { /* form, Post Description, Submit Button - Start */}
            <div className="col-sm-12 m-0">
                <form onSubmit={handleSubmit} id="form"> 

                    { /* Submit Button - Start */}
                    <LoaderButton
                        type="submit"
                        isLoading={isLoading}
                        className="btn-primary"
                        disabled={!validateForm()}
                    >
                        Update
                    </LoaderButton>
                    { /* Submit Button - End */}

                    {/* Delete Button - Start */}
                    <LoaderButton
                        onClick={handleDelete}
                        isLoading={isDeleting}
                        className="btn btn-danger ml-3"
                    >
                        Delete
                    </LoaderButton>
                    {/* Delete Button - End */}

                </form>
            </div>
            { /* form, Post Description, Submit Button - End */}

        </div>
    );
}

// Preview 
function Preview(props) {

    // Important variables
    const {

        image1,
        userId,
        vehicleModal,
        vehicleMake,
        vehicleYear,
        vehiclePrice,

    } = props;

    // Return UI
    return (
        <div className="col-sm bg-light border mt-3 py-3">
            <article className="shadow rounded bg-white" style={{ position: "sticky", top: "0" }}>
                <div className="card border-0">

                    { /* Image */}
                    <img src={image2} />

                    { /* Body */}
                    <div className="card-body">
                        <p className="m-0">{vehicleYear + " " + vehicleMake + " " + vehicleModal}</p>
                        <p><b>${vehiclePrice}</b></p>
                    </div>

                </div>
            </article>
        </div>
    );
}
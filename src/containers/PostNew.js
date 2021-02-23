// This file is exported to ---> src/Routes.js
// React required
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// uuid for Unique Ids  
// Amplify required  
import config from "../config";
// Components 
import LoaderButton from "../components/LoaderButton";
// Libs 
import { useFields } from "../libs/hooksLib";
import { useAppContext } from "../libs/contextLib";
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostNew() {

    // Important variables
    const { userFirstName, userLastName } = useAppContext();
    const [fields, handleFieldChange] = useFields({
        // Post Description
        postStatus: "",
        promotion: "",
        vehicleModal: "",
        vehicleMake: "",
        vehicleYear: "",
        vehiclePrice: "",
        vehicleMileage: "",
        milesPerGallon: "",
        bodyStyle: "",
        engineType: "",
        interiorColor: "",
        drivetrain: "",
        numberOfKeys: "",
        exteriorColor: "",
        transmission: "",
        doors: "",
        vin: "",
    });

    // display the image
    const [image1, setImage1] = useState(null); 
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    // holds image from input
    const file1 = useRef(null);
    const file2 = useRef(null);
    const file3 = useRef(null);
    const file4 = useRef(null);
    const file5 = useRef(null);     

    // Validation and Loading 
    const [isLoading, setIsLoading] = useState(false);
    function validateForm() {
        return (
            fields.vehiclePrice > 0
        );
    }

    // Handling Uploaded Images
    function handleImage1(event) {
        // Getting the current file
        file1.current = event.target.files[0];
        // Setting up file to be seen image1
        setImage1(URL.createObjectURL(file1.current)); 
    }
    function handleImage2(event) {
        // Getting the current file 
        file2.current = event.target.files[0];
        // Setting up file to be seen image2 
        setImage2(file2.current != null ? URL.createObjectURL(file2.current) : null);
    }
    function handleImage3(event) {
        // Getting the current file 
        file3.current = event.target.files[0];
        // Setting up file to be seen image3
        setImage3(file3.current != null ? URL.createObjectURL(file3.current) : null);
    }
    function handleImage4(event) {
        // Getting the current file 
        file4.current = event.target.files[0];
        // Setting up file to be seen image4 
        setImage4(file4.current != null ? URL.createObjectURL(file4.current) : null);
    }
    function handleImage5(event) {
        // Getting the current file 
        file5.current = event.target.files[0];
        // Setting up file to be seen image5 
        setImage5(file5.current != null ? URL.createObjectURL(file5.current) : null);
    }

    // Handling Submitted Form
    async function handleSubmit(event) {
        event.preventDefault();

        // Checking the file's size
        if (file1.current && file1.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 1`
            );
            return;
        }
        if (file2.current && file2.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 2`
            );
            return;
        }
        if (file3.current && file3.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 3`
            );
            return;
        }
        if (file4.current && file4.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 4`
            );
            return;
        }
        if (file5.current && file5.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB. Image 5`
            );
            return;
        }

        setIsLoading(true);

        try {  

            // Redirect to dashboard
            window.location.href = `/dashboard`;

        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    } 

    // Returing UI
    return ( 
        <main id="PostNew" className="container-fluid border-top border-bottom pb-5 p-0"> 

            { /* Header - block - Start */ }
            <Header />
            { /* Header - block - End */ }

            { /* Images - block & props - Start */ }
            <div className="container row mx-auto p-0">
                <Images
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    image5={image5}
                    handleImage1={handleImage1}
                    handleImage2={handleImage2}
                    handleImage3={handleImage3}
                    handleImage4={handleImage4}
                    handleImage5={handleImage5}
                />
            </div>
            { /* Images - block & props - End */}

            { /* Post info & Post preview - block & props - Start */}
            <div className="container row mx-auto p-0">

                { /* Post Info - RIGHT Section - Start */}
                <PostInfo 
                    isLoading={isLoading}
                    handleSubmit={handleSubmit}
                    validateForm={validateForm}
                    userLastName={userLastName}
                    userFirstName={userFirstName}
                    handleFieldChange={handleFieldChange}
                    // Post Description
                    postStatus={fields.postStatus}
                    promotion={fields.promotion}
                    vehicleModal={fields.vehicleModal}
                    vehicleMake={fields.vehicleMake}
                    vehicleYear={fields.vehicleYear}
                    vehiclePrice={fields.vehiclePrice}
                    vehicleMileage={fields.vehicleMileage}
                    milesPerGallon={fields.milesPerGallon}
                    bodyStyle={fields.bodyStyle}
                    engineType={fields.engineType}
                    interiorColor={fields.interiorColor}
                    drivetrain={fields.drivetrain}
                    numberOfKeys={fields.numberOfKeys}
                    exteriorColor={fields.exteriorColor}
                    transmission={fields.transmission}
                    doors={fields.doors }
                    vin={fields.vin }
                />
                { /* Post Info - RIGHT Section - End */}
                 
                { /* Post Preview - LEFT Section - Start */}
                <Preview
                    image1={image1}
                    vehicleModal={fields.vehicleModal}
                    vehicleMake={fields.vehicleMake}
                    vehicleYear={fields.vehicleYear}
                    vehiclePrice={fields.vehiclePrice}
                />
                { /* Post Preview - LEFT Section - Start */}

            </div>
            { /* Post info & Post preview - block & props - End */}

        </main> 
    );
}

// Header
function Header() {

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 mb-3 text-center bg-light">
            <h1>Add New Post</h1>
            <Link to="/dashboard" className="btn btn-primary"><i className="fa fa-reply"></i> Dashboard</Link>
        </header>
    );
}

// Image function
function Images(props) {

    // Important variables
    const {

        image1,
        image2,
        image3,
        image4,
        image5,
        handleImage1,
        handleImage2,
        handleImage3,
        handleImage4,
        handleImage5,

    } = props;

    // Return UI
    return (
        <div className="row mx-auto justify-content-center ">

            { /* Image1 - Start */}
            <div className="col-sm image-container mb-3">
                <div className="card">

                    { /* Image upload 1 */}
                    <img  src={image1 === null ? null : image1} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file1" className="color-red">Image 1</label>

                            { /* Input Field */}
                            <input
                                required="required"
                                form="form"
                                accept=".png, .jpg, .jpeg"
                                type="file"
                                name="file1"
                                id="file1"
                                onChange={handleImage1}
                            />
                        </div>
                    </div>
                </div>
            </div>
            { /* Image1 - End */}

            { /* Image2 - Start */}
            <div className="col-sm image-container mb-3">
                 
                <div className="card">

                    { /* Image upload 2 */}
                    <img src={image2 === null ? null : image2} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file2" className="color-red">Image 2</label>
                            <input
                                id="file2"
                                type="file"
                                name="file2"
                                form="form"
                                required="required"
                                onChange={handleImage2}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

                </div>
            </div>
            { /* Image2 - End */}

            { /* Image3 - Start */}
            <div className="col-sm image-container mb-3">
                { /* CARD */}
                <div className="card">

                    { /* Image upload 3 */}
                    <img src={image3 === null ? null : image3} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file3" className="color-red">Image 3</label>
                            <input
                                id="file3"
                                form="form"
                                type="file"
                                name="file3"
                                required="required"
                                onChange={handleImage3}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            { /* Image3 - End */}

            { /* Image4 - Start */}
            <div className="col-sm image-container mb-3">

                <div className="card">

                    { /* Image upload 4 */}
                    <img src={image4 === null ? null : image4} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file4" className="color-red">Image 4</label>
                            <input
                                id="file4"
                                form="form"
                                type="file"
                                name="file4"
                                required="required"
                                onChange={handleImage4}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

                </div>
            </div>
            { /* Image4 - End */}

            { /* Image5 - Start */}
            <div className="col-sm image-container mb-3"> 

                <div className="card">

                    { /* Image upload 5 */}
                    <img src={image5 === null ? null : image5} className="align-self-center w-100" />

                    { /* Body */}
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="file5" className="color-red">Image 5</label>
                            <input
                                id="file5"
                                form="form"
                                type="file"
                                name="file5"
                                required="required"
                                onChange={handleImage5}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                    </div>

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

        // Important variable
        isLoading,
        handleSubmit,
        validateForm,
        userLastName,
        userFirstName,
        handleFieldChange,
        // Post Description
        postStatus,
        promotion,
        vehicleModal,
        vehicleMake,
        vehicleYear,
        vehiclePrice,
        vehicleMileage,
        milesPerGallon,
        bodyStyle,
        engineType,
        interiorColor,
        drivetrain,
        numberOfKeys,
        exteriorColor,
        transmission,
        doors,
        vin,

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

                        { /* Heading */ }
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

                        { /* Heading */ }
                        <h3 className="mb-4">Information</h3> 

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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
                            />
                            <small className="text-secondary">Enter vehicle price </small>
                        </div>
                        { /* Price - End */} 


                    </div>                   
                    { /* Vehicle Information - End */}

                </div>
                { /* Seller & Vehicle Information - End */}

                { /* Details - Start */}
                <div className="col-sm-6 m-0 ">

                    { /* Details - Start */}
                    <div className="border p-3 mb-3 bg-white shadow-sm">

                        { /* Heading */ }
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                                onChange={handleFieldChange}
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
                        Publish
                    </LoaderButton>
                    { /* Submit Button - End */}

                </form>
            </div>
            { /* form, Post Description, Submit Button - End */}

        </div> 
        );
}

// Preview
function Preview(props) {

    // Important variable
    const {

        image1, 
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

                    { /* Image - Start */}
                    <img
                        src={image1 === null ? null : image1}
                        style={{ minHeight: "250px" }}
                        className="w-100 bg-dark"
                    /> 
                    { /* Image - End */}

                    { /* Body - Start */}
                    <div className="card-body">
                        <p className="m-0">{vehicleYear + " " + vehicleMake + " " + vehicleModal}</p> 
                        <p><b>${vehiclePrice}</b></p> 
                    </div>
                    { /* Body - End */}

                </div>
            </article>
        </div>
        );
}
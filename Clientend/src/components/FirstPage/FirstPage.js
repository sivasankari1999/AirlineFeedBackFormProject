import React, { useState } from 'react'
import { Card, Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import "./FirstPage.css"
import Header1 from './Header1'

export const FirstPage = ({ formData, setForm, setCurrentStep, num1, country1, region1, setNum, setCountry, setRegion }) => {
    console.log(formData);
    let { num, country, region, selectedAirline, FlyerNumber,
        first_name, last_name, middle_name, email, address1, address2, city, postalCode } = formData;
    let airlines = ["Indigo Airlines", "SpiceJet Airways", "Air India Express", "Delta Airlines/SkyMiles"];
    formData.num = num1;
    formData.country = country1;
    formData.region = region1
    setNum(num)
    setCountry(country)
    setRegion(region)
    //error states
    let [num_err, setNum_err] = useState('')
    let [country_err, setCountry_err] = useState('')
    let [region_err, setRegion_err] = useState('')
    let [selectedAirline_err, setSelectedAirline_err] = useState('')
    let [first_name_err, setFirstName_err] = useState('')
    let [last_name_err, setlastName_err] = useState('')
    let [email_err, setEmail_err] = useState('')
    let [address1_err, setAddress1_err] = useState('')
    let [city_err, setCity_err] = useState('')
    let [postalCode_err, setPostalCode_err] = useState('')
    // flag values
    let numFlag, countryFlag, regionFlag, selectedAirlineFlag, first_name_Flag, last_name_Flag,
        emailFlag, address1Flag, cityFlag, postalCodeFlag = false;
    let formStatus = false;

    const onTrigger = (event) => {
        event.preventDefault();
        //num validation
        if (!formData.num.trim()) {
            setNum_err('Select the country and enter the number')
            numFlag = false
        } else {
            setNum_err('')
            numFlag = true
        }
        //country validation
        if (!formData.country.trim()) {
            setCountry_err('Select the country ')
            countryFlag = false
        } else {
            setCountry_err('')
            countryFlag = true
        }
        //region validation
        if (!formData.region.trim()) {
            setRegion_err('Select the region ')
            regionFlag = false
        } else {
            setRegion_err('')
            regionFlag = true
        }
        //select airline validation
        if (!formData.selectedAirline.trim()) {
            setSelectedAirline_err('Select the country ')
            selectedAirlineFlag = false
        } else {
            setSelectedAirline_err('')
            selectedAirlineFlag = true
        }
        //firstname validation
        if (!formData.first_name) {
            setFirstName_err('first_name is required')
            first_name_Flag = false
        }
        else {
            setFirstName_err('')
            first_name_Flag = true
        }
        //last name validation
        if (!formData.last_name) {
            setlastName_err('last_name is required')
            last_name_Flag = false
        }
        else {
            setlastName_err('')
            last_name_Flag = true
        }

        // email validation
        if (!formData.email) {
            setEmail_err('Email is required')
            emailFlag = false
        } else if (!formData.email.indexOf("@") === -1) {
            setEmail_err('Please ingress a valid email address')
            emailFlag = false
        } else {
            setEmail_err('')
            emailFlag = true
        }
        //addresss1 validtion
        if (!formData.address1) {
            setAddress1_err('Enter the Address')
            address1Flag = false
        } else {
            setAddress1_err('')
            address1Flag = true
        }
        //city validation
        if (!formData.city) {
            setCity_err('Enter the city')
            cityFlag = false
        } else {
            setCity_err('')
            cityFlag = true
        }
        //postalcode validation
        if (!formData.postalCode) {
            setPostalCode_err('Enter the postalCode')
            postalCodeFlag = false
        } else {
            setPostalCode_err('')
            postalCodeFlag = true
        }
        if (numFlag && countryFlag && regionFlag && selectedAirlineFlag && first_name_Flag && last_name_Flag &&
            emailFlag && address1Flag && cityFlag && postalCodeFlag == true) {
            formStatus = true
        }
        else {
            formStatus = false
        }
        console.log(formStatus);
        if (formStatus == true)
            setCurrentStep(2)

    }
    const changeHandler = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <>
            <Header1></Header1>
            <br />
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            {/*-----------------------------------------Card content starts here--------------------------------------------------*/}
            <div className="mainContainer">
                <form onSubmit={onTrigger} >
                    <Card>
                        <Card.Header className="cardHeader">Are You a Skylines Member?<a className="LoginTag">Login</a> So we can help you faster</Card.Header>
                        <Container>
                            <Row className="g-2">
                                <Col></Col>
                                <Col className="text-end sideText">All Fields are required unless noted</Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className="fullNameText text-start">Please make sure your Full Name is entered exactly
                                    as it appears on your government issued Id</Col>
                            </Row>
                            <Row className="g-2">
                                <Col className="text-start"> (example:Jane Elizabeth Doe)</Col>
                            </Row>
                            <br />
                            {/*---------------------------------Form starts here -first line-----------------------------------*/}
                            <Row className="g-2">
                                <Col md>
                                    <select onChange={changeHandler} value={selectedAirline}
                                        className="selectBox mb-3"
                                        name="selectedAirline" >
                                        <option value="Select">Select</option>
                                        {airlines.map((selectedAirline, ind) => {
                                            return <option value={selectedAirline} key={ind}>{selectedAirline}</option>
                                        })
                                        }
                                    </select>
                                    {selectedAirline_err && <p className="text-danger">{selectedAirline_err}</p>}
                                </Col>
                                <Col md>
                                    <input type="text" name="FlyerNumber" onChange={changeHandler} value={FlyerNumber}
                                        className="textBox mb-3" placeholder="Frequent FlyerNumber (optional)" />
                                </Col>
                                <Col className="d-flex justify-content-end">
                                </Col>
                            </Row>
                            <br />
                            {/*------------------------------------------form second line-----------------------------------------*/}
                            <Row className="g-2">
                                <Col md>
                                    <input type="text" name="first_name" onChange={changeHandler} value={first_name}
                                        className="textBox mb-3" placeholder="First Name" />
                                    {first_name_err && <p className="text-danger">{first_name_err}</p>}
                                </Col>
                                <Col md>
                                    <input type="text" name="middle_name" placeholder="Middle Name"
                                        className="textBox mb-3" value={middle_name} onChange={changeHandler} />

                                </Col>
                                <Col md>
                                    <input type="text" name="last_name" onChange={changeHandler} value={last_name}
                                        className="textBox mb-3" placeholder="Last Name" />
                                    {last_name_err && <p className="text-danger">{last_name_err}</p>}
                                </Col>
                            </Row>
                            <br />
                            {/*----------------------------------------form third line----------------------------------------------*/}
                            <Row className="g-2">
                                <Col md>
                                    <input type="text" name="email" onChange={changeHandler} value={email}
                                        className="emailBox mb-3" placeholder="email" />
                                    {email_err && <p className="text-danger">{email_err}</p>}
                                </Col>
                                <Col md>
                                    <PhoneInput className="phoneInput mb-3"
                                        placeholder="Enter phone number"
                                        value={num1}
                                        onChange={setNum} />
                                    {num_err && <p className="text-danger">{num_err}</p>}
                                </Col>
                                <Col className="d-flex justify-content-end">
                                </Col>
                            </Row>
                            <br />
                            {/*-------------------------------------------form fourth line---------------------------------------*/}
                            <Row className="g-2">
                                <Col md>
                                    <CountryDropdown
                                        className="textBox mb-3"
                                        value={country1} onChange={setCountry}
                                    />
                                    {country_err && <p className="text-danger">{country_err}</p>}
                                </Col>
                                <Col md>
                                    <input type="text" onChange={changeHandler} value={address1} className="textBox mb-3"
                                        name="address1" placeholder="Address1" />
                                    {address1_err && <p className="text-danger">{address1_err}</p>}
                                </Col>
                                <Col md>
                                    <input type="text" onChange={changeHandler} value={address2} className="textBox mb-3"
                                        name="address2" placeholder="Address2(optional)" />
                                </Col>
                            </Row>
                            <br />
                            {/*------------------------fifth line of form-------------*/}
                            <Row className="g-2">
                                <Col md>
                                    <input type="text" onChange={changeHandler} value={city} className="textBox mb-3"
                                        name="city" placeholder="City" />
                                    {city_err && <p className="text-danger">{city_err}</p>}
                                </Col>
                                <Col md>
                                    <RegionDropdown
                                        className="textBox mb-3"
                                        country={country1} onChange={setRegion}
                                        value={region1}
                                    />
                                    {region_err && <p className="text-danger">{region_err}</p>}
                                </Col>
                                <Col md>
                                    <input type="text" onChange={changeHandler} value={postalCode} className="textBox mb-3"
                                        name="postalCode" placeholder="Postal Code" />
                                    {postalCode_err && <p className="text-danger">{postalCode_err}</p>}
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <div className="button mt-3">
                        <div className="row">
                            <div className="col-auto">
                                <Button variant="danger" size="lg" type="submit"
                                    className="button1 mb-3" >
                                    Continue to Comment
                                </Button>
                            </div>
                            <div className="col-auto">
                                <Button variant="outline-dark" size="lg" className="button2- mb-3"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}



import React, { useState } from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'
import Header3 from "./Header3";
import "./ThirdPage.css"
import axios from "axios";
export const ThirdPage = ({ formData, setForm, setCurrentStep }) => {
  const [errormsg, setErrorMsg] = useState("");
  const onTrigger = (event) => {
    //console.log(formData);
    console.log(formData);
    event.preventDefault();
    const url = "http://localhost:3001/page1";
    axios
      .post(url, formData)
      .then((res) => {
        console.log("res.data: ", res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          console.log("err.response: ", err.response);
          console.log("err.response.ok: ", err.response.ok);
          console.log("err.response.data: ", err.response.data);
          setErrorMsg(err.response.data.message);
          console.log(errormsg);
        }
      });
      setErrorMsg("");
    setCurrentStep(4)
  }
  const OnPreview = (event) => {
    event.preventDefault();
    setCurrentStep(2)
  }
  return (
    <>
      <Header3 />
      <br />
      <br />
      <div className="mainContainer">
        <Form onSubmit={onTrigger}>
          <Card className="fullText">
            <Container>
              <Row className="g-2">
                <Col md>
                  Year Experience
                </Col>
                <Col md>
                  What is your feedback about?
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  Give a Compliment
                  <br />
                  * Airline Experience</Col>
              </Row>
            </Container>
          </Card>
          <br />
          <br />
          <br />
          <Card className="fullText">
            <Container>
              <Row className="g-2">
                <Col md>
                  Personal Information
                </Col>
                <Col md>
                  Coco OLive
                </Col>
                <Col md>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  Contact Information
                </Col>
                <Col md>
                  Airline Program</Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.num}
                    <br />
                    {formData.email}
                  </div>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.selectedAirline}
                  </div>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>Address
                </Col>
                <Col md>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md><div className="details">
                  {formData.address1}<br />
                  {formData.address2}<br />
                  {formData.city}<br />
                  {formData.postalCode}<br />
                  {formData.region}<br />
                  {formData.country}<br />
                </div>
                </Col>
                <Col md>
                </Col>
              </Row>
            </Container>
          </Card>
          <br />
          <br />
          <br />
          <Card className="fullText">
            <Container>
              <Row className="g-2">
                <Col md>Comment Details</Col>
                <Col md>Flight Information</Col>
                <Col md>Comment</Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.selectedAirline}
                  </div>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.comment}
                  </div>
                </Col>
              </Row>
              <br />
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>Frequent Flyer Number
                </Col>
                <Col>Attachments</Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md> <div className="details">
                  {formData.FlyerNumber}
                </div></Col>
                <Col md> <div className="details">
                  {formData.fileName}
                </div>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                </Col>
                <Col md></Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>Ticket Number</Col>
                <Col md></Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.ticketNum}
                  </div></Col>
                <Col md></Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>Would you like a reply?</Col>
                <Col md></Col>
              </Row>
              <Row className="g-2">
                <Col md>
                </Col>
                <Col md>
                  <div className="details">
                    {formData.group1}
                  </div></Col>
                <Col md></Col>
              </Row>

            </Container>
          </Card>
          <Container className="mt-3">
            <Row className="g-2">
              <Col md>By submitting this form,I understand that my <br />
                personal information will be processed in <br />
                accordance with Airline policy
              </Col>
              <Col md>
                <div className="button2 mb-3">
                  <Button variant="danger" size="lg" type="submit"
                    className="mb-3">
                    Confirm and Submit
                  </Button>{' '}
                  <Button variant="outline-dark" size="lg"
                    className="mb-3" inactive onClick={OnPreview}>
                    Back
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  )
}

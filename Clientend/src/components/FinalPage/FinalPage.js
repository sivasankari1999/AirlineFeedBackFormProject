import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header4 from './Header4'
import "./FinalPage.css"
import airLine from "../../assets/Img/airLine.png"
import redLine from "../../assets/Img/redLine.jpg"
export const FinalPage = ({ formData, setForm }) => {
    return (
        <>
            <Header4/>
            <Card>
                <img src={airLine} alt="airLine" className="airLineImg" />
                <Container>
                    <Row>
                        <Col><h1>ThankYou For your</h1></Col>
                    </Row>
                    <Row>
                        <Col><h1>FeedBack.</h1></Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={redLine} alt="redLine" className="redLineImg"></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>If You requested a reply ,
                                you will receive an acknowledgment email with your</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>case number and other important information.
                                We appreciate your feedback.</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>
                                and thank you for flying Delta.
                            </h6>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </Card>
        </>
    )
}

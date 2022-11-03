import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Header1.css"
export default function Header1() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="subtitleName">Personal Information</Col>
                </Row>
                <br/>
                <Row>
                    <Col className="subtitleName">Please provide your contact information</Col>
                </Row>
            </Container>
        </>
    )
}

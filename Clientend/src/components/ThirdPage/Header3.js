import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../FirstPage/Header1.css'
export default function Header3() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="subtitleName">Review Your Information</Col>
                </Row>
                <br />
                <Row>
                    <Col className="subtitleName">Please confirm the information below is correct</Col>
                </Row>
            </Container>
        </>
    )
}

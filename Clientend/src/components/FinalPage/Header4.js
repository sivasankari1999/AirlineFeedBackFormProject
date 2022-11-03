import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../FirstPage/Header1.css';
export default function Header4() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="subtitleName">Confirmation</Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col className="subtitleName">Your Comment has been submitted</Col>
                </Row>
            </Container>
        </>
    )
}

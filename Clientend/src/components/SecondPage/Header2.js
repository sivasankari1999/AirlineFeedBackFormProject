import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../FirstPage/Header1.css'
export default function Header2() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="subtitleName">Leave your Comment</Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col className="subtitleName">Please provide as much as details you can</Col>
                </Row>
            </Container>
        </>
    )
}

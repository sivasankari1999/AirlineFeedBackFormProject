import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
export default function Navcomp() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Give a FeedBack / File a complaint
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { Card, Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap'
import Header2 from './Header2'
import "./SecondPage.css"
import { FcInfo } from "react-icons/fc";
export const SecondPage = ({ formData, setForm, setCurrentStep }) => {
    const { ticketNum, confirmationNum, comment, fileName } = formData;
    const [comment_err_mess, setCommentErrMess] = useState('');
    const [file_err_mess, setFileMess] = useState('')
    let formStatus = false;
    let commentFlag = false;
    let fileFlag = false
    const onTrigger = (event) => {
        event.preventDefault();
        console.log(formData);
        if (!formData.comment.trim()) {
            setCommentErrMess('Comments is required')
            commentFlag = false
        } else {
            setCommentErrMess(' ');
            commentFlag = true
        }
        if (!formData.fileName.trim()) {
            setFileMess('File is required')
            fileFlag = false
        } else {
            setFileMess(' ');
            fileFlag = true
        }
        if (commentFlag && fileFlag == true) {
            formStatus = true
        }
        else {
            formStatus = false
        }
        console.log(formStatus);
        if (formStatus == true) {
            setCommentErrMess(' ')
            setFileMess(' ');
            setCurrentStep(3);
        }
    }
    const OnPreview = (event) => {
        event.preventDefault();
        setCurrentStep(1)
    }
    const changeHandler = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    }
    const fileChangeHandler = (event) => {
        // console.log(event.target.files);
        if (event.target.files.length == 0) {
            console.log("No file is Selected");
            return;
        }
        let fileName = event.target.files;
        let fileArray = [];
        console.log("File: ", fileName);
        for (let i = 0; i < fileName.length; i++)
            fileArray[i] = fileName[i]
        setForm({ ...formData, fileName: fileArray[0].name, fileArray });
        console.log(fileArray);
    }
    return (
        <>
            <br />
            <Header2 />
            <br/>
            <div className="maincontainer">
                <Form onSubmit={onTrigger}>
                    <Card>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col className="text-end sideText">All Fields are required unless noted</Col>
                            </Row>
                            <Row>
                                <Col className="text1">In Order to assist you faster ,
                                    please lookup your flight details by providing your Confirmation# and
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text1">Ticket#. Your Fullname must match your Ticket#.
                                    Don't have your Confirmation# or Ticket#?
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text1">Check the box below to continue with
                                    partial (or no) ticket information.
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                            <Row className='g-2'>
                                <br />
                                <Col md>
                                    <div>
                                        {formData.first_name}
                                    </div>
                                </Col>
                                <Col md>
                                    <input type="text" placeholder="Confirmation#" name="confirmationNum"
                                        value={confirmationNum} onChange={changeHandler}
                                        className="form-control mb-3"
                                    />
                                </Col>
                                <Col className="info">
                                    <FcInfo></FcInfo>
                                </Col>
                                <Col md>
                                    <input type="text" name="ticketNum" value={ticketNum} onChange={changeHandler}
                                        placeholder="Ticket#" className="form-control mb-3" />
                                </Col>
                                <Col className="info">
                                    <FcInfo></FcInfo>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3 checkboxx" id="formGridCheckbox">
                                <Form.Check type="checkBox" label="I don't have any Confirmation# and/or Ticket#" />
                            </Form.Group>
                            <br />
                            <Button href="https://www.makemytrip.com/flights/flight-status.htm" size='md' variant="outline-dark" className="lookbut">
                                Look Up Flight details
                            </Button>
                        </Container>
                    </Card>
                    <br />
                    <br />
                    <Card>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col className="text-end sideText">All Fields are required unless noted</Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col>Please Provide additional details below(1500 characters limit)</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input
                                        as="textarea" name="comment" value={comment} onChange={changeHandler}
                                        placeholder="Leave a comment here" className="form-control mb-3"
                                        style={{ height: '100px' }}
                                    />
                                    {comment_err_mess && <p className="text-danger">{comment_err_mess}</p>}
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col className="attachment">
                                    +Add an Attachment
                                    <input type="file" multiple onChange={fileChangeHandler}
                                        className="form-control mb-3" name="fileName" />
                                    {file_err_mess && <p className="text-danger">{file_err_mess}</p>}
                                </Col>
                            </Row>
                            <Row>
                                <Col><div style={{ color: "#191970" }}>{formData.fileName}</div>
                                    Maximum number of attachments:5 items Maximum File Size:25Mb
                                    Accepted File Types: JPEG,JPG,PNG,PPT,PPTX,CSV,DOCX
                                </Col>

                            </Row>
                            <Row>
                                <Col>DOC,XLSX,XLS</Col>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <Col>
                                    Would Like a Reply?</Col>
                            </Row>
                            <Row>
                                <Col className="radioBox">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="group1" value="yes" onChange={changeHandler}
                                        type="radio"
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="group1" value="no" onChange={changeHandler}
                                        type="radio"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <br />
                    <br />
                    <br />
                    <div className="button2 mb-3">
                        <Button variant="danger" size="lg" type="submit" className="mb-3">
                            Continue to Review
                        </Button>{' '}
                        <Button className="mb-3" variant="outline-dark" size="lg" onClick={OnPreview} >
                            Back
                        </Button>

                    </div>
                </Form>

            </div>
        </>
    )
}

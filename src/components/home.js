import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import LifeStyleSlide from './lifestyleslide';
export default class HomePage extends Component {

    render() {
        return (
            <div>
                <Container fluid="True">
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="8" sm="8" md="8" lg="8" xl="8">
                                            Life Style
                                        </Col>
                                        <Col className="text-right" xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody style={{minHeight:"70vh"}}>
                                    <LifeStyleSlide />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="8" sm="8" md="8" lg="8" xl="8">
                                            Travel
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody style={{minHeight:"70vh"}}>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="8" sm="8" md="8" lg="8" xl="8">
                                            Foods And Beverages
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody style={{minHeight:"70vh"}}>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                                            Menu 1
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                                            Menu 2
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                                            Menu 3
                                        </Col>
                                        <Col className="text-right" xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                                            Menu 4
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                                            Menu 5
                                        </Col>
                                        <Col className="text-right"  xs="4" sm="4" md="4" lg="4" xl="4">
                                            View More
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

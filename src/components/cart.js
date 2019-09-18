import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, Input } from 'reactstrap';
import DefaultImg from '../assets/images/defaultImage.png';
export default class Cartpage extends Component {

    render() {
        return (
            <div>
                <Container fluid="True">
                    <Row style={{marginTop:"1em",marginBottom:"1em"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                            Item List
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="2" xl="2">
                                            <Card>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <img src={DefaultImg} alt="Logo" style={{width:"100%"}}/>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <h5>Item Name</h5>
                                                </CardBody>
                                                <CardBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Row>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding:"0px"}}>
                                                            <Input type="email" name="email" id="exampleEmail" />
                                                        </Col>
                                                        <Col xs="3" sm="3" md="3" lg="3" xl="3" style={{padding:"0px"}}>
                                                            <Button color="primary" block><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="12" xl="12" style={{padding:"0px"}}>
                                            <Button color="primary" block>Add to shopping cart</Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

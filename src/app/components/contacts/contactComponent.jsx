import React from 'react'
import './contactStyle.css';
import emailIcon from '../../images/icons/email.svg'
import { Col, Container, Row } from 'react-bootstrap';

function ContactComponent() {
    return (
        <div className="contacts">
            <h1>Contact Information</h1>
            <Container>
                <div className="contactIcons">
                    <Row>
                        <Col>
                            <div className="email">
                                <img src={emailIcon} alt="" height="30" />
                                <div><span><a href="mailto:ronaldo.otom@gmail.com">ronaldo.otom@gmail.com</a></span></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ContactComponent

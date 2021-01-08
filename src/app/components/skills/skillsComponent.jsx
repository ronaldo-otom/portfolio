import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './skillsStyle.css';
import htmlImage from '../../images/languages/html.png';
import cssImage from '../../images/languages/css.png';
import javascriptImage from '../../images/languages/javascript.png';
import firebaseImage from '../../images/languages/firebase.png';
import koaImage from '../../images/languages/koa.png';
import nodeImage from '../../images/languages/node.png';
import reactImage from '../../images/languages/react.png';
import mongodbImage from '../../images/languages/mongodb.png';

function EducationComponent() {
    const skills = [
        {
            imgSource: htmlImage,            
        },
        {
            imgSource: cssImage
        },
        {
            imgSource: javascriptImage
        },
        {
            imgSource: firebaseImage
        },
        {
            imgSource: mongodbImage
        },
        {
            imgSource: nodeImage
        },
        {
            imgSource: koaImage
        },
        {
            imgSource: reactImage
        },
    ];
    return (
        <div className="skills">
            <h1>Skills</h1>
            <section>
                <Container fluid>               
                    <Row  style={{display: 'flex', justifyContent: 'center'}}>
                        {skills.map(skill => 
                         <Col xs="auto">
                            <img src={skill.imgSource} alt="" height="90" />
                        </Col>     
                        )} 
                    </Row>                   
                </Container>
            </section>
        </div>
    )
}

export default EducationComponent

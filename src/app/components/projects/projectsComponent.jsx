import React from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './projectsStyle.css';
import kahonhkImage from '../../images/projects-images/kahonHK.PNG'
import simpleTaskMgmt from '../../images/projects-images/simpleTaskMgmt.PNG'

function ProjectsComponent() {
    const projects = [
        {
            img: kahonhkImage,
            title: 'Kahon.hk',
            description: 'HTML, CSS, Node JS, Koa Framework, EJS',
            link: 'www.kahon.hk'
        },
        {
            img: simpleTaskMgmt,
            title: 'Simple Task Management',
            description: 'ReactJS, Redux, Bootstrap, Fontawesome, Mongodb, Express',
            link: 'https://simple-tak-management.netlify.app/'
        },
        {
            img: '',
            title: 'Simple Task Management',
            description: 'ReactJS, Redux, Bootstrap, Fontawesome, Mongodb, Express',
            link: ''
        },
        {
            img: '',
            title: 'Simple Task Management',
            description: 'ReactJS, Redux, Bootstrap, Fontawesome, Mongodb, Express',
            link: ''
        },
    ];
    return (
        <div className="projects">
            <h1>Projects</h1>
            <Container fluid>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                {projects.map(project =>
                    <Col xs="auto">
                        <Card className="cardStyle">
                        <Card.Img variant="top" src={project.img} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button variant="primary" onClick={() => window.location.replace(project.link)}>Check it out</Button>                            
                        </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsComponent

import React from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './projectsStyle.css';

function ProjectsComponent() {
    const projects = [
        {
            img: '',
            title: 'Kahon.hk',
            description: 'ReactJS, Redux, Bootstrap, Fontawesome, Mongodb, Express',
            link: 'www.kahon.hk'
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

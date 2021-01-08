import React from 'react';
import './titleStyle.css';
import fbIcon from '../../images/icons/facebook.png';
import linkedinIcon from '../../images/icons/linkedin.png';
import githubIcon from '../../images/icons/github.png';
import developerImage from '../../images/assets/developer.png';
import { Col, Container, Row } from 'react-bootstrap';

function TitleComponent() {
	return (
		<div className="titleComponent">
			<Container>
				<Row>
					<Col>
						<div className="icons">
							<img src={fbIcon} height="23" width="23" alt="" />
							<img src={linkedinIcon} height="23" width="23" alt="" />
							<img src={githubIcon} height="23" width="23" alt="" />
                        </div>
                        <div  className="title">
                            <h1>I am Ronaldo Otom</h1>
                            <p>
                                A self taught <strong>Web Developer (MERN Stack)</strong>, strive to become a professional in
                                this field.
                            </p>
                        </div>						
					</Col>
                    <Col>
                    <div className="titleImage">                        
                        <div>
                            <img src={developerImage} alt="" height="300" />
                        </div>
                    </div>
                    </Col>
				</Row>
			</Container>
		</div>
	);
}

export default TitleComponent;

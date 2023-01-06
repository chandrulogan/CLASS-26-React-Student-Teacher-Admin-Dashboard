import React from 'react'
import { Col, Card, Row, CardTitle, CardText, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>School Admin Chandru</h1>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Teachers Data
                        </CardTitle>
                        <CardText>
                            You can do the CRUD operations with the Teachers data.
                        </CardText>
                        <Button color='primary' onClick={() => navigate('/Teacher')}>
                            Check Teachers details
                        </Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">
                            Students Data
                        </CardTitle>
                        <CardText>
                        You can do the CRUD operations with the Students data.
                        </CardText>
                        <Button color='primary' onClick={() => navigate('/Profile')}>
                             Check Students details
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

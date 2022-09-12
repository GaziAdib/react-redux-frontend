import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDeleteProjectMutation, useGetSingleProjectQuery } from '../rtk-query/features/project/api/apiSlice';

const ProjectDetail = () => {

    const navigate = useNavigate()
    const {projectId} = useParams();

    const { data:singleProject } = useGetSingleProjectQuery(projectId);
    const [deleteProject] = useDeleteProjectMutation();

    console.log(singleProject);

    // Delete Single Project
    const deleteSingleProject = (id) => {
        deleteProject(id);
        navigate('/');
    }

    
  return (
    <div>

        <Container>
            <h1 className='text-center mt-3 mb-3 pd-2'>Project Details</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={6} lg={4}>
                {singleProject ? (
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={singleProject.thumbnail} />
                    <Card.Body>
                    <Card.Title>{singleProject.title}</Card.Title>
                    <Card.Text><b>({singleProject.category})</b> </Card.Text>
                    <Card.Text>
                     {singleProject.description}
                    </Card.Text>
                    <a className='btn btn-warning m-2 pd-2' href={singleProject.demo} target="_blank">Project Demo Link</a>
                    <br />
                    <hr />
                    <Link to={'/update-project/'+singleProject.id}><Button variant="primary" className='mt-2 mb-2 pd-2'>Update</Button></Link>
                    <Button className='m-2 pd-2' variant='danger' onClick={() => deleteSingleProject(singleProject.id)}>Delete</Button> 
                    </Card.Body>
                </Card>
                ) : ('no data')}
                </Col>
            </Row>

        </Container>
  
            
    </div>

  )
}

export default ProjectDetail
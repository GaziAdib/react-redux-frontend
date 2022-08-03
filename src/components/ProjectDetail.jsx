import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { detailProject, deleteProject, listProjects } from '../actions/projectAction'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectDetail = () => {

    const navigate = useNavigate()
    const {id} = useParams();
    const dispatch = useDispatch()
    const detailProjects = useSelector(state => state.detailProject)
    const { project } =  detailProjects
  

    useEffect(() => {
        dispatch(detailProject(id))
    },[id, dispatch])


    // Delete Single Project
    const deleteSingleProject = (id) => {
        dispatch(deleteProject(id));
        navigate('/');
        dispatch(listProjects());
        
    }

    
  return (
    <div>

        <Container>
            <h1 className='text-center mt-3 mb-3 pd-2'>Project Details</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={6} lg={4}>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={project.thumbnail} />
                    <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text><b>({project.category})</b> </Card.Text>
                    <Card.Text>
                     {project.description}
                    </Card.Text>
                    <a className='btn btn-warning m-2 pd-2' href={project.demo} target="_blank">Project Demo Link</a>
                    <br />
                    <hr />
                    <Link to={'/update-project/'+id}><Button variant="primary" className='mt-2 mb-2 pd-2'>Update</Button></Link>
                    <Button className='m-2 pd-2' variant='danger' onClick={() => deleteSingleProject(id)}>Delete</Button> 
                    </Card.Body>
                </Card>
                </Col>
            </Row>

        </Container>
  
            
    </div>

  )
}

export default ProjectDetail
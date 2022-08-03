import React, { useEffect } from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProjects } from '../actions/projectAction'
import { ADD_PROJECT_RESET } from '../constants/projectConstants'



const ProjectList = () => {

 // get data from state

 const dispatch = useDispatch()

 const projectList = useSelector(state => state.projectList)

 const { projects, loading, success, error } = projectList


 // consume Data in useEffect

    useEffect(() => {
      
      dispatch({ type: ADD_PROJECT_RESET })
  
      dispatch(listProjects())
      
    },[dispatch])
 
  return (
    <div>
        <h1>all Projects List</h1>
        <hr />
        <Container>

          <Row>

            {projects.map((project) => (
              <Col xs={12} md={6} lg={4} key={project.id}>
                <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                  <Card.Img variant="top" height='150px' src={project.thumbnail} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text><b>({project.category})</b></Card.Text>
                    <hr />
                    <span><a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                    <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}

          </Row>
        
        </Container>
            
    </div>
  )
}

export default ProjectList

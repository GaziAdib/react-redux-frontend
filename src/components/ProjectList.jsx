import React from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetAllProjectsQuery } from '../rtk-query/features/project/api/apiSlice'
import { filtered } from '../rtk-query/features/project/filter/filterSlice'

const ProjectList = () => {


const {data: projectList} = useGetAllProjectsQuery();
const { search, filterByType } = useSelector(state => state.filter);


const dispatch = useDispatch();

  return (
    <div>
        <h1>all Projects List</h1>
        <hr />
        <Container>
          <Row>
            {projectList ? (filterByType ?  projectList
            .filter(f => f.category === filterByType)
            .map((project) => (
              <Col xs={12} md={6} lg={4} key={project.id}>
                <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                  <Card.Img variant="top" height='150px' src={project.thumbnail} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
                    <hr />
                   <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                    <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
                  </Card.Body>
                </Card>
              </Col>
            )) : search ? projectList
            .filter(f => f.title.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <Col xs={12} md={6} lg={4} key={project.id}>
                <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                  <Card.Img variant="top" height='150px' src={project.thumbnail} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
                    <hr />
                   <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                    <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
                  </Card.Body>
                </Card>
              </Col>
            )) : search && filterByType ? (
              projectList
              .filter(f => f.title.toLowerCase().includes(search.toLowerCase()))
              .filter(f => f.category === filterByType)
              .map((project) => (
                <Col xs={12} md={6} lg={4} key={project.id}>
                  <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                    <Card.Img variant="top" height='150px' src={project.thumbnail} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
                      <hr />
                     <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                      <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              projectList
              .map((project) => (
                <Col xs={12} md={6} lg={4} key={project.id}>
                  <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                    <Card.Img variant="top" height='150px' src={project.thumbnail} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
                      <hr />
                     <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                      <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )) : ('No Data') }

          </Row>
        
        </Container>
            
    </div>
  )
}

export default ProjectList


// {projectList ? (filterByType ?  projectList
//   .filter(f => f.category === filterByType)
//   .map((project) => (
//     <Col xs={12} md={6} lg={4} key={project.id}>
//       <Card style={{ width: '18rem' }} className='m-3 pd-2'>
//         <Card.Img variant="top" height='150px' src={project.thumbnail} />
//         <Card.Body>
//           <Card.Title>{project.title}</Card.Title>
//           <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
//           <hr />
//          <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
//           <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
//         </Card.Body>
//       </Card>
//     </Col>
//   )):projectList
//   .map((project) => (
//     <Col xs={12} md={6} lg={4} key={project.id}>
//       <Card style={{ width: '18rem' }} className='m-3 pd-2'>
//         <Card.Img variant="top" height='150px' src={project.thumbnail} />
//         <Card.Body>
//           <Card.Title>{project.title}</Card.Title>
//           <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
//           <hr />
//          <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
//           <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/'+project.id}>View</Link>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))) : ('No Data') }
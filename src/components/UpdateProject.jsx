import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { detailProject, listProjects, updateProject } from '../actions/projectAction';
import { UPDATE_PROJECT_RESET } from '../constants/projectConstants';


const UpdateProject = () => {

 const [thumbnail, setThumbnail] = useState(null);
 const [title, setTitle] = useState('');
 const [category, setCategory] = useState('');
 const [description, setDescription] = useState('');
 const [demo, setDemo] = useState('');

 const {id} = useParams();
 const navigate = useNavigate()
 

 // on Page Load get all the data by id
 const dispatch = useDispatch()

 const detailProjects = useSelector(state => state.detailProject)
 const { project , loading } =  detailProjects
 const updatedProject = useSelector(state => state.updateProject)
 const { project:updated_project, success,  loading: updated_loading } = updatedProject


 useEffect(() => {
    // get details of project on page load

    if(success){
        dispatch({ type: UPDATE_PROJECT_RESET })

    } else {

        dispatch(detailProject(id))

        setThumbnail(project.thumbnail)
        setTitle(project.title)
        setCategory(project.category)
        setDescription(project.description)
        setDemo(project.demo)

    }
    

    

 },[id, dispatch])



 const projectUpdateSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('thumbnail', thumbnail)
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('demo', demo)

    // pass form data to api using actions

     dispatch(updateProject(formData, id));

     dispatch(listProjects())
   
     navigate("/");
 

 }
 


  return (
    <div className='container mt-4 mb-4 pd-3'>
    <h1>Update Project id:{id}</h1>
    <hr />
    <div>
    <Form onSubmit={projectUpdateSubmitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Select aria-label="Default select example" value={category}   onChange={(e) => setCategory(e.target.value)} required>
            <option>Update Categories</option>
            <option value={project.category}>{project.category}</option>
            <option>--- choose Other categories ----</option>
            <option value="web development">Web Development</option>
            <option value="frontend engineer">Frontend Engineer</option>
            <option value="backend engineer">Backend Engineer</option>
        </Form.Select>

        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" value={demo} onChange={(e) => setDemo(e.target.value)} placeholder="Enter Demo Link" />
        </Form.Group>


        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Update Thumbnail</Form.Label>
            <Form.Control type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
            <img className='mt-2 mb-2 pd-4' src={thumbnail} height='100px' width='150px' />
        </Form.Group>

        <Button variant='success' type='submit'>
                Update Project
        </Button>

    </Form>
    </div>
</div>
  )
}

export default UpdateProject
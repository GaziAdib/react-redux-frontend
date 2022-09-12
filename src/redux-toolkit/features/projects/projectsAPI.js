import axios from "../../../utils/axios";

export const getProjects = async () => {
    const response = await axios.get('api/');
    return response.data;
}

export const getProjectDetail = async (id) => {
    const response = await axios.get(`api/${id}`);
    return response.data;
}

export const addProject = async (data) => {
    const response = await axios.post('api/', data);
    return response.data;
}

export const updateProject = async ({id, data}) => {
    const response = await axios.put(`api/${id}/`, data);
    return response.data;
}

export const deleteProject = async (id) => {
    const response = await axios.delete(`api/${id}`);
    return response.data;
}



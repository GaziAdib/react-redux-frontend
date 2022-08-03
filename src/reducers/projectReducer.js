import { GET_ALL_PROJECTS_REQUEST, GET_ALL_PROJECTS_SUCCESS, GET_ALL_PROJECTS_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, DETAIL_PROJECT_REQUEST, DETAIL_PROJECT_SUCCESS, DETAIL_PROJECT_FAIL, UPDATE_PROJECT_FAIL, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, ADD_PROJECT_RESET, UPDATE_PROJECT_RESET } from "../constants/projectConstants";


// GET ALL Projects Data 
export const projectListReducer = (state={ projects: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS_REQUEST:
            return { loading: true, success:false, projects: [] }
        case GET_ALL_PROJECTS_SUCCESS:
            return { loading:false, success:true, projects: action.payload }
        case GET_ALL_PROJECTS_FAIL:
            return {loading: false,success:false, error: action.payload }    
        default:
            return state;
    }
}

// ADD ALL Projects Data into API
export const addProjectReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_PROJECT_REQUEST:
            return { loading: true }
        case ADD_PROJECT_SUCCESS:
            return { loading:false, success:true, project:action.payload }
        case ADD_PROJECT_FAIL:
            return {loading: false, error: action.payload }
        case ADD_PROJECT_RESET:
            return {}      
        default:
            return state;
    }
}


// DEtail ALL Projects Data into API
export const detailProjectReducer = (state={ project: {} }, action) => {
    switch (action.type) {
        case DETAIL_PROJECT_REQUEST:
            return { loading: true, ...state }
        case DETAIL_PROJECT_SUCCESS:
            return { loading:false, project: action.payload }
        case DETAIL_PROJECT_FAIL:
            return {loading: false, error: action.payload }    
        default:
            return state;
    }
}



// UPDATE ALL Projects Data into API
export const updateProjectReducer = (state={ project: {} }, action) => {
    switch (action.type) {
        case UPDATE_PROJECT_REQUEST:
            return { loading: true, success:false }
        case UPDATE_PROJECT_SUCCESS:
            return { loading:false, success:true, project: action.payload }
        case UPDATE_PROJECT_FAIL:
            return {loading: false, error: action.payload }
        case UPDATE_PROJECT_RESET:
            return { project: {} }        
        default:
            return state;
    }
}


// dELETE ALL Projects Data into API
export const deleteProjectReducer = (state={}, action) => {
    switch (action.type) {
        case DELETE_PROJECT_REQUEST:
            return { loading: true }
        case DELETE_PROJECT_SUCCESS:
            return { loading:false, success:true }
        case DELETE_PROJECT_FAIL:
            return {loading: false, error: action.payload }    
        default:
            return state;
    }
}


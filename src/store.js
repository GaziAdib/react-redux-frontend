import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addProjectReducer, deleteProjectReducer, detailProjectReducer, projectListReducer, updateProjectReducer } from "./reducers/projectReducer";

const reducer = combineReducers({
    projectList: projectListReducer,
    addProject: addProjectReducer,
    detailProject: detailProjectReducer,
    updateProject: updateProjectReducer,
    deleteProject: deleteProjectReducer

})


const middleware = [thunk]

const  store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store    
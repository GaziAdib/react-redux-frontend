import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProject, deleteProject, getProjectDetail, getProjects, updateProject } from "./projectsAPI";

const initialState = {
    projectList:[],
    project: {},
    isError: false,
    isLoading: false,
    error: ''
};

// get projects thunk

// export const addVideos = createAsyncThunk('videos/addVideos',
//     async (video) => {
//     const new_video = await addVideo(video);
//     return new_video;
// });

export const getAllProjects = createAsyncThunk('projects/getAllProjects', async () => {
    const aprojects = await getProjects();
    return aprojects;
});


// get  Single Project  
export const getSingleProject = createAsyncThunk('projects/getSingleProject', async (id) => {
    const aproject = await getProjectDetail(id);
    return aproject;
});

// add project thunk
export const createProject = createAsyncThunk('projects/createProject', async (data) => {
    const aproject = await addProject(data);
    return aproject;
});

// update a project thunk
export const changeProject = createAsyncThunk('projects/changeProject', async ({id, data}) => {
    const aproject = await updateProject({id, data})
    return aproject;
});

// remove a project thunk
export const removeProject = createAsyncThunk('projects/removeProject', async (id) => {
    const aproject = await deleteProject(id);
    return aproject;
});




const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.projectList = [];
        })
        .addCase(getAllProjects.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.isError = false;
            state.projectList = action.payload;
        })
        .addCase(getAllProjects.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.projectList = [];
        })
        .addCase(getSingleProject.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.project = {};
        })
        .addCase(getSingleProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.project = action.payload;

        })
        .addCase(getSingleProject.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.project = {};
        })
        .addCase(createProject.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.project = {};
        })
        .addCase(createProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.project = action.payload;
        })
        .addCase(createProject.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.project = {};
        })
        .addCase(changeProject.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.project = {};
        })
        .addCase(changeProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.project = action.payload;
        })
        .addCase(changeProject.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.project = {};
        })
        .addCase(removeProject.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.project = {};
        })
        .addCase(removeProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.project = action.payload;
        })
        .addCase(removeProject.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.project = {};
        })
    }

})

export default projectsSlice.reducer;